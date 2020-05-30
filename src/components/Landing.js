import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Twitch from '../images/Twitch.png'



const Landing = ({ siteTitle }) => (
    <div className="grid">
    <header className="c12">
        <div className="title">
                <div className="start">
                    <h1 className="heading">Hey, I'm Tanuj!<span role="img" aria-label="emoji">✌️</span></h1>
                    <h2 className="smm">An aspiring <span className="highlight">Product Designer</span> with a passion for solving complex problems with innovative solutions. Majoring in Computer Science and Entrepreneurship <span className="ashoka"><a href="https://www.ashoka.edu.in/" target="#">@Ashoka University.</a></span></h2>
                    <h5 className="smm2">Currently working as a freelance UX designer.</h5>
                </div>
        </div>
    </header>

    <main className="c12 content">

            <Link to="/Trana/"><div className="card card-1 trana-card">
                <div className="area"> 
                    <h2 className="trana-heading white">träna</h2>
                    <h5 className="medium white">Motivating People to Stay Fit Indoors</h5>
                </div>
            </div></Link>

            <Link to="/Twitch/"><div className="card card-1 twitch-card">
                <div className="area">
                    <img src={Twitch} alt="Twitch logo" className="twitch-logo" />
                    <h5 className="medium white">Reinventing Viewing Experience for Esports Fans</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div className="card card-1 laser-card">
                <div className="area">
                    <h2 className="laser-heading">LASERTAG</h2>
                    <h5 className="laser-medium">Taking Outdoor Sports to the next level with AR</h5>
                </div>
            </div></Link>

            <Link to="/LaserTag/"><div className="card card-1 laser-card">
                <div className="area">
                    <h2 className="laser-heading">LASERTAG</h2>
                    <h5 className="laser-medium">Coming Soon...</h5>
                </div>
            </div></Link>
    </main>

    <div className="c4">
        <h2 className="contact"><span className="highlight">Let's talk!</span></h2>
        <p className="mail">Wanna discuss internship opportunities? Or the next million dollar idea? Mail me <span className="highlight-mail"><a href="mailto:tanuj.sood_ug21@ashoka.edu.in">@tanuj.sood_ug21@ashoka.edu.in</a></span></p>
    </div>

</div>
)

Landing.propTypes = {
  siteTitle: PropTypes.string, 
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
