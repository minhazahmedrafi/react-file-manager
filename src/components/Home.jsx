import React,{useState} from 'react';
import Sidebar from './Sidebar';
import FileCard from './FileCard';
import UploadedFileCard from './UploadedFileCard';
import { NavLink } from 'react-router-dom';
import FileMainIcons from './FileMainIcons';
import ShareField from './ShareField';
import Preview from './Preview';

const Home = () => {
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
                <div className="allFileMiddlePart">
                    <div className="allFileHeading">
                        <div className="mainDropTitle">
                            <span>The D_sh | Home</span>
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
                    <div className="allFileMainTitle homeMainTitile">
                        <div className="titleLeftP">
                            <span className="sp2">Suggested from your activity <i class='bx bx-info-circle'></i></span>
                        </div>

                        <div className="titleRighr">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class='me-2 bx bxs-folder-plus'></i>
                                    <span className="me-2">Show All</span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#">Category 1</a></li>
                                    <li><a class="dropdown-item" href="#">Category 2</a></li>
                                    <li><a class="dropdown-item" href="#">Category 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="titleLeftBottom">
                        <span>As you use The D_sh, suggested items will automatically show up here.</span>
                    </div>
                    <div className="fileCards my-4">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mainCards">
                                    <NavLink className="fileCard" to="/documents">
                                        <FileCard fname="Documents" fNum="24" />
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="mainCards">
                                    <NavLink className="fileCard" to="/work">
                                        <FileCard fname="Work Project" fNum="50" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="allFileMainTitle">
                        <div className="titleLeftP">
                            <span className="sp2 ms-3">Recent</span>
                        </div>
                        <div className="titleRighr">
                            <div className="titleRightIcons">
                                <a href="#"><i class='bx bx-menu'></i></a>
                                <a href="#"><i class='bx bx-grid-alt'></i></a>
                                <a href="#"><i class='bx bxs-grid'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="uploadedFiles my-4">
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-pdf",title:"Licence Agreement on Waterfall INC.pdf",size:"2.3MB",details:"this is file 1"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-pdf"></i>} upTitle="Licence Agreement on
                                Waterfall INC.pdf" upDate="20.05.2021"/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-invoice-dollar",title:"Drone Test Drive Tour.sketch",size:"8.6MB",details:"this is file 2"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-invoice-dollar"></i>} upTitle="Drone Test
                                Drive Tour.sketch" upDate="18.05.2021" upChar={<span>G</span>}/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-video",title:"Virtual Tour Scope.mp4",size:"12.2MB",details:"this is file 3"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-video"></i>} upTitle="Virtual Tour
                                Scope.mp4" upDate="16.05.2021" upChar={<span>B</span>}/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-word",title:"Waterfall INC Introduction.word",size:"7.4MB",details:"this is file 4"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-word"></i>} upTitle="Waterfall INC
                                Introduction.word" upDate="12.05.2021"/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-invoice-dollar",title:"Zoom Redesign Kit.sketch",size:"16.2MB",details:"this is file 5"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-invoice-dollar"></i>} upTitle="Zoom Redesign
                                Kit.sketch" upDate="18.05.2021" upChar={<span>N</span>}/>
                        </div>

                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-pdf",title:"Licence Agreement on Waterfall INC.pdf",size:"4.8MB",details:"this is file 6"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-pdf"></i>} upTitle="Licence Agreement on
                                Waterfall INC.pdf" upDate="20.05.2021"/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-video",title:"Virtual Tour Scope.mp4",size:"78.3MB",details:"this is file 7"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-video"></i>} upTitle="Virtual Tour
                                Scope.mp4" upDate="16.05.2021" upChar={<span>B</span>}/>
                        </div>
                        <div className="uploadedFilesCard" onClick={()=>setPre([{icon:"fas fa-file-word",title:"Waterfall INC Introduction.word",size:"8.3MB",details:"this is file 8"}])}>
                            <UploadedFileCard upIcon={<i class="fas fa-file-word"></i>} upTitle="Waterfall INC
                                Introduction.word" upDate="12.05.2021"/>
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
                            <i class={`${rec.icon}`} aria-hidden="true"></i>
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

export default Home