import React from 'react'
import {toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  return (
    <div className='container mt-5'>
     <div className='text-center mb-4'>
       <h2><i className='fas fa-user-plus me-2'></i>Sign Up</h2>
       <p className='text-primary'>Create your account to start tracking expances</p>
     </div>

     <form className='p-4 border shadow rounded mx-auto' style={{maxWidth:'400px'}}> 

      <div className='mb-3'>
        <label className='form-label'>Full Name</label>
        <div className='input-group'>
          <span className='input-group-text'>
            <i className='fas fa-user'></i>
          </span>
          <input type='text' name='FullName' className='form-control' required placeholder='Enter your full name' />
        </div>
      </div>

      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <div className='input-group'>
          <span className='input-group-text'>
            <i className='fas fa-envelope'></i>
          </span>
          <input type='email' name='Email' className='form-control' required placeholder='Enter your email' />
        </div>
      </div>

      <div className=''>
        <label className='form-label'>Password</label>
        <div className='input-group'>
          <span className='input-group-text'>
            <i className='fas fa-lock'></i>
          </span>
          <input type='password' name='Password' className='form-control' required placeholder='Create your password' />
        </div>
      </div>

      <button type='submit'className='btn btn-primary w-100 mt-4'><i className='fas fa-user-plus me-3'></i>SignUp</button>

     </form>
     <ToastContainer/>
    </div>
  )
}

export default Signup;
