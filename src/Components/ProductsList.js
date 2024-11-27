
import { useEffect, useState } from "react";
import Product from "./Product";
import './ProductList.css';
function ProductsList() {



    const api_url = " https://fakestoreapi.com/products"
    const [product, setproduct] = useState([])
    const [category, setcategory] = useState([])





    const getProducts = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setproduct(data));

    }


    let grtCategory = () => {

        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setcategory(data));

    }

    const getProductInCategory = ((catname) => {
        console.log(catname);

        fetch(`${api_url}/category/${catname}`)
            .then(res => res.json())
            .then(data => setproduct(data))
    })


    useEffect(() => {
        getProducts();
        grtCategory();


    }, []);

    return (
        <>
            <h2 style={{ color: "red", textShadow: '1.3px 1.3px black' }} className="text-center p-3">Our Products.</h2>
            <div className="container">
                <button id="button2" onClick={() => {
                    getProducts()

                }} className="btn btn-info m-2">ALL</button>


                {
                    category.map((cat) => {

                        return (
                            <button id="button2" key={cat} onClick={() => {
                                getProductInCategory(cat)

                            }} className="btn btn-info m-2">{cat}</button>
                        )
                    })
                }
                <div className="row">
                    {product.map((product) => {
                        return (
                            <div className="col-md-3 col-12 " key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>


                        );
                    })}

                </div>

            </div >
        </>

    )
}
export default ProductsList;    