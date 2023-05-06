import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" onChange={props.handleChange} placeholder="Change App Name" aria-label="Search" />
                            <button className="btn btn-outline-success" onClick={props.handleUpdate} type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
