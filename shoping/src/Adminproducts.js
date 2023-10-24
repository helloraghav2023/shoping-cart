import { Link } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";          


function Adminproducts() {
  const[products,setProducts]=useState([])
  const[message,setmessage]=useState("")
  

useEffect(()=>
{fetch("/api/allproducts").then((result)=>{return result.json()}).then((data1)=>{
  // console.log(data1)
    if(data1.status===200){
        setProducts(data1.apidata)     
  }
    else{
        setmessage(data1.message)
    }
   
},[])
})
    return ( <>
    
        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left/>
                    
                    <div className="col-md-9">
                            <Link to="/adminaddproduct"><button className="btn btn-info form-control">Add more products...</button></Link>
                        <h2 className="text-center">Product management</h2>
                        {message}
                    
                        <table className="table table-hover">
                        <thead>
                        <tr>
                           <th>s.no</th>
                           <th>product name</th>
                           <th>product image</th>
                           <th>product description</th>
                           <th>product price</th>
                           <th>product status</th>
                           <th>product Quantity</th>
                           <th>product update</th>
                           <th>product delete</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((result,key)=>(
                            <tr key={result._id}>
                        <td>{key+1}</td>
                        <td>{result.name}</td>
                        <td><img style={{width:"100px"}} src={`/images/${result.img}`} alt=""/> </td>
                        <td>{result.desc}</td>
                        <td>{result.price}</td>
                        <td>{result.status}</td>
                        <td>{result.quantity}</td>
                        <td><Link to={`/adminproductupdate/${result._id}`}><button>update</button></Link></td>
                        <td><Link to={`/adminproductdelete/${result._id}`}><button>delete</button></Link></td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                
                     </div>
                </div>
            </div>
        </section>
                    
    
       
        
        </>
     );
}

export default Adminproducts;