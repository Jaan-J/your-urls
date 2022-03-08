import NavComponent from "./Navbar";
import Footer from "./Footer";
function About() {
    return (
        <div>
            <NavComponent />
            <div className="container" style={{ height: "100vh" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="display-3 text-center">
                            Meet Our Creative Team
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default About;