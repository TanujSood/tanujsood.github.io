import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Twitch from '../images/Twitch.png'



const Landing = ({ siteTitle }) => (
    <body class="grid">
    <header class="c12">
        <div class="title">
                <div class="start">
                    <h1 class="heading">Hey, I'm Tanuj!<span role="img" aria-label="emoji">✌️</span></h1>
                    <h2 class="smm">An aspiring <span class="highlight">Product Designer</span> with a passion for solving complex problems with innovative solutions. Majoring in Computer Science and Entrepreneurship <span class="ashoka"><a href="https://www.ashoka.edu.in/" target="#">@Ashoka University.</a></span></h2>
                    <h5 class="smm2">Currently working as a freelance UX designer.</h5>
                </div>
        </div>
    </header>

    <main class="c12 content">

            <Link to="/Trana/"><div class="card card-1 trana-card">
                <div class="area"> 
                    <h2 class="trana-heading white">träna</h2>
                    <h5 class="medium white">Motivating People to Stay Fit Indoors</h5>
                </div>
            </div></Link>

            <Link to="/Twitch/"><div class="card card-1 twitch-card">
                <div class="area">
                    <img src={Twitch} alt="Twitch logo" class="twitch-logo" />
                    <h5 class="medium white">Reinventing Viewing Experience for Esports Fans</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div class="card card-1 laser-card">
                <div class="area">
                    <h2 class="laser-heading">LASERTAG</h2>
                    <h5 class="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div class="card card-1 laser-card">
                <div class="area">
                    <h2 class="laser-heading">LASERTAG</h2>
                    <h5 class="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div class="card card-1 laser-card">
                <div class="area">
                    <h2 class="laser-heading">LASERTAG</h2>
                    <h5 class="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div class="card card-1 laser-card">
                <div class="area">
                    <h2 class="laser-heading">LASERTAG</h2>
                    <h5 class="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

    </main>

    <div class="c4 chat">
        <h2 class="contact"><span class="highlight">Let's talk!</span></h2>
        <p class="mail">Wanna discuss internship opportunities? Or the next million dollar idea? Mail me <span class="highlight-mail"><a href="mailto:tanuj.sood_ug21@ashoka.edu.in">@tanuj.sood_ug21@ashoka.edu.in</a></span></p>
    </div>

</body>
)

Landing.propTypes = {
  siteTitle: PropTypes.string, 
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
