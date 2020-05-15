import React from "react"
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const LaserTag = () => (
    <div>
      <Navbar />
      <body class="grid">
    <header class="c12">
        <div class="title">
                <div class="start">
                    <h1 class="content-heading">Making <span class="highlight-laser">LaserTag</span> Cool Again!</h1>
                <div class="filler"></div> {/* Fill in with image*/}
                </div>
        </div>

        <div class="c12 main">
        <div class="summary">
            <div class="summary-section">
                <div class="section summary-item">
                    <h5 class="subtitle">OVERVIEW</h5>
                    <p>
                        A feature allowing users to share modified favorites with friends and encouraging users to try new drinks.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </header>
    </body>
    </div>
    
  )

export default LaserTag