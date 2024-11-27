
import './Slider.css';
export default function Slider() {
    return (
        <>

            {/* <div id="carouselExample" class="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("./Images/images (1).jpeg")} className="d-block w-100 height-300" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("./Images/images.jpeg")} className="d-block w-100 height-300" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require("./Images/images.png")} className="d-block w-100 height-300" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}







            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='active bg-dark' aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='active bg-dark' aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("./Images/images (1).jpeg")} className="d-block w-100 height-300" alt="..." />

                        <div className="carousel-caption  d-md-block">
                            <h5 id='h5'> 	ecommerce website</h5>
                            <p id='p'>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("./Images/images.jpeg")} className="d-block w-100 height-300" alt="..." />

                        <div className='carousel-caption  d-md-block' >
                            <h5 id='h5'>	online business</h5>
                            <p id='p'>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("./Images/images.png")} className="d-block w-100 height-300" alt="..." />

                        <div className="carousel-caption  d-md-block">
                            <h5 id='h5'>	shopify pricing</h5>
                            <p id='p'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



        </>

    )

}