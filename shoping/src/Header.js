import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextapi } from "./contextapi";

function Header() {
const Navigate=useNavigate()
const{loginname,setLoginname,cart}=useContext(contextapi)

function handlelogout(e){

  window.localStorage.removeItem("loginname")
  setLoginname(window.localStorage.getItem("loginname"))
  Navigate("/")
}

    return (
     
<section id="header">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
             <Link className="navbar-brand" to="/products"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {loginname?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">welcome {loginname}  </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart">cart-{!cart.totalitems?0:cart.totalitems}</Link>
        </li>
        <li className="nav-item">
        <button onClick={(e)=>{handlelogout(e)}}>Logout</button>
        </li>
      
      </ul>
      :<></>}
      
    </div>
  </div>
</nav>
            </div>
        </div>
    </div> 


</section>
    
      );
}

export default Header;