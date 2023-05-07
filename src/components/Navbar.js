import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode !== 'light' ? 'dark' : props.mode} bg-${props.mode !== 'light' ? 'dark' : props.mode}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex my-1 me-2" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" onChange={props.handleChange} placeholder="Change App Name" aria-label="Search" />
                            <button className={`btn btn-outline-${props.mode !== 'light' ? 'light' : 'success'}`} onClick={props.handleUpdate} type="submit">Update</button>
                        </form>
                        <div className={`form-check form-switch text-light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className={`form-check-label ${props.mode !== 'light' ? 'text-light' : 'text-dark'}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
