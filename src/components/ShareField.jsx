import React from 'react'

const ShareField = () => {
    const shareClick =()=>{
        alert("shareClick is not ready yet")
    }
    const editClick =()=>{
        alert("editClick is not ready yet")
    }
    const deleteClick =()=>{
        alert("deleteClick is not ready yet")
    }
return (
<React.Fragment>
    <div className="shareFieldIcons">
        <div onClick={shareClick} className="field1">
            <a href="#"><i class='bx bx-share bx-flip-horizontal'></i></a>
            <p>Share</p>
        </div>
        <div onClick={editClick} className="field1">
            <a href="#"><i class='bx bx-pencil bx-flip-horizontal'></i></a>
            <p>Edit</p>
        </div>
        <div onClick={deleteClick} className="field1 deleteIcon">
            <a href="#"><i class='bx bx-trash-alt'></i></a>
            <p>Delete</p>
        </div>
    </div>
</React.Fragment>
)
}

export default ShareField