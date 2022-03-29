import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const {handleEmailChange, handlePasswordChange, email, password, handleRegister} = useAuth();

    
    return (
        <form onSubmit={handleRegister} className='my-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"  required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" required/>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
};

export default Register;