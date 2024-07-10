import main from "../assets/main.png"

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
        <img src={main} style={{width:"65px"}} alt="" className="navbar-brand"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 d-flex justify-content-evenly align-items-sm-center">
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("business")}>business</div>
            </li>
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
            </li>
            <li className="nav-item">
            <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar;