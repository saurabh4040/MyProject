import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Profile.css";

const Profile = () => {
    const [user, setUser] = useState([]);   

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = localStorage.getItem("formData");
        console.log(userData);
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="container custom-card-container">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0 ">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25">
                                    <img
                                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                                        className="img-radius"
                                        alt="User-Profile-Image"
                                    />
                                </div>
                                <h6 className="f-w-600">{user.firstName} {user.lastName}</h6>
                                <p>Profile</p>
                                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                    Information
                                </h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">NIC</p>
                                        <h6 className="text-muted f-w-400">{user.nic}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">DOB</p>
                                        <h6 className="text-muted f-w-400">{user.dob}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Department</p>
                                        <h6 className="text-muted f-w-400">{user.doctorDepartment}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Gender</p>
                                        <h6 className="text-muted f-w-400">{user.gender}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Role</p>
                                        <h6 className="text-muted f-w-400">{user.roles}</h6>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
