import React from 'react';
import Sidebar from './Sidebar';
import user from '../images/userImg.jpg'
import { NavLink } from 'react-router-dom';
import FileMainIcons from './FileMainIcons';

const UserProfile = () => {
return (
<>
    <main>
        <div className="row">
            <div className="col-lg-1">
                <div className="mainSidebar userProfile">
                    <Sidebar />
                </div>
            </div>
            <div className="col-lg-8 py-5">
                <div className="userProfileMiddle">
                    <div className="userHeading allFileMiddlePart">
                        <div className="allFileHeading">
                            <div className="mainDropTitle">
                                <span>The D_sh | Profile</span>
                            </div>
                            <div>
                                <FileMainIcons/>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                            </button>
                        </div>
                        <hr className="my-4" />
                    </div>
                    <div className="mainProfileInfo">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="userMainImg">
                                    <img className="img-fluid" src={user} alt="" />
                                </div>
                                <div className="userMainEditPhoto">
                                    <i class='bx bx-pencil pe-1'></i> <span>Edit Photo</span>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="userAllDetails">
                                    <div className="mainUserProfileName">
                                        <div className="userName">
                                            <h4>Minhaz Ahmed Rafi</h4>
                                        </div>
                                        <div className="usernameEdit">
                                            <span>
                                                <NavLink className="arr" to="">Edit</NavLink>
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="row">
                                        <div className="mailPart">
                                            <div className="emailTitle">
                                                <span>Email:</span>
                                            </div>
                                            <div className="mainMail">
                                                <span className="text-start">minhaz.jsb.dhaka420@hmail.com</span>
                                            </div>
                                            <div className="usernameEdit text-end">
                                                <span>
                                                    <NavLink className="arr" to="">Edit</NavLink>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <hr className="my-4" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mailPart">
                                                <div className="emailTitle">
                                                    <span>Date Format</span>
                                                </div>
                                                <div className="mainMail">
                                                    <span className="text-start">DD/MM/YYYY</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="usernameEdit text-end">
                                                <span>
                                                    <NavLink className="arr" to="">Edit</NavLink>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mailPart">
                                                <div className="emailTitle">
                                                    <span>Security Checkup</span>
                                                </div>
                                                <div className="mainMail">
                                                    <span className="text-start">Never Finished</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="usernameEdit text-end">
                                                <span>
                                                    <NavLink className="arr" to="">Start Checkup</NavLink>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="userPreference">
                        <div className="preferenceHeadline">
                            <span>Preferences</span>
                        </div>
                        <div className="singlePrefer">
                            <div className="preferLeft">
                                <span>Automatic Time Zone</span>
                            </div>
                            <div className="preferMiddle">
                                <span>GTM+2:00</span>
                            </div>
                            <div className="preferRight">
                                <NavLink to="#"><i class='bx bx-toggle-right'></i></NavLink>
                            </div>
                        </div>
                        <div className="singlePrefer">
                            <div className="preferLeft">
                                <span>Early Releases</span>
                            </div>
                            <div className="preferMiddle">
                                <span>Get includes on early releases</span>
                            </div>
                            <div className="preferRight">
                                <NavLink to="#"><i class='bx bx-toggle-left'></i></NavLink>
                            </div>
                        </div>
                        <div className="singlePrefer">
                            <div className="preferLeft">
                                <span>People Info</span>
                            </div>
                            <div className="preferMiddle">
                                <span>See info about people who view my files</span>
                            </div>
                            <div className="preferRight">
                                <NavLink to="#"><i class='bx bx-toggle-right'></i></NavLink>
                            </div>
                        </div>
                        <div className="singlePrefer">
                            <div className="preferLeft">
                                <span>Manually Added Contacts</span>
                            </div>
                            <div className="preferMiddle">
                                <span>34 Contacts</span>
                            </div>
                            <div className="preferRight">
                                <span>Clear</span>
                            </div>
                        </div>
                        <div className="singlePrefer">
                            <div className="preferLeft">
                                <span>Smart Sync</span>
                            </div>
                            <div className="preferMiddle">
                                <span>Smart sync update for mac</span>
                            </div>
                            <div className="preferRight">
                                <NavLink to="#"><i class='bx bx-toggle-right'></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="userMiddleBottom">
                        <NavLink className="deletePoint" to="#"><span>Delete Account</span></NavLink>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className=" allFileRightSidePart py-5">
                    <div className="allPreviewPart">
                        <div className="previewHeadline">
                            <i class='bx bx-server'></i>
                            <span>Storage</span>
                        </div>
                        <hr className="my-4" />
                        <div className="storageCircle">
                            <div className="Gb25">
                                <span>25 GB</span>
                            </div>
                            <div className="mainCicleStore">
                                <h4>26.4 GB</h4>
                                <span>USED</span>
                            </div>
                            <div className="zeroTo100">
                                <span>0 GB</span>
                                <span>50 GB</span>
                            </div>
                            <div className="mainCicleStore availableStorage">
                                <h4>23.6 GB</h4>
                                <span>Storage Available</span>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="userDemoFiles">
                            <div className="row">
                                <div className="col-md-6">
                                    <NavLink className="text-decoration-none" to="/documents">
                                        <div className="singleDemoFile">
                                            <i class='bx bx-file'></i>
                                            <p>Documents</p>
                                            <span>560 Files</span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-md-6">
                                    <NavLink className="text-decoration-none" to="/photos">
                                        <div className="singleDemoFile">
                                            <i className='bxId bx bx-photo-album'></i>
                                            <p>Images</p>
                                            <span>985 Files</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="row pt-lg-4">
                                <div className="col-md-6">
                                    <NavLink className="text-decoration-none" to="/videos">
                                        <div className="singleDemoFile">
                                            <i className='bx bx-video-recording'></i>
                                            <p>Videos</p>
                                            <span>67 Files</span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-md-6">
                                    <NavLink className="text-decoration-none" to="/recent">
                                        <div className="singleDemoFile">
                                            <i class='bx bx-file-blank'></i>
                                            <p>Others</p>
                                            <span>103 Files</span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="upgradePlan">
                            <i class='bx bx-bolt-circle'></i>
                            <span> Upgrade Plan</span>
                        </div>
                        <hr className="my-4" />
                        <div className="compareNewPlans">
                            <NavLink className="text-decoration-none" to="#"><span>Compare New Plans</span></NavLink>
                        </div>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
)
}

export default UserProfile