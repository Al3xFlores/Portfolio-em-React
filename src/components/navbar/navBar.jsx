import React from "react";
import './navBar.css'



const navBar = props => {


    return (
        <div>
            <nav>
                <div className="nav-wrapper deep-purple darken-1" >
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down desktop">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navBar;