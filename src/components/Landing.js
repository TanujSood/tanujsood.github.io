import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Lens from '../images/Hololens.png'
import Twitch from '../images/Twitch.png'



const Landing = ({ siteTitle }) => (
    <body class="grid">
    <header class="c12">
        <div class="title">
                <div class="start">
                    <h1 class="heading">Hey, I'm Tanuj!✌️</h1>
                    <h2 class="smm">An aspiring <span class="highlight">Product Designer</span> with a passion for solving complex problems with innovative solutions. Majoring in Computer Science and Entrepreneurship <span class="ashoka"><a href="https://www.ashoka.edu.in/" target="#">@Ashoka University.</a></span></h2>
                    <h5 class="smm2">Currently working as a freelance UX designer.</h5>
                </div>
        </div>
    </header>

    <main class="c12 content">

            <Link to="/Trana/"><div class="hvr-float card trana-card">
                <div class="area"> 
                    <h2 class="trana-heading white">träna</h2>
                    <h5 class="medium white">Motivating People to Stay Fit Indoors</h5>
                </div>
            </div></Link>

            <Link to="/Twitch/"><div class="hvr-float card twitch-card">
                <div class="area">
                    <img src={Twitch} alt="Twitch logo" class="twitch-logo" />
                    <h5 class="medium white">Reinventing Viewing Experience for Esports Fans</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div class="hvr-float card laser-card">
                <div class="area">
                    <h2 class="laser-heading">LASERTAG</h2>
                    <h5 class="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

    </main>
</body>
)

Landing.propTypes = {
  siteTitle: PropTypes.string, 
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
