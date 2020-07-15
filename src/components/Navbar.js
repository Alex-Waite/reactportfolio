import React from 'react'

function Navbar() {
    return (
        <header>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/home"><i
                            className="fas fa-address-card fa-2x mx-3"></i>Alexander</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-chevron-down"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Homepage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/aboutme">About Me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar