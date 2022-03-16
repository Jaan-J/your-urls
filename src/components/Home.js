import NavComponent from "./Navbar";
import Footer from "./Footer";
import bg from "../imgs/bg12.jpg";
import '../styling/home.css';
import planning from "../imgs/planning.png";
import development from "../imgs/development.png";
import goingLive from "../imgs/goingLive.png";
import Testimonials from "./Testimonials";
import logo from '../imgs/logocleanwhite.png';
import 'animate.css';

function Home() {
    return (
        <div id="body">
            <div className="container-fluid">
                <div className="row homePic">
                    <div className="bg col-12 img-fluid" class="animate__animated  animate__backInDown" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                        <NavComponent />
                        <div className="logoPlacement col-md-4 offset-sm-1 d-flex justify-content-sm-center  justify-content-xs-center">
                            <img src={logo} class="rounded mx-auto d-block" alt="logo" width="85%" />
                        </div>
                        <div className="col-md-6 offset-sm-2 offset-xs-2">
                            <div className="display-6 col-sm-6 homeText">
                                <p>YourURLs is a business run by brilliant software development students looking to gain
                                    experience and showcase their skills at an affordable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="whyUs">
                        <div className="d-flex justify-content-center">
                            <div className="display-4" >Why Pick Us?</div>
                        </div>
                        <div className='row text-center'>
                            <div className='col-md-10 col-lg-10 col-xl-10 mx-auto mt-3'>
                                <div className="display-6">We give 100% Ownership rights to our clients, and charge no monthly,
                                    quarterly or yearly fees that may be of surprise. Not only that, but we offer free lifetime
                                    maintenence and only charge for major changes.</div>
                            </div>
                        </div>
                    </div>
                    <div className="processInfo">
                        <div className="d-flex justify-content-center">
                            <div className="display-6">Our Process</div>
                        </div>
                        <div className='row text-center text-md-left'>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={planning} alt="planningImg"></img>
                                <h4>Planning</h4>
                                <p>Determine client needs and create a wireframe design,
                                    getting client feedback every step of the way</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={development} alt="devImg"></img>
                                <h4>Development</h4>
                                <p>Start the site building process and incorporate your branding
                                    onto your future site, giving your website it's own unique
                                    personality.</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={goingLive} alt="goingLiveImg"></img>
                                <h4>Going Live</h4>
                                <p>After doing thorough testing and receiving the thumbs up
                                    from the client, the site is ready to go live!</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonialRecomendations">
                        <div className="d-flex justify-content-center">
                            <div className="display-3">Testimonials</div>
                        </div>
                        <div >
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}
export default Home;