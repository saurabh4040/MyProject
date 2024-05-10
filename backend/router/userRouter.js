import express from "express";
import {
  addNewAdmin,
  login,
  patientRegister,
  addNewDoctor,
  getAllDoctors,
  doctorLogin,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
} from "../controller/userController.js";

const router = express.Router();

// Routes for patient registration, login, and logout
router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/patient/logout", logoutPatient);

// Routes for admin registration, login, and logout
router.post("/admin/addnew", addNewAdmin);
router.post("/admin/login", login); 
router.post("/admin/logout", logoutAdmin);

// Routes for doctor registration, retrieval, and login (assuming similar to admin)
router.post("/doctor/addnew", addNewDoctor);
router.get("/doctor/all", getAllDoctors);
router.post("/doctor/doclogin", doctorLogin); 

// Route for getting user details
router.get("/user/details", getUserDetails);

export default router;
