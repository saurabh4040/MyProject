import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const patientRegister = async (req, res) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } = req.body;
  if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password) {
    return res.status(400).json({ success: false, message: "Please Fill Full Form!" });
  }

  try {
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return res.status(400).json({ success: false, message: "User already Registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      password: hashedPassword,
      role: "Patient",
    });

    res.status(200).json({
      success: true,
      message: user,
      token: await user.generateToken(), 
      userId: user._id.toString(),
    });
  } catch (error) {
    console.error("Error during patient registration:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//login part

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Please provide both email and password." });
  }
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ success: false, message: "User not found." });
    }
    const isValidPassword = await bcrypt.compare(password, userExist.password);

    if(isValidPassword){

      //  console.log("Generating token...");
      //  const token = await userExist.generateToken();
      //  console.log("Token generated:", token);

      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(), 
        userId: userExist._id.toString(),
      });
    }else{
      res.status(401).json({message: "Invalid email or password"})
    }

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const addNewAdmin = async (req, res) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } = req.body;
  if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password) {
    return res.status(400).json({ success: false, message: "Please Fill Full Form!" });
  }

  try {
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return res.status(400).json({ success: false, message: "Admin With This Email Already Exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      password: hashedPassword,
      role: "Admin",
    });

    res.status(200).json({
      success: true,
      message: "New Admin Registered",
      admin,
    });
  } catch (error) {
    console.error("Error during admin registration:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const addNewDoctor = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    doctorDepartment,
  } = req.body;

  // Validate if all required fields are provided
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !nic ||
    !dob ||
    !gender ||
    !password ||
    !doctorDepartment
  ) {
    return res.status(400).json({ success: false, message: "Please Fill Full Form!" });
  }

  try {
    // Check if the email is already registered
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return res.status(400).json({ success: false, message: "Doctor With This Email Already Exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new doctor document in the database
    const newDoctor = await User.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      password: hashedPassword,
      role: "Doctor",
      doctorDepartment,
    });

    // Generate JWT token for authentication
    const token = await newDoctor.generateToken();

    // Send success response with the newly created doctor document and token
    res.status(200).json({
      success: true,
      message: "New Doctor Registered",
      doctor: newDoctor,
      token,
      userId: newDoctor._id.toString(),
    });
  } catch (error) {
    console.error("Error while adding new doctor:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const getAllDoctors = async (req, res) => {
  const doctors = await User.find({ role: "Doctor" });
  res.status(200).json({
    success: true,
    doctors,
  });
};


export const doctorLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Please provide both email and password." });
  }
  try {
    const doctor = await User.findOne({ email, role: "Doctor" });
    if (!doctor) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }
    const isPasswordValid = await bcrypt.compare(password, doctor.password);


    if (isPasswordValid) {
     
      res.status(200).json({
        message: "Login Successful",
        token: await doctor.generateToken(), 
        userId: doctor._id.toString(),
      });
    } else{
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    
  } catch (error) {
    console.error("Error during doctor login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export const getUserDetails = async (req, res) => {
  const user = req.body;
  const userId = user._id; 
  res.status(200).json({
    success: true,
    user: {
      _id: userId,
    },
  });
};


export const logoutAdmin = async (req, res) => {
  res
    .status(201)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logged Out Successfully.",
    });
};

export const logoutPatient = async (req, res) => {
  res.clearCookie("patientToken").status(201).json({
    success: true,
    message: "Patient Logged Out Successfully.",
  });
};

