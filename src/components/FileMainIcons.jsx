import React from 'react'

const FileMainIcons = () => {
    const fileUpload =()=> {
        alert('fileUpload program not ready yet')
    }
    const fileSearch =()=> {
        alert('fileSearch program not ready yet')
    }
    const fileStart =()=> {
        alert('fileStart program not ready yet')
    }

return (
<React.Fragment>
    <div className="allFileHeadingIcons">
        <a onClick={fileUpload} href="#"><i class='bx bx-plus-circle'></i></a>
        <a onClick={fileSearch} href="#"><i class='bx bx-search'></i></a>
        <a onClick={fileStart} href="#"><i class='bx bx-star'></i></a>
    </div>
</React.Fragment>
)
}

export default FileMainIcons