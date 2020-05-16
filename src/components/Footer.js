import React from "react"
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import medium from '../images/medium.png'
import insta from '../images/insta.png'

const Footer = () => (

  <div class="c6 footer">
    <div class="social">
      <a href="https://github.com/TanujSud" target="#"><img class="icons" src={github} alt="github"></img></a>
      <a href="https://www.linkedin.com/in/tanuj-sood-697297135/" target="#"><img class="icons" src={linkedin} alt="linkedin"></img></a>
      <a href="https://github.com/TanujSud" target="#"></a><img class="icons" src={medium} alt="medium"></img>
      <a href="https://www.instagram.com/tanuj_sood/" target="#"><img class="icons" src={insta} alt="insta"></img></a>
    </div>
    <p class="copyright">Coded with ❤︎, © Tanuj Sood 2020</p>
    </div>
  )

export default Footer