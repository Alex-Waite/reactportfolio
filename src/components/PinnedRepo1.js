import React from "react"

function PinnedRepo1() {
    return(
        <div className="col-md-4 col-sm-12">
        <div className="container pfCardContainer">
            <div className="card">
                <a href="https://alex-waite.github.io/PasswordGeneratorHomework/"
                    target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src="assets/images/passgen.png"
                        alt="PASSWORD GENERATOR screenshot" />
                </a>
                <div className="card-body">
                    <h4>PASSWORD GENERATOR!</h4>
                        <p className="card-text">I am proud of this project because it was a task I
                            remember feeling hopeless about, I was very new to Javascript and I
                            had
                            no idea where to begin, however after some time I was left with an
                            application I was proud of. This project boosted my coding
                            confidence!
                        </p>
                        <a href="https://github.com/Alex-Waite/PasswordGeneratorHomework"
                            target="_blank" rel="noopener noreferrer">
                            <h4>click here to see the code!</h4>
                        </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PinnedRepo1