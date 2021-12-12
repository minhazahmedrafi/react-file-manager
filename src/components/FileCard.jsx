import React from 'react'

const FileCard = (props) => {
    return (
        <>
            <div className="singleCard">
                <div className="icon">
                <i class='bx bxs-folder'></i>
                <h6>{props.fname}</h6>
                <span>{props.fNum} files</span>
                </div>
            </div>
        </>
    )
}

export default FileCard
