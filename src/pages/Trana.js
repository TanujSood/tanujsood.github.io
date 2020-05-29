import React from "react"
import Navbar from '../components/Navbar'
import Stat from '../images/userstat.png'
// import Footer from '../components/Footer'


const Trana = () => (
    
    <div>
      <Navbar />
        <body class="grid">
        <header class="c12">
            <div class="title">
                <div class="start">
                    <h1 class="content-heading">Motivating People to <span class="highlight-werk">Stay Fit</span> at Home!</h1>
                <div class="filler"></div>
                {/* Fill in with image*/}
                </div>
            </div>
        </header>

        <div class="c6 divide"></div>

        <div class="c12 main">
            <div class="summary">
                <div class="summary-section">
                    <div class="section summary-item">
                        <h5 class="sub-heading">OVERVIEW</h5>
                        <p class="para-left">
                            During pandemic struck times, I found no motivation to work out at home, so I decided to do something about it. With nowhere to go and loads of idle time, I decided to create an app that would help people find the motivation to get themselves out of bed. Träna is an app that motivates people to work out at home and stay fit.                        </p>
                        <p class="para-left">
                            Träna connects users with there peers and allows them to work out together and compete in an attempt to dominate weekly scores. All of this, in the comfort of their homes.
                        </p>
                    </div>
                </div>
                <div class="summary-section">
                    <div class="section summary-item">
                        <h5 class="sub-heading">DURATION</h5>
                        <p class="para">
                            April 2020 - May 2020 (3 Weeks)
                        </p>
                    </div>
                    <div class="section summary-item">
                        <h5 class="sub-heading">ROLES</h5>
                        <p class="para">
                            User Researcher <br />
                            Experience Designer
                        </p>
                    </div>
                    <div class="section summary-item">
                        <h5 class="sub-heading">TOOLS</h5>
                        <p class="para">
                            Adobe XD <br />
                            Balsamiq
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="c6 divide"></div>

        <div class="c6">

            {/* PROBLEM */}
            <div class="section">
                <h5 class="section-heading">PROBLEM</h5>
                <h5 class="section-title">No Motivation!</h5>
                <p class="section-para">
                    During the massive coronavirus outbreak, my life took a significant toll. Used to living on campus, living at home was a complete lifestyle change. More so, the closure of gyms all around the world took away my one hour of joy, which I used to relieve any stress I had during the day. No commute while the virus pondered around meant that fitness was a priority above all, indicating that we needed to get used to home workouts.                </p>
                <p class="section-para">   
                    My friends from college shared my emotions towards working out at home; there was no motivation. After trying dozens of apps, promising to turn me into the next Schwarzenegger, I spent several days trying to get used to home workouts. However, the user experience didn't do an excellent job of pushing me enough to stop me from binging Netflix shows instead.                </p>
                <p class="section-para">
                    As a passion project, I decided to solve this problem through a fitness app's user experience that pushes users to workout and stay fit during the lockdown.                </p>
            </div>

            <div class="section">
                <h5 class="section-heading">THE CHALLENGE</h5>
                <h5 class="section-title">Setting Goals</h5>
                <p class="section-para">
                I decided to set a few user goals I would keep in mind through every phase of my design process. This would allow me to keep the audience in mind at all times while focusing on maximising user engagement. These goals were:
                </p>
            </div>

            {/* USER RESEARCH */}
            <div class="user-section">
                <h5 class="section-heading">USER RESEARCH</h5>
                <h5 class="section-title">What Users Want</h5>
                <p class="section-para">
                    Solving a user-centric problem requires information from users to gauge their expectations from an ideal fitness app. Surveying 82 people from my university, I focused on regular gym-goers and how the lockdown affected their feelings and actions towards fitness. The results I acquired gave me insights I could work on and form goals to keep in mind while designing the app.
                </p>
                
                <img src={Stat} class="user-stat" alt="userstat" />

                <p class="section-para">
                    Visualising these insights made my primary goal clearer than ever, I needed to induce motivation through my app's user experience. Asking people about their motivations to go to the gym, empathizing with users' wants gave me a brilliant idea which would help me achieve my goal.
                </p>
                <p class="section-para">
                    Many users claimed how their friends often were a motivation for them to visit the gym, and how by doing so they pushed each other to get fitter. Using these facts, I formed a list of goals this app would need to achieve.
                </p>
                <h5 class="section-subtitle">The Inevitable Tasklist</h5>
                <p class="section-para">
                    I decided to set a few product goals I would keep in mind through every phase of my design process. This would allow me to keep the audience in mind at all times while focusing on maximising user engagement. These goals were:
                </p>
            </div>
            {/* COMPETITOR ANALYSIS */}
            <div class="section">
                <h5 class="section-heading">COMPETITOR ANALYSIS</h5>
                <h5 class="section-title">Features ≠ Motivation</h5>
                <p class="section-para">
                    The fitness industry is a multi-billion dollar venture flooded with sales of supplements, trainers and gym memberships. As the industry is making big moves to align itself with the internet age, several fitness apps have dominated the market while others have periodically emerged.
                </p>
                <p class="section-para">
                    Before initiating my ideation phase, I wanted to see how these existing apps engage their users through the features they offer. By analysing areas they excel at while identifying pain points, my design process will be smoother and will allow me to improve on some of these tools these apps employ.
                </p>
            </div>            

            {/* IDEATION */}
            <div class="section">
                <h5 class="section-heading">IDEATION</h5>
                <h5 class="section-title">Ideas</h5>
            </div>

            {/* Design */}
            <div class="section">
                <h5 class="section-heading">DESIGN</h5>
                <h5 class="section-title">Wireframes</h5>
            </div>

            {/* PROTOTYPING */}
            <div class="section">
                <h5 class="section-heading">PROTOTYPING</h5>
                <h5 class="section-title">Testing</h5>

            {/* CONCLUSION */}
            </div>
            <div class="section">
                <h5 class="section-heading">CONCLUSION</h5>
                <h5 class="section-title">What's Next...</h5>
            </div>
        </div>
   
    </body>
    </div>
    
  )

export default Trana
