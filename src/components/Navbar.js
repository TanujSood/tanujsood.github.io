import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.png'
import "./layout.css"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => (
  <body class="grid">
        <header class="c12">
            <div class="hero">
                <div class="header">
                <a href="/"><img src={logo} alt="Tanuj Sood Logo" class="logo"></img></a>
                <div><h3 class="title content-web">Tanuj Sood</h3>
                <h6 class="subtitle content-web">Product Designer</h6></div>
                <nav class="nav">
                    <a href="/"><h5 class="option selected">Home</h5></a>
                    <Link to="/About/"><h5 class="option">About</h5></Link>
                    <a href="/"><h5 class="option">Resume</h5></a>
                </nav>
            </div>
            </div>
        </header>
    </body>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string, 
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
