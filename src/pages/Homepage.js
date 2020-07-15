import React from "react"
import HomepageText from "../components/HomepageText"
import HomepageImage from "../components/HomepageImage"

function Homepage () {
    return (
        <main>
        <div class="container text-center">
            <div class="row">
                <HomepageText />
                <HomepageImage />
            </div>
        </div>
    </main>
    )
}

export default Homepage