import React from "react"
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const LaserTag = () => (
    <div>
      <Navbar />
      <div className="grid">
    <header className="c12">
        <div className="title">
                <div className="start">
                    <h1 className="content-heading">Making <span className="highlight-laser">LaserTag</span> Cool Again!</h1>
                <div className="filler"></div> {/* Fill in with image*/}
                </div>
        </div>

        <div className="c12 main">
        <div className="summary">
            <div className="summary-section">
                <div className="section summary-item">
                    <h5 className="subtitle">OVERVIEW</h5>
                    <p>
                        A feature allowing users to share modified favorites with friends and encouraging users to try new drinks.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </header>
    </div>
    </div>
    
  )

export default LaserTag