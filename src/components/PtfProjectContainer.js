import React from "react"

import PtfIntroSec from "./PtfIntroSec"

import Proj1Card from "./Proj1Card"
import Proj2Card from "./Proj2Card"

import PinnedRepo1 from "./PinnedRepo1"
import PinnedRepo2 from "./PinnedRepo2"
import PinnedRepo3 from "./PinnedRepo3"
import PinnedRepo4 from "./PinnedRepo4"

function PtfProjectContainer() {
    return(        
    <main>
        <div className="pfContainer">
            <div className="container">
                <PtfIntroSec /> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pfProjectHeader">
                            <h2>My Featured Projects!</h2>
                        </div>
                            <Proj1Card />
                            <Proj2Card />
                            <PinnedRepo1 />
                            <PinnedRepo2 />
                            <PinnedRepo3 />
                            <PinnedRepo4 />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default PtfProjectContainer