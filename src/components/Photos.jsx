import React from 'react';
import Sidebar from './Sidebar';
import img10 from '../images/photos/photo1.jpg'
import img11 from '../images/photos/photo2.jpg'
import img12 from '../images/photos/photo3.jpg'
import img13 from '../images/photos/photo4.jpg'
import img14 from '../images/photos/photo5.jpg'
import img15 from '../images/photos/photo6.jpg'
import img16 from '../images/photos/photo7.jpg'
import img17 from '../images/photos/photo8.jpg'
import img18 from '../images/photos/photo9.jpg'
import img19 from '../images/photos/photo10.jpg'
import img20 from '../images/photos/photo11.jpg'
import img21 from '../images/photos/photo12.jpg'
import img22 from '../images/photos/photo13.jpg'
import img23 from '../images/photos/photo14.jpg'
import img24 from '../images/photos/photo15.jpg'
import img25 from '../images/photos/photo16.jpg'
import FileMainIcons from './FileMainIcons';



const Photos = () => {
return (
<>
    <main>
        <di6 className="row">
            <div className="col-lg-1">
                <div className="mainSidebar">
                    <Sidebar />
                </div>
            </div>
            <div className="col-lg-8 py-5">
                <div className="allVideosMiddlePart">
                    <div className="allFileHeading">
                        <div className="mainDropTitle">
                            <span>The D_sh | Photos</span>
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
                    <div className="allFileMainTitle">
                        <div className="titleLeftP">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class='me-2 bx bxs-folder'></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#">All Photos</a></li>
                                    <li><a class="dropdown-item" href="#">More Photos</a></li>
                                    <li><a class="dropdown-item" href="#">Private Photos</a></li>
                                </ul>
                            </div>
                            <span className="sp2 ms-3">Photos</span>
                        </div>
                        <div className="titleRighr photosTitle">
                            <div className="titleRightIcons">
                                <a href="#"><i class='bx bx-menu'></i></a>
                                <a href="#"><i class='bx bx-grid-alt'></i></a>
                                <a href="#"><i class='bx bxs-grid'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="allPhotosThumbnail py-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto" id="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img10} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img11} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img12} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img13} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img14} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img15} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img16} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img17} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img18} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img19} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img20} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img21} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img22} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img23} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img24} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="singlePhotoCard">
                                    <div className="mainPhoto">
                                        <a href="#"><img className="img-fluid" src={img25} alt="" /></a>
                                        <a href="#"><i class='bx bx-download'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="videoPartEnd allFileRightSidePart py-5">
                    <div className="allPreviewPart">
                        <div className="previewHeadline">
                            <i class='bx bx-file'></i>
                            <span>File Preview</span>
                        </div>
                        <hr className="my-4" />
                        <div className="noFilePart">
                            <div className="noFileIcon">
                                <i class='bx bx-file'></i>
                            </div>
                            <div className="noFileTitle">
                                <h6>No File Selected</h6>
                                <span>When you'll select one of the files. you will be able to see all the details and managing options.</span>
                            </div>
                        </div>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        </di6>
    </main>

</>
)
}

export default Photos