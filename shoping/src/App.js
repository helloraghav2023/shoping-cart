import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Registration from "./Registration";
import Header from "./Header";
import Login from "./Login";
import { contextapi } from "./contextapi";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Adminproducts from "./Adminproducts";
import Adminaddproduct from "./Adminaddproduct";
import Adminproductupdate from "./Adminproductupdate";
import Products from "./Products";
import Cart from "./Cart";
import Adminproductdelete from "./Adminproductdelete";
import Moredetails from "./Moredetails";

function App() {
  const[loginname,setLoginname]=useState(window.localStorage.getItem("loginname"))
  const[cart,setCart]=useState("")
  window.localStorage.setItem("cart",JSON.stringify(cart))

  return ( 
    <>
      <Router>
        <contextapi.Provider value={{loginname,setLoginname,cart,setCart}}>
        <Header/>
        <Routes>
          <Route path="/reg" element={<Registration/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/adminproducts" element={<Adminproducts/>}></Route>
          <Route path="/adminaddproduct" element={<Adminaddproduct/>}></Route>
          <Route path="/adminproductupdate/:id" element={<Adminproductupdate/>}></Route>
          <Route path="/products/" element={<Products/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/adminproductdelete/:id" element={<Adminproductdelete/>}></Route>
          <Route path="/moredetails/:id" element={<Moredetails/>}></Route>

          
          
          
          
        
        </Routes>
        </contextapi.Provider>
      </Router>
    </>
   );
}

export default App;