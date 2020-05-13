import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import Lens from '../images/Hololens.png'


const Landing = ({ siteTitle }) => (
    <body class="grid">
    <header class="c12">
        <div class="title">
                <div class="start">
                    <h1 class="heading">Hey, I'm Tanuj!✌️</h1>
                    <p class="smm">An aspiring <span class="highlight">Product Designer</span> with a focus in User Experience and 
Interaction Design. Majoring in Computer Science and Entrepreneurship <span class="ashoka"><a href="https://www.ashoka.edu.in/" target="#">@Ashoka University.</a></span></p>
                    <p class="smm2">Currently working as a freelance UX designer.</p>
                </div>
        </div>
    </header>

    <main class="c12 content">

            <a href="github"><div class="hvr-float exp exp-github">
                <div class="exp-content">
                    <img alt="GitHub logo" src="work/github/github-logo.svg" class="github-logo" />
                    <h2 class="black">WerkIt</h2>
                    <h5 class="medium">Working out with friends</h5>
                </div>

            </div></a>

            <Link to="/LaserTag/"><div class="hvr-float exp exp-starbucks">
                <div class="exp-content">
                    <img alt="coffee cup" src={Lens} class="starbucks-logo" />
                    <h2 class="white">Laser Tag</h2>
                    <h5 class="medium">Innovating for the future.</h5>
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
