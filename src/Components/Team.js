import "./Team.css";

export default function Team() {
    return (


        <>
            <nav id="navbar-example2" className="navbar navbar-light  px-3 p-2 ">
                <a className="navbar-brand" href="#">Our Team</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">First</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">Second</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Another</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third </a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth </a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example p-3 " tabindex="0">
                <img id="imgg" src={require("./Images/istockphoto-809888414-612x612.jpg")} />
                <h4 id="scrollspyHeading1" className="p-2">First Team</h4>
                <p className="col-md-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor eaque aperiam, adipisci molestias explicabo commodi expedita inventore quod distinctio.</p>

                <img id="imgg" src={require("./Images/istockphoto-838485418-612x612.jpg")} />
                <h4 className="p-2" id="scrollspyHeading2">Second Team</h4>
                <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor eaque aperiam, adipisci molestias explicabo commodi expedita inventore quod distinctio.</p>

                <img id="imgg" src={require("./Images/istockphoto-912338104-612x612.jpg")} />
                <h4 className="p-2" id="scrollspyHeading3">Third Team</h4>
                <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor eaque aperiam, adipisci molestias explicabo commodi expedita inventore quod distinctio.</p>

                <img id="imgg" src={require("./Images/istockphoto-912986752-612x612.jpg")} />
                <h4 className="p-2" id="scrollspyHeading4">Fourth Team</h4>
                <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor eaque aperiam, adipisci molestias explicabo commodi expedita inventore quod distinctio.</p>

                <img id="imgg" src={require("./Images/istockphoto-912996412-612x612.jpg")} />
                <h4  className="p-2" id="scrollspyHeading5">Fifth Team</h4>
                <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor eaque aperiam, adipisci molestias explicabo commodi expedita inventore quod distinctio.</p>

            </div>

        </>

    )
}