import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import signUpSide from '../images/signUpSide.png';
import logo from '../images/TheDashLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
const signInToastify =()=>{
toast.info("Sign Up please",{
    position:"top-center"
});
}
return (
<>
    <Navbar />
    <section>
        <div className="signinForm">
            <div className="container">
                <div className="row mainSignInPage">
                    <div className="col-md-6">
                        <div className="signInLeft">
                            <img className="img-fluid" src={signUpSide} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-6">
                        <div className="signIn">
                            <form>
                                <div className="signInHeader">
                                    <img onClick={signInToastify} className="img-fluid rounded-2" src={logo} alt="" />
                                    <span className="d-none">The D_sh Sign up</span>
                                    <ToastContainer />
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" aria-label=".form-control-lg example" />
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputEmail1" class="form-label">Username</label>
                                    <input type="text" class="form-control" aria-label=".form-control-lg example" />
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <NavLink to="/signin" className="text-decoration-none"><button type="submit"
                                        class="btn submitBtn mt-5">Sign Up</button>
                                </NavLink>
                                <div className="signupFooter">
                                    <span>Already have an account? <NavLink to="/signin">SIGN IN</NavLink> now</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default SignUp