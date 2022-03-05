import NavComponent from "./Navbar";
import Footer from "./Footer";
import bg from "../imgs/bg3.jpg";
import '../styling/home.css';

function Home() {
    return (
        <div>
            <div className="bg-image img-fluid" style={{ backgroundImage: `url(${bg})`, height: "70vh", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <NavComponent />
                <div className="container">
                    <div className="row">
                        <div className=" pt-5 col-sm-4 col-md-4 col-lg-4 col-xl-4  offset-sm-2 offset-md-1">
                            <div >
                                <div className="display-4 text-sm-left  ">
                                    Your<br></br>URLs
                                </div>
                                <p>YourURLs is a business run by brilliant software development students looking to gain
                                    experience and showcase their skills at an affordable price.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="Container" style={{ height: "50vh" }}>
            </div>
            <Footer />
        </div>


    );
}
export default Home;