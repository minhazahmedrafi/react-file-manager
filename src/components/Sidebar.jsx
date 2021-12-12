import React from 'react'
import {NavLink} from 'react-router-dom';
import img1 from '../images/userImg.jpg';
import logo from '../images/TheDashLogo.png'

const Sidebar = () => {
return (
<>
    <div className="desktop">
        <div className="sideBar">
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li className="mt-5">
                        <NavLink to="/">
                            <img className="img-fluid me-2 rounded-2 mainLogo" src={logo} alt="" />
                        </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink to="/home"
                            activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                            <i className='bxId bx bx-home-alt'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/allfile"
                            activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                            <i className='bxId bx bx-folder-open'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/videos"
                            activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                            <i className='bxId bx bx-video-recording'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bxId bx bx-photo-album'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recent"
                            activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                            <i className='bxId bx bx-time'></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <i className='bxId bx bx-brightness'></i>
                        </NavLink>
                    </li>
                </ul>

                <ul className="logout">
                    <div className="logContent">
                        <li>
                            <NavLink to="/">
                                <div class="dropdown">
                                    <i class="btn dropdown-toggle" type="button" id="dropdownMenuButton2"
                                        data-bs-toggle="dropdown" aria-expanded="false"
                                        className='bx bx-dots-horizontal-rounded'></i>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                        <li>
                                            <NavLink class="dropdown-item" to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink class="dropdown-item" to="/signin">Log Out</NavLink>
                                        </li>
                                        <li>
                                            <NavLink class="dropdown-item" to="">Private Files</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </NavLink>
                        </li>
                        <img className="img-fluid" src={img1} alt="" />
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    <div className="mobile">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="sideBar">
                <div className="area"></div>
                <nav className="main-menu">
                    <ul>
                        <li>
                            <NavLink to="/">
                                <i className='mainLogo bx bxl-dropbox'></i>
                            </NavLink>
                        </li>
                        <li className="mt-2">
                            <NavLink to="/home"
                                activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                                <i className='bxId bx bx-home-alt'></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/allfile"
                                activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                                <i className='bxId bx bx-folder-open'></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/videos"
                                activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                                <i className='bxId bx bx-video-recording'></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <i className='bxId bx bx-photo-album'></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/recent"
                                activeStyle={{color:"#EAE8EA",borderRight:"3px solid #EAE8EA",paddingRight:"36px"}}>
                                <i className='bxId bx bx-time'></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <i className='bxId bx bx-brightness'></i>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="logout">
                        <div className="logContent">
                            <li>
                                <NavLink to="/">
                                    <div class="dropdown">
                                        <i class="btn dropdown-toggle" type="button" id="dropdownMenuButton2"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            className='bx bx-dots-horizontal-rounded'></i>
                                        <ul class="dropdown-menu dropdown-menu-dark"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li>
                                                <NavLink class="dropdown-item" to="/profile">Profile</NavLink>
                                            </li>
                                            <li>
                                                <NavLink class="dropdown-item" to="/signin">Log Out</NavLink>
                                            </li>
                                            <li>
                                                <NavLink class="dropdown-item" to="">Private Files</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </NavLink>
                            </li>
                            <img className="img-fluid" src={img1} alt="" />
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</>
)
}

export default Sidebar