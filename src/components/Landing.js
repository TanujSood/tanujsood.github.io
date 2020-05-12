import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

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
</body>
)

Landing.propTypes = {
  siteTitle: PropTypes.string, 
}

Landing.defaultProps = {
  siteTitle: ``,
}

export default Landing
