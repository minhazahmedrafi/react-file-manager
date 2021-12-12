import React from 'react'

const RecentCard = (props) => {
return (
<>
    <div className="mainRecentCard">
        <div className="singleVideoCard">
            <div className="upImg">
                <div className="imgBg">
                    <div className="imgIconsVideoCard mt-4">
                        <a href="#"><i class='bx bx-star'></i></a>
                        <a href="#"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="mainRecenticon">
                    {props.recentIco}
                </div>

            </div>
            <div className="mainUpImgTitle">
                <div className="upImgTitle">
                    <p>{props.vdoTitle}</p>
                </div>
                <hr className="my-3" />
                <div className="upImgBottomTitle">
                    <div className="aboutVideoSize">
                        <p>File Size:</p>
                        <span>{props.fSize}</span>
                    </div>
                    <div className="aboutVideosIcons">
                        <span>K</span>
                        <span>O</span>
                        <span>A</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default RecentCard