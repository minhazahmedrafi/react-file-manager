import React,{useState} from 'react'
import Sidebar from './Sidebar';
import VideoCard from './VideoCard';
import img4 from '../images/videos/video4.png'
import img5 from '../images/videos/video5.png'
import img6 from '../images/videos/video6.png'
import FileMainIcons from './FileMainIcons';
import ShareField from './ShareField';
import Preview from './Preview';

const Music = () => {
            //this is the preview array
const [preview,setPre]=useState([])
//this is the preview array
return (
<>
    <main>
        <div className="row">
            <div className="col-lg-1">
                <div className="mainSidebar">
                    <Sidebar />
                </div>
            </div>
            <div className="col-lg-8 py-5">
                <div className="allVideosMiddlePart">
                    <div className="allFileHeading">
                        <div className="mainDropTitle">
                            <span>The D_sh | Files</span>
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
                                    <li><a class="dropdown-item" href="#">All Videos</a></li>
                                    <li><a class="dropdown-item" href="#">Document Videos</a></li>
                                    <li><a class="dropdown-item" href="#">Private Videos</a></li>
                                </ul>
                            </div>
                            <span className="sp1">All Files</span>
                            <i class='bx bxs-chevron-right'></i>
                            <span className="sp2">Personal Stuff</span>
                            <i class='bx bxs-chevron-right'></i>
                            <span className="sp2">Music</span>

                        </div>
                        <div className="titleRighr videosTitle">
                            <div className="titleRightIcons">
                                <a href="#"><i class='bx bx-menu'></i></a>
                                <a href="#"><i class='bx bx-grid-alt'></i></a>
                                <a href="#"><i class='bx bxs-grid'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="videosMainThumbnails py-4">
                        <div className="row">
                            <div className="col-md-4 vdoCard" onClick={()=>setPre([{image:img4,title:"Krrish - Pyaar ki ek kahani.mp4",size:"97MB",details:"this is file 1"}])}>
                                <VideoCard vdoImg={img4} vdoTitle="Krrish - Pyaar ki ek kahani.mp4" fSize="97MB" />
                            </div>
                            <div className="col-md-4 vdoCard" onClick={()=>setPre([{image:img5,title:"Kaho na pyaar hain.mp4",size:"103MB",details:"this is file 2"}])}>
                                <VideoCard vdoImg={img5} vdoTitle="Kaho na pyaar hain.mp4" fSize="103MB" />
                            </div>
                            <div className="col-md-4 vdoCard" onClick={()=>setPre([{image:img6,title:"Ciao Adios [Official Video].mp4",size:"117MB",details:"this is file 3"}])}>
                                <VideoCard vdoImg={img6} vdoTitle="Ciao Adios [Official Video].mp4" fSize="117MB" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3">
            {preview.length>0?<div className="allFileRightSidePart py-5">{
                preview.map(rec=>
                    <div className="allPreviewPart">
                        <div className="previewHeadline">
                            <i class='bx bx-file'></i>
                            <span>File Preview</span>
                        </div>
                        <hr className="my-4" />
                        <div className="videoPart recentRightIcon">
                            <img class="img-fluid" src={rec.image} alt="" />
                        </div>
                        <hr className="my-5" />
                        <div className="videoInfo">
                            <div className="videoDetails">
                                <h6>{rec.title}</h6>
                                <span>{rec.size}</span>
                            </div>
                            <div className="fileDesc pt-3">
                                <span>File Description</span>
                                <p>{rec.details}</p>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="fileSharedPart">
                            <span>File Shared With</span>
                            <div className="sharePartners pt-3">
                                <span>M</span>
                                <p className="pt-2 ps-4">Minhaz Ahmed Rafi</p>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <ShareField/>
                        <hr className="my-4" />
                    </div>)
                }</div>:
            <Preview/>}
            </div>
        </div>
    </main>
</>
)
}

export default Music