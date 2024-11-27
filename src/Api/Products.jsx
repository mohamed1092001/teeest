

import { Data } from "./Data";
export default function products() {


    const pro = Data.map((pro) => {
        return (
            <div>
                <ul>
                    <li>
                        <h1>{pro.id}</h1>
                    </li>
                </ul>
                <img src={pro.image} alt="" />
                <h2>{pro.title}</h2>
                <p>{pro.description}</p>
                <p>{pro.price}</p>


            </div>
        )
    })
    return (
        <>
            {pro}
        </>

    )
}