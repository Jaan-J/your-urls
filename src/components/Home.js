import NavComponent from "./Navbar";
import Footer from "./Footer";
import bg from "../imgs/bg12.jpg";
import '../styling/home.css';
import planning from "../imgs/planning.png";
import development from "../imgs/development.png";
import goingLive from "../imgs/goingLive.png";
import Testimonials from "./Testimonials";
function Home() {
    return (
        <div style={{ height: "100vh" }}>
            <div className="container-fluid">
                <div className="row" style={{ height: "500px" }}>
                    <div className="col-12 img-fluid" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                        <NavComponent />
                        <div className="col-md-6 offset-sm-2 offset-xs-3">
                            <div className="display-3 text-sm-left homeText" >
                                Your<br></br>URLs
                            </div>
                            <div className="display-6 col-sm-6 homeText2">
                                <p>YourURLs is a business run by brilliant software development students looking to gain
                                    experience and showcase their skills at an affordable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ padding: "10%" }}>
                <div className="row">
                    <div className="whatWeDo">
                        <div className="d-flex justify-content-center">
                            <div className="display-5" style={{ fontWeight: "400" }}>What We Do</div>
                        </div>
                        <div className='row text-center'>
                            <div className='col-md-5 col-lg-5 col-xl-7 mx-auto mt-3'>
                                <p>We create websites for our clients to suit their needs. Just tell us what your website will
                                    be used for and what content to include, and we’ll create a personalized website just for you.
                                    Leave the design, branding, and development to us.</p>
                            </div>
                        </div>
                    </div>
                    <div className="processInfo">
                        <div className="d-flex justify-content-center">
                            <div className="display-6" style={{ fontWeight: "400" }}>Our Process</div>
                        </div>
                        <div className='row text-center text-md-left'>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={planning} width="25%"></img>
                                <h4>Planning</h4>
                                <p>Determine client needs and create a wireframe design,
                                    getting client feedback every step of the way</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={development} width="25%"></img>
                                <h4>Development</h4>
                                <p>Start the site building process and incorporate your branding
                                    onto your future site, giving your website it's own unique
                                    personality.</p>
                            </div>
                            <div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
                                <img src={goingLive} width="25%"></img>
                                <h4>Going Live</h4>
                                <p>After doing thorough testing and receiving the thumbs up
                                    from the client, the site is ready to go live!</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonialRecomendations">
                        <div className="d-flex justify-content-center">
                            <div className="display-3" style={{ fontWeight: "400" }}>Testimonials</div>
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