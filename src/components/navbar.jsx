import React from 'react';
import {BsSearch, FaBars } from 'react-icons/all'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand navbarname" href="/"><h3><FaBars/>&nbsp; Foxx Entertainment</h3></a>
                    <ul>
                        <li className="searchbar"><a href="/"><BsSearch style={{fontSize:"30px", color:"white"}}/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;