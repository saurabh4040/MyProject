import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
  getAppointmentById
} from "../controller/appointmentController.js";

const router = express.Router();

router.post("/post",   postAppointment);
router.get("/get/:id" , getAppointmentById)
router.get("/getall",  getAllAppointments);
router.put("/update/:id",  updateAppointmentStatus);
router.delete("/delete/:id",  deleteAppointment);

export default router;
