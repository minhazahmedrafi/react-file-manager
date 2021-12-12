import React from 'react';
import Navbar from './Navbar';
import headerImg from '../images/dropboxHeader.jpg'

const Welcome = () => {
return (
<>
   <Navbar/>
    <section id="mainHeader">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="headerLeft">
                        <h1>Keep life organized and work moving—all in one place</h1>
                        <p>The D_sh gives you secure access to all your files. Collaborate with friends, family, and
                            coworkers from any device.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="headerRightImg">
                        <img className="img-fluid" src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Welcome