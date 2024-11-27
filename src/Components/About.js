import './About.css';

function About() {

    return (
        <>


            <div style={{ height: "400px", border: "none" }} class="card bg-dark text-white m-4 ">
                <img style={{
                    height: "400px",
                    filter: "contrast(1.2)",
                    boxShadow: "6px 8px 0px black"

                }} src={require("./Images/online-6107598_640.webp")} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h5 style={{
                        fontWeight: "700"
                    }} class="card-title">Shopping Online.</h5>
                    <p style={{
                        fontWeight: "500"
                    }} class="card-text">This is a wider card with supporting a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

            <section className='container'>
                <div className='row'>
                    <div className='col-md-4 col-12  p-2'>
                        <img style={{
                            borderRadius: "10% 50% 10% 50% / 50% 10% 50% 10%",
                            width: "100%",
                            filter: "contrast(1.2)"

                        }} src={require("./Images/istockphoto-2161842582-612x612.jpg")} />
                    </div>
                    <div className='col-md-8 col-12 p-4 '>
                        <h4 className='m-2 p-2 text-primary'>About  the E-commerce.</h4>
                        <ol type='A'>
                            <li className='list'>
                                <p style={{
                                    color: "black",
                                    fontStyle: "italic"
                                }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam accusamus sunt at doloribus et voluptatum impedit molestias rerum recusandae dolorem.
                                </p>
                            </li>

                            <li className='list'>
                                <p style={{ color: "black" }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam accusamus sunt at doloribus et voluptatum impedit molestias rerum recusandae dolorem.
                                </p>
                            </li>

                            <li className='list'>
                                <p style={{ color: "black" }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam accusamus sunt at doloribus et voluptatum impedit molestias rerum recusandae dolorem.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
                <br />
                <br />
                <br />

            </section>


        </>
    )
}
export default About;