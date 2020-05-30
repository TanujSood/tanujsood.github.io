import React from "react"
import Navbar from '../components/Navbar'
import Stat from '../images/userstat.png'
// import Footer from '../components/Footer'


const Trana = () => (
    
    <div>
      <Navbar />
        <div className="grid">
        <header className="c12">
            <div className="title">
                <div className="start">
                    <h1 className="content-heading">Motivating People to <span className="highlight-werk">Stay Fit</span> at Home!</h1>
                <div className="filler"></div>
                {/* Fill in with image*/}
                </div>
            </div>
        </header>

        <div className="c6 divide"></div>

        <div className="c12 main">
            <div className="summary">
                <div className="summary-section">
                    <div className="section summary-item">
                        <h5 className="sub-heading">OVERVIEW</h5>
                        <p className="para-left">
                            During pandemic struck times, I found no motivation to work out at home, so I decided to do something about it. With nowhere to go and loads of idle time, I decided to create an app that would help people find the motivation to get themselves out of bed. Träna is a social fitness app that motivates people to work out at home and stay fit.                        </p>
                        <p className="para-left">
                            Träna connects users with there peers and allows them to work out together and compete in an attempt to dominate weekly scores. All of this, from the comfort of their own homes.
                        </p>
                    </div>
                </div>
                <div className="summary-section">
                    <div className="section summary-item">
                        <h5 className="sub-heading">DURATION</h5>
                        <p className="para">
                            April 2020 - May 2020 (3 Weeks)
                        </p>
                    </div>
                    <div className="section summary-item">
                        <h5 className="sub-heading">ROLES</h5>
                        <p className="para">
                            User Researcher <br />
                            Experience Designer
                        </p>
                    </div>
                    <div className="section summary-item">
                        <h5 className="sub-heading">TOOLS</h5>
                        <p className="para">
                            Adobe XD <br />
                            Balsamiq
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="c6 divide"></div>

        <div className="c6">

            {/* PROBLEM */}
            <div className="section">
                <h5 className="section-heading">PROBLEM</h5>
                <h5 className="section-title">No Motivation!</h5>
                <p className="section-para">
                    During the massive coronavirus outbreak, my life took a significant toll. Used to living on campus, living at home was a complete lifestyle change. More so, the closure of gyms all around the world took away my one hour of joy, which I used to relieve any stress I had during the day. No commute while the virus pondered around meant that fitness was a priority above all, indicating that we needed to get used to home workouts.                </p>
                <p className="section-para">   
                    My friends from college shared my emotions towards working out at home; there was no motivation. After trying dozens of apps, promising to turn me into the next Schwarzenegger, I spent several days trying to get used to home workouts. However, the user experience didn't do an excellent job of pushing me enough to stop me from binging Netflix shows instead.                </p>
                <p className="section-para">
                    As a passion project, I decided to solve this problem through a fitness app's user experience that pushes users to workout and stay fit during the lockdown.                </p>
            </div>

            <div className="section">
                <h5 className="section-heading">THE CHALLENGE</h5>
                <h5 className="section-title">Setting Goals</h5>
                <p className="section-para">
                    It's difficult to keep up with a strict fitness regime when a thousand different things cloud your motivation to work out. People who try to pick up fitness apps often give up since they can't get themselves to make an effort to exercise everyday. So, while designing the app, my main challenges would be to
                </p>
                <ul className="section-para">
                        <li className="section-bullet">Introduce a unique feature to induce motivation.</li>
                        <li className="section-bullet">Understand and improve on pain points from other fitness apps.</li>
                        <li className="section-bullet">Think of a way to keep content fresh making sure users keep coming back.</li>
                </ul>
                <p className="section-para">
                    Since running is not an option during a lockdown, I was inclined to create an app users could use to help them work out at home. My primary aim was to maximise user retention so that users can enjoy using the app everyday without losing interest or motivation.
                </p>
            </div>

            {/* USER RESEARCH */}
            <div className="user-section">
                <h5 className="section-heading">USER RESEARCH</h5>
                <h5 className="section-title">What Users Want</h5>
                <p className="section-para">
                    Solving a user-centric problem requires information from users to gauge their expectations from an ideal fitness app. Surveying 82 people from my university, I focused on regular gym-goers and how the lockdown affected their feelings and actions towards fitness. The results I acquired gave me insights I could work on and form user personas to keep in mind while designing the app.
                </p>
                
                <img src={Stat} className="user-stat" alt="userstat" />

                <p className="section-para">
                    Visualising these insights validated my initial assumptions, I needed to prioritise motivation through my app's user experience. Asking people what pushed them to go to the gym, empathizing with users' wants gave me a brilliant idea which would help me achieve my goal.
                </p>
                <p className="section-para">
                    Many users claimed how their friends often were a motivation for them to visit the gym, and how by doing so they pushed each other to get fitter. Using these facts, I formed a list of user goals this app would need to achieve.
                </p>
                <h5 className="section-subtitle">The Inevitable Tasklist</h5>
                <p className="section-para">
                    I decided to set a few product goals I would keep in mind through every phase of my design process. This would allow me to keep the audience in mind at all times while focusing on maximising user engagement. These goals were:
                </p>
            </div>
            {/* COMPETITOR ANALYSIS */}
            <div className="section">
                <h5 className="section-heading">COMPETITOR ANALYSIS</h5>
                <h5 className="section-title">Features ≠ Motivation</h5>
                <p className="section-para">
                    The fitness industry is a multi-billion dollar venture flooded with sales of supplements, trainers and gym memberships. As the industry is making big moves to align itself with the internet age, several fitness apps have dominated the market while others have periodically emerged.
                </p>
                <p className="section-para">
                    Before initiating my ideation phase, I wanted to see how these existing apps engage their users through the features they offer. By analysing areas they excel at while identifying pain points, my design process will be smoother and will allow me to improve on some of these tools these apps employ.
                </p>
            </div>            

            {/* IDEATION */}
            <div className="section">
                <h5 className="section-heading">IDEATION</h5>
                <h5 className="section-title">Ideas</h5>
            </div>

            {/* Design */}
            <div className="section">
                <h5 className="section-heading">DESIGN</h5>
                <h5 className="section-title">Wireframes</h5>
            </div>

            {/* PROTOTYPING */}
            <div className="section">
                <h5 className="section-heading">PROTOTYPING</h5>
                <h5 className="section-title">Testing</h5>

            {/* CONCLUSION */}
            </div>
            <div className="section">
                <h5 className="section-heading">CONCLUSION</h5>
                <h5 className="section-title">What's Next...</h5>
            </div>
        </div>
   
    </div>
    </div>
    
  )

export default Trana
