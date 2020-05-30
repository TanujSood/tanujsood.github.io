import React from "react"
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import medium from '../images/medium.png'
import insta from '../images/insta.png'

const Footer = () => (

  <div className="c6 footer">
    <div className="social">
      <a href="https://github.com/TanujSud" target="#"><img className="icons" src={github} alt="github"></img></a>
      <a href="https://www.linkedin.com/in/tanuj-sood-697297135/" target="#"><img className="icons" src={linkedin} alt="linkedin"></img></a>
      <a href="https://github.com/TanujSud" target="#"><img className="icons" src={medium} alt="medium"></img></a>
      <a href="https://www.instagram.com/tanuj_sood/" target="#"><img className="icons" src={insta} alt="insta"></img></a>
    </div>
    <p className="copyright">Coded with ❤︎, © Tanuj Sood 2020</p>
    </div>
  )

export default Footer