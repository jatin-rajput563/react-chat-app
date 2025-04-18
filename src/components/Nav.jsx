import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    
    return (
        <nav className='bg-blue pb-100'>
            <div className="d-flex justify-content-between py-2 container max-w-1160 bg-blue align-items-center">
                <a href="#" className="text-white nav-logo fw-semibold text-decoration-none">chat<span className='fw-275'>app</span></a>
                <div onClick={toggleNavbar} className="z-5 d-lg-none">
                    <span className={`menu-lines ${menuOpen ? "rotate40" : ""}`} id="rotats"></span>
                    <span className={`menu-lines ${menuOpen ? "bg-transparent" : ""}`} id="transparent"></span>
                    <span className={`menu-lines ${menuOpen ? "rotate-45" : ""}`} id="rotats2"></span>
                </div>
                <ul
                    id="nav-name"
                    className={`d-flex gap-30 list-unstyled py-2 justify-content-center align-items-center nav-link ${menuOpen ? "show-navbar" : ""}`}
                >
                    <li>
                        <a className="text-white text-decoration-none fw-medium nav-tags" href="#">Product</a></li>
                    <li>
                        <a className="text-white text-decoration-none fw-medium nav-tags" href="#">Services</a></li>
                    <li>
                        <a className="text-white text-decoration-none fw-medium nav-tags" href="#">Contact</a></li>
                    <li>
                        <a className="text-white text-decoration-none fw-medium nav-tags" href="#">Log In</a></li>
                    <li>
                        <button className="nav-btn text-white fw-medium">Try It Free</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
