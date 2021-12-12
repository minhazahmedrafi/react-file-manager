import React from 'react'

const UploadedFileCard = (props) => {
    return (
        <>
            <div className="singleUpCard">
                <div className="iconSpan">
                {props.upIcon}
                <span>{props.upTitle}</span>
                </div>
                <div className="upCardDate">
                    <span>{props.upDate}</span>
                </div>
                <div className="signUpLIocns">
                {props.upChar}<span>A</span>
                <i class="far fa-star"></i>
                <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
        </>
    )
}

export default UploadedFileCard
