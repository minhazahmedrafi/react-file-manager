import React from 'react'

const Preview = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Preview
