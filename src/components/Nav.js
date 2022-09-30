import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assects/images.png"

const Home = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top shadow">
            <div className="container">
                <img src={Logo} className="logo me-5" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/userlist"} className="nav-link">
                                List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/adduser"} className="nav-link">
                                Add User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Home