import NavComponent from "./Navbar";
import Footer from "./Footer";
import ahsan from "../imgs/ahsan.png";
import jaan from "../imgs/jaan.png";
import raahim from "../imgs/raahim.png";
import shawn from "../imgs/shawn.png";
import rupin from "../imgs/rupin.png";
import berhan from "../imgs/Berhan.png";
import seyran from "../imgs/seyran.png";
import "../styling/about.css";
function About() {
    return (
        <div class="animate__animated  animate__backInLeft">
            <NavComponent />
            <div className="container">
                <div className="row">
                    <div className="details">
                        <div className='row text-center text-md-left' >
                            <div className='col-md-6 col-lg-6 col-xl-6 mx-auto mt-3'>
                                <div className="display-5">Who are we?</div>
                                <div className="display-6">Based in the Greater Toronto Area, we are a hard working team
                                    of creative individuals; a group of undergrad students that attend a range of colleges and universities
                                    and are working towards their goal of becoming a software engineer.</div>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-6 mx-auto mt-3'>
                                <div className="display-5">What we do</div>
                                <div className="display-6"> We design, build, and maintain visually appealing, highly functional
                                    sites for small businesses and individuals alike. Specfically tailored by our talented team of designers and
                                    developers, we assure that every requirement is met and surpassed.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="display-3 text-center">
                            Meet Our Team
                        </div>
                        <div className="display-6 text-center meetOurTeam">
                            <p>A group of sophisticated developers, at your disposal</p>
                        </div>
                    </div>
                    <div className="teamInfo">
                        <div className='row text-center text-md-left'>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={jaan} alt="jaanPortrait"></img>
                                <h4>Jaan Javed</h4>
                                <h5>Full Stack Developer</h5>
                                <h6>Founder & Project Manager</h6>
                                <p>"With my eyes set on becoming a full time software developer, I enjoy programming
                                    in my leisure time and love taking on challenges whether its in the form of a school
                                    assignment or a competition. I am ready to push myself to the limit in order to perfect
                                    whichever project presents itself"</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={shawn} alt="shawnPortrait" ></img>
                                <h4>Shawn Cameron</h4>
                                <h5>Full Stack Developer</h5>
                                <h6>Finance Analyst</h6>
                                <p>"For over three years I have been creating and designing applications for school,
                                    competitions and in my free time. I am a hard working, dedicated individual who
                                    wants nothing but the best for all our customers." </p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={ahsan} alt="ahsanPortrait"></img>
                                <h4>Ahsan Ali</h4>
                                <h5>Front End Developer</h5>
                                <h6>Graphic Design Lead</h6>
                                <p>"As an individual who has been met with many unsatisfactory services, I sought to
                                    provide myself with the tools to deliver a more than exemplary service to anyone
                                    that has similar stories. My goal is for the team and I to create an unforgettable
                                    and simple solution for all of our customers."</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={raahim} alt="raahimPortrait"></img>
                                <h4>Raahim Ghori</h4>
                                <h5>Full Stack Developer</h5>
                                <h6>H.R Lead</h6>
                                <p>"I've been constructing programs and websites for school, contests, small businesses,
                                    and in my spare time for over 3 years. I am a devoted, hardworking, and organized
                                    individual that prioritizes the wants and needs of our customers and responds with
                                    perfect results.".</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={rupin} alt="rupinPortrait"></img>
                                <h4>Rupin Sharma</h4>
                                <h5>Full Stack Developer</h5>
                                <p>"With my passion for coding and technology, I have been creating many projects in my free time.
                                    I look forward to encountering problems that challenge my critical thinking so that
                                    I can hone my programming skills and become a better developer. I pride myself in
                                    give my best for everything whether it is for personal
                                    projects, or school assignments."</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={berhan} alt="rupinPortrait"></img>
                                <h4>Berhan Berhan</h4>
                                <h5>Full Stack Developer</h5>
                                <p>"Over the past few years I've been devoting my time into building projects
                                    that I use on a day to day . These projects spark my passion for automation and  bring my code
                                    to life. My passion for progression helped me strengthen my skills and with that I'll help
                                    our team work towards a common goal!"</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={seyran} alt="rupinPortrait"></img>
                                <h4>Seyran Ghazaryan</h4>
                                <h5>Full Stack Developer</h5>
                                <p>"With a strong programming background, drive and motivation, I have been using my creativity and
                                    passion to build applications for my own experience and for school as well. My strong work ethic
                                    displays itself in all my projects and I am ready to develop and produce high customer satisfaction."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;