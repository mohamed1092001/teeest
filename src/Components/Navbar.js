
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link id='e-commerce' className="navbar-brand" to="/"><span style={{color:"blue"}}>E _ </span>Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ml-auto ">
                            <li className="nav-item">
                                <Link id='link' className="nav-link active" aria-current="page" to={'/'}>
                                    <i class="fa-solid fa-house"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='link' className="nav-link" to={'/about'}><i class="fa-solid fa-address-card"></i> ABout</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='link' className="nav-link active " aria-current="page" to={'/team'}>
                                    <i class="fa-solid fa-people-group"></i> Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='link' className="nav-link active" aria-current="page" to={'/contact'}>
                                    <i class="fa fa-fw fa-envelope"></i> Conatct</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;