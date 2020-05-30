import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.png'
import "./layout.css"
import { Link } from "gatsby"

const Navbar = ({ siteTitle }) => (
  <div className="grid">
        <header className="col-12">
            <div className="hero">
                <div className="header">
                  <div className="logo-div">
                  <a href="/"><img src={logo} alt="Tanuj Sood Logo" className="logo"></img></a>
                  </div>
                  <div>
                    <h3 className="title content-web">Tanuj Sood</h3>
                    <h6 className="subtitle content-web">Product Designer</h6>
                  </div>
                  <nav className="nav">
                      <a href="/"><h5 className="option selected">Home</h5></a>
                      <Link to="/About/"><h5 className="option">About</h5></Link>
                      <a href="/"><h5 className="option">Resume</h5></a>
                  </nav>
                </div>
            </div>
        </header>
    </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string, 
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
