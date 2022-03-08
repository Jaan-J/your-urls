import "../styling/Testimonials.css";
function Testimonials() {
    return (

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            </ol>
            <div className="carousel-inner ">
                <div className="carousel-item active text-center">
                    <div className="d-flex h-100 align-items-center caption" style={{ width: "50%", margin: "auto" }}>
                        <p>"As soon as I reached out to Mr. Javed to make me a website, he very quickly got back to me and asked
                            what I wanted. I gave him a rough Idea of what I wanted, and he got started right away. Every step of
                            the way he kept me informed about what he was doing and asked me if it is to my liking. He was quick,
                            professional and got it done exactly how I wanted it. I would highly recommend his services to anyone
                            who is looking into making a website!"</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item active text-center">
                        <div className="d-flex h-100 align-items-center caption" style={{ width: "50%", margin: "auto" }}>
                            <p>
                                "I was recommended Jaan's services by a friend because I wanted a portfolio website built. He
                                was able to build it exactly the way I wanted it, and even suggested some improvements that
                                enhanced the overall design and function. Despite having a busy schedule, Jaan’s communication
                                throughout was exceptional and he was always great at understanding my needs and delivering the
                                desired outcome. I would definitely recommend working with Jaan to anyone looking to have any kind
                                of website built!"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <a href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a href="#myCarousel" className="carousel-control-next" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};
export default Testimonials;