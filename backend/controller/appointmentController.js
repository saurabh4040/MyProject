import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      address,
    } = req.body;
    
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !appointment_date ||
      !department ||
      !doctor_firstName ||
      !doctor_lastName ||
      !address
    ) {
      return res.status(400).json({ success: false, message: "Please fill out all required fields!" });
    }


    const doctor = await User.findOne({
      firstName: doctor_firstName,
      lastName: doctor_lastName,
      role: "Doctor",
      doctorDepartment: department,
    });
    console.log(doctor);

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }


    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor: {
        firstName: doctor_firstName,
        lastName: doctor_lastName,
      },
      address,
    });

    res.status(200).json({ success: true, appointment, message: "Appointment Sent!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to book appointment", error: error.message });
  }
};


export const getAppointmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ success: false, message: "Appointment not found!" });
    }
    res.status(200).json({ success: true, appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch appointment", error: error.message });
  }
};



export const getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.status(200).json({
    success: true,
    appointments,
  });
};

export const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  let appointment = await Appointment.findById(id);

  if (!appointment) {
    return res.status(404).json({ success: false, message: "Appointment not found!" });
  }

  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Appointment Status Updated!",
  });
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findById(id);

  if (!appointment) {
    return res.status(404).json({ success: false, message: "Appointment Not Found!" });
  }

  await appointment.deleteOne();

  res.status(200).json({
    success: true,
    message: "Appointment Deleted!",
  });
};
