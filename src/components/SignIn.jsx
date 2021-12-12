import React from 'react';
import Navbar from './Navbar';
import signInSide from '../images/loginSide.png';
import { NavLink } from 'react-router-dom';
import logo from '../images/TheDashLogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
const signInToastify =()=>{
toast.info("Sign in please",{
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
                    <div className="col-sm-6 signInLeft">
                        <img className="img-fluid" src={signInSide} alt="" />
                    </div>
                    <div className="col-md-9 col-lg-6">
                        <div className="signIn">
                            <form>
                                <div className="signInHeader">
                                    <img onClick={signInToastify} className="img-fluid rounded-2" src={logo} alt="" />
                                    <ToastContainer />
                                    <span className="d-none">The D_sh Sign in</span>
                                </div>
                                <div class="mb-5">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <NavLink to="/home" className="text-decoration-none"><button type="submit"
                                        class="btn submitBtn mt-5">Sign in</button>
                                </NavLink>
                                <div className="signupFooter">
                                    <span>Don't have an account? <NavLink to="/signup">SIGN UP</NavLink> now</span>
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

export default SignIn