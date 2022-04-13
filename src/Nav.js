import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://sites.duke.edu/dukeiff/files/2020/10/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg"
            alt="Netflix Logo"
            />

            <img 
            className="nav__avatar"
            src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav