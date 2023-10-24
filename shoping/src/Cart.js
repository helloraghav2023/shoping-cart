import { useContext, useEffect, useState } from "react";
import { contextapi } from "./contextapi";
import {  useNavigate } from "react-router-dom";

function Cart() {
const[products,setProducts]=useState([])
const[message,setMessage]=useState("")
    const{cart,setCart}=useContext(contextapi)
    const Navigate=useNavigate()
let totalamount=0
    useEffect(()=>{
        if(!cart.items){
            return
        }
        fetch("/api/cartproducts",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ids:Object.keys(cart.items)})
        }).then((result)=>{return result.json()}).then((data)=>{
           //console.log(data)
           
           if(data.status===200){
            setProducts(data.apidata)
           }
           else{
            setMessage(data.message)
           }
           
        })
    }
    ,[cart.items])

    function hendlequantity(id){
        //console.log(cart)
        return cart.items[id]
    }

    function handleprice(id,price){
         let productprice=hendlequantity(id)*price
         totalamount+=productprice
         return productprice
    }
    function handleincrement(e,id){
        let currentquantity=hendlequantity(id)
         // console.log(currentquantity)
      
         let _cart={...cart}
         _cart.items[id]=currentquantity+1
         _cart.totalitems +=1
         setCart(_cart)
             
              
             
    }
    function handledecrement(e,id){
        
        let currentquantity=hendlequantity(id)
        if(currentquantity===1 ){
            return 
         }
         
        // console.log(currentquantity)
        let _cart={...cart}
        _cart.items[id]=currentquantity-1
        _cart.totalitems-=1
        setCart(_cart)
        }

        function handledelete(e,id){
            let currentqty=hendlequantity(id)
            let _cart={...cart}
            delete _cart.items[id]
            _cart.totalitems-=currentqty
                                        //const updateditems=Menu.filter((hello)=>{
                                                       //return hello.type===item

            setCart(_cart)
        
            Navigate("/products")


        }
            
        
        
    
    return ( <>
       {products.length?
        <section id="id">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                     <h2>{message}</h2>
                        <h2>cart summary</h2>
                        <table className="table table-hover">
                            <thead>
                              
                              <tr>
                                    <th>S.no</th>
                                    <th>product name</th>
                                    <th>product image</th>
                                    <th>product quantity</th>
                                    <th>product price</th>
                                    <th>delete</th>
                                </tr>
                                


                            </thead>
                            <tbody>
                            {products.map((result,key)=>( 
                            <tr key={result._id}>
                                   <td>{key+1}</td>
                                    <td>{result.name}</td>
                                    <td><img style={{width:"100px"}} src={`/images/${result.img}`} alt=""/></td>
                                    <td><button onClick={(e)=>{handleincrement(e,result._id)}}>+</button>{hendlequantity(result._id)}<button onClick={(e)=>{handledecrement(e,result._id)}}>-</button></td>      
                                    <td>{handleprice(result._id,result.price)}</td>
                                    <td><button onClick={(e)=>handledelete(e,result._id)}>delete</button></td>
                                </tr>))}
                        

                           <tr td colspan="7"><h4>Total amoutnt pay:{totalamount}</h4></tr>
                                 
                                
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>:<img src="empty_image.webp" alt=""/>}
        </>
     );
}

export default Cart;