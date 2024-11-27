import "./Contact.css";
export default function Contact() {

    return (
        <>
            <h1 id="info" className="text-center p-3"> To Contact Us </h1>


            <form className="row g-3 m-3" >
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="enter first name..." required />
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" placeholder="enter last name..." required />
                </div>
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="enter user name..." aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationDefault03" className="form-label">City</label>
                    <input type="text" className="form-control" placeholder="your city..." id="validationDefault03" required />
                </div>
                <div className="col-md-3">
                    <label for="validationDefault04" className="form-label">State</label>
                    <select className="form-select" id="validationDefault04" required >
                        <option selected disabled placeholder="">Choose...</option>
                        <option>الغربيه</option>
                        <option>الجيزه</option>
                        <option>القاهره</option>
                        <option>الاسكندريه</option>
                        <option>الاقصر</option>

                    </select>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <select className="form-select" required aria-label="select example">
                        <option value="">Open this select menu</option>
                        <option value="1">Electronic Menu</option>
                        <option value="2">Jewelery Menu</option>
                        <option value="3">Men's Clothing Menu</option>
                        <option value="3">Women's Clothing Menu</option>
                        <option value="3">All Menu</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input type="file" className="form-control" aria-label="file example" required />
                </div>

                <div className="mb-3 was-validated">
                    <label for="validationTextarea" className="form-label">Message for us</label>
                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="if you need send message write here..." required></textarea>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                </div>
            </form >

            <section className="container-fluid bg-dark">
                <div className="row">

                    <div className=" col-md-3 ">
                        <i class="fa-brands fa-facebook"></i>
                        <i style={{ padding: "6px" }} className="fa-brands fa-facebook-messenger"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i style={{ padding: "6px" }} class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>

                </div>
            </section>
            <br />


        </>

    )
}