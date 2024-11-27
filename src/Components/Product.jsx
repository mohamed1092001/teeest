import { Link } from "react-router";

export default function Product(props) {

    const { product, showButton } = props;
    return (
        <>

            <div className="card m-4" style={{ border: "none", boxShadow: ".1px .6px .3px red" }}>
                <img style={{ margin: "0 auto", width: "200px", height: "200px", boxShadow: ".7px .9px .9px green", padding: "6px" }} src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 style={{
                        color:"blue",
                        fontFamily:"serif"
                    }} className="card-title">{product.title}</h5>
                    <p style={{
                        color: "black",
                        fontStyle: "oblique"
                    }} className="card-text">{product.description}</p>
                    <p style={{
                        fontStyle: "italic",
                        color: "black",
                    }}>price : {product.price}$</p>
                    {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>}
                </div>
            </div>
        </>
    )
}