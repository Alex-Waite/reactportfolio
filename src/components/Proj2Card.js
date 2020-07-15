import React from "react"

function Proj2Card() {
    return(
        <div className="col-md-4 col-sm-12">
            <div className="container pfCardContainer">
            <div className="card">
                <a href="https://wuber-wines.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src="assets/images/wuber.png"
                        alt="WUBER screenshot" />
                </a>
                <div className="card-body">
                    <h4>W-UBER!</h4>
                        <p className="card-text">This project is great because it gave me an
                            oppurtunity to work in a team on a project that was similar to a
                            project I might work on in a real life secenario. This project
                            helped me get a firm understanding of back end coding.
                        </p>
                        <a href="https://github.com/TeamPACA/WUber" target="_blank" rel="noopener noreferrer">
                            <h4>click here to see the code!</h4>
                        </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Proj2Card