import { useContext, useEffect, useState } from "react";
import { contextapi } from "./contextapi";
import {Link} from 'react-router-dom';

function Products() {
    const[products,setProducts]=useState([])
    const{cart,setCart}=useContext(contextapi)



    function handleaddcart(e,product){
        //console.log(product)
     let _cart={...cart}
     if(!_cart.items){
        _cart.items={}
     }

     if(!_cart.items[product._id]){
        _cart.items[product._id]=1
     }else{
        _cart.items[product._id]+=1
     }

     if(!_cart.totalitems){
        _cart.totalitems=1
     }else{
        _cart.totalitems+=1
     }

     setCart(_cart)
     //console.log(cart)



    }
useEffect(()=>{
fetch("/api/stockdata").then((result)=>{return result.json()}).then((data)=>{
//console.log(data)
if(data.status===200){
setProducts(data.apidata)
                        
}})
},[])         
    return (  
        <section id="products">
        <div className="container">
                    <div className="row">
                {products.map((result)=>( 
                    
                <div id="card" className="col-md-3" >
                <div className="card " style={{width: "18rem",height:"20rem", }}>
  <img style={{width:"18rem",height:"100px",}} src={`/images/${result.img}`} alt=""/> 
  <div className="card-body">
    <h5 className="card-title">{result.name}</h5>
    <p className="card-text">{result.desc}</p>
    <p className="card-text">price-{result.price}</p>
    <button className="btn btn-success me-1 mb-2 " onClick={(e)=>{handleaddcart(e,result)}}>Add cart</button>
    <Link to={`/moredetails/${result._id}`}><button className="btn btn-danger me-1 mb-2 ">more details</button></Link>
    </div>
  </div>
</div> ))}
</div>
        </div> 

    </section>          
           
    );
}

export default Products;