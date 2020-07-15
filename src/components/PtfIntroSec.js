import React from 'react'

function PtfIntroSec () {
    return (
                    <div className="row">    
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="pfBrand">Brand Statement!</h2>
                                <p className="statementText">My name is Alex, I am a 19 year old from Adelaide who is
                                    experienced in customer
                                    service and learning technology. In
                                    my previous work experiences I have worked roles which strengthened my skills
                                    in
                                    customer service which has enhanced my ability to communicate, listen, understand
                                    and
                                    cooperate with customers and clientele. My passion is to work within IT specifically
                                    in
                                    the field of front end development and software. I believe my social skills from
                                    prior
                                    hospitality experience could prove useful to the IT industry.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="statementPic">
                                    <img className="statementImg" src="./assets/images/croppedrecent2.png"
                                        alt="Recent Photo Of Me!" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="https://www.linkedin.com/in/alexander-waite-005165199/" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fab fa-linkedin"></i> My LinkedIn</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="https://github.com/Alex-Waite" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fab fa-github"></i> My GitHub</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="assets/AlexResume.pdf" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fas fa-user"></i> My Resume</p>
                                </a>
                            </div>
                        </div>
                    </div>
    )
}

export default PtfIntroSec
