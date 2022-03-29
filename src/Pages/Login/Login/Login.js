import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, loginUser, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (event) => {
        loginUser(loginData.email, loginData.password, location, history);
        event.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    return (

        <div className="container">
            <form onSubmit={handleLoginSubmit}>
                <h1>Login</h1>
                <br />
                <div className="mb-3">
                    <input onChange={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <input onChange={handleOnChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" required />
                </div>
                <button type="submit" className="btn btn-primary my-3">Login</button>
                <br />
                <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login in with Google</button>

                <br />
                {user.email && <div>
                    Congratulations!
                    < strong > You are logged in!</strong>
                </div>}
            </form>
            <p>---------------------------------------------------------------</p>
            <NavLink
                style={{ textDecoration: "none" }}
                to="/register">
                <p className="text-warning">New User? Please Register</p>
            </NavLink>
        </div>

    );
};

export default Login;