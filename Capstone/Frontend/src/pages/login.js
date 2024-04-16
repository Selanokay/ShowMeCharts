import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

export default function Login() {
    return (
        <div className="container mt-5">
            {/* Home Link */}
            <div className="text-center mb-4">
                <Link to="/" className="d-block">
                    <img src={logoImage} alt="Logo" className="mb-3" style={{ maxWidth: "100px" }}/>
                </Link>
            </div>

            {/* Log In Form */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form id="login" className="card card-body">
                        <fieldset>
                            <legend className="card-title text-center">Log In</legend>
                            <p className="text-center">Don't have an account? 
                                <Link to="/signup" className="btn btn-link">Sign Up</Link>
                            </p>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="text" id="email" name="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" id="password" name="password" className="form-control" />
                            </div>
                        </fieldset>

                        <button type="submit" className="btn btn-primary w-100">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
