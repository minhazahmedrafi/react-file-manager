import React,{ useEffect,useState } from 'react';
import Sidebar from './Sidebar';
import RecentCard from './RecentCard';
import FileMainIcons from './FileMainIcons';
import ShareField from './ShareField';
import Preview from './Preview';

const Documents = () => {
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
                            <span className="sp2">Documents</span>

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
                        <div className="col-md-3" onClick={()=>setPre([{icon:"rIcon fas fa-file-pdf",title:"Licence Agreement on Waterfall INC.pdf",size:"2.3MB",details:"this is file 1"}])}>
                            <RecentCard recentIco={<i class="rIcon fas fa-file-pdf"></i>} vdoTitle="Licence Agreement on
                                Waterfall INC.pdf" fSize="2.3MB" />
                        </div>
                        <div className="col-md-3" onClick={()=>setPre([{icon:"fas fa-file-invoice-dollar",title:"Drone Test Drive Tour.sketch",size:"18.6MB",details:"this is file 2"}])}>
                            <RecentCard recentIco={<i class="fas fa-file-invoice-dollar"></i>} vdoTitle="Drone Test
                                Drive Tour.sketch" fSize="18.6MB" />
                        </div>
                        <div className="col-md-3" onClick={()=>setPre([{icon:"fas fa-file-video",title:"Drone Virtual Tour Scope.mp4",size:"446.3MB",details:"this is file 3"}])}>
                            <RecentCard recentIco={<i class="fas fa-file-video"></i>} vdoTitle="Drone Virtual Tour
                                Scope.mp4" fSize="446.3MB" />
                        </div>
                        <div className="col-md-3" onClick={()=>setPre([{icon:"fas fa-file-word",title:"Waterfall INC Introduction.word",size:"5.7MB",details:"this is file 4"}])}>
                            <RecentCard recentIco={<i class="fas fa-file-word"></i>} vdoTitle="Waterfall INC
                                Introduction.word" fSize="5.7MB" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
          {preview.length>0?<div class="allFileRightSidePart py-5">{
            /**here mapping the preview array */
           
           
            preview.map(rec=>
                <div class="allPreviewPart">
                    <div class="previewHeadline"><i class="bx bx-file"></i><span>File Preview</span></div>
                    <hr class="my-4" />
                    <div class="videoPart recentRightIcon"><i class={`${rec.icon}`} aria-hidden="true"></i></div>
                    <hr class="my-5" />
                    <div class="videoInfo">
                        <div class="videoDetails">
                            <h6>{rec.title}</h6><span>{rec.size}</span>
                        </div>
                        <div class="fileDesc pt-3"><span>File Description</span>
                            <p>{rec.details}</p>
                        </div>
                    </div>
                    <hr class="my-4" />
                    <div class="fileSharedPart"><span>File Shared With</span>
                        <div class="sharePartners pt-3"><span>M</span>
                            <p class="pt-2 ps-4">Minhaz Ahmed Rafi</p>
                        </div>
                    </div>
                    <hr class="my-5" />
                    <ShareField/>
                    <hr class="my-4" />
                </div>)
                }</div>:
            <Preview/>}
        </div>
        </div>
    </main>
</>
)
}

export default Documents