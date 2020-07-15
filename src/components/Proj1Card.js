import React from "react"

function Proj1Card() {
    return(
                            <div className="col-md-4 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://teamcabbn.github.io/GiphyBoggle/" target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/giphy.png"
                                                alt="GIPHYBOGGLE screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>GIPHYBOGGLE!</h4>
                                                <p className="card-text">This was a game I worked with a team of learning
                                                    developers
                                                    to produce, it uses API's to create a game board for Boggle and
                                                    return a
                                                    GIF
                                                    of the word the user has found, I mainly worked on the front end of
                                                    the
                                                    game
                                                    however had small contributions to the back end.</p>
                                                <a href="https://github.com/TeamCABBN/GiphyBoggle" target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default Proj1Card