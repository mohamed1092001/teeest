import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
export default function ProductDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState({})
    const params = useParams();

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((ress) => ress.json())
            .then((product) => setproduct(product))

    }, [])
    return (
        <>
            {/* <h1>product Details {product.title} {params.productId}</h1> */}
            < Product  product={product} showButton={false}  />
        </>

    )
}