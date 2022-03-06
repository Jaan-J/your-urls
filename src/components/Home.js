import NavComponent from "./Navbar";
import Footer from "./Footer";
import bg from "../imgs/bg12.jpg";
import '../styling/home.css';
import planning from "../imgs/planning.png";
import development from "../imgs/development.png";
import goingLive from "../imgs/goingLive.png";
function Home() {
    return (
        <div>
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
            <div className="container" style={{ height: "80vh", padding: "10%" }}>
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="display-6" style={{ fontWeight: "400" }}>Our Process</div>

                    </div>
                    <div className='row text-center text-md-left processInfo'>
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
            </div>
            <Footer />
        </div>


    );
}
export default Home;;;;;