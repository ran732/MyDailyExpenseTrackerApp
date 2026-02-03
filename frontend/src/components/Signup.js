import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  // type rfce shortcut for ..
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>
          <i className=" fas fa-user-plus me-2"></i>Signup
        </h2>
        <p className="text-primary pb-4">
          Create your account to start your tracking your expense
        </p>
      </div>

      <form
        className="p-4 border rounded shadow mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="">
          <label className="form-lebel ps-2"> Full Name</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
            <input
              className="form-control"
              name="FullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="form-lebel ps-2"> Email</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              className="form-control"
              name="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="form-lebel ps-2"> Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="form-control"
              name="Password"
              type="password"
              placeholder="Create your password"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4 w-100"><i className="fas fa-user-plus pe-1"></i> Signup</button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Signup;
