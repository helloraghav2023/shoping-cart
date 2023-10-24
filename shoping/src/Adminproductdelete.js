import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Adminproductdelete() {
    
    const {id} =useParams()
    const navigate=useNavigate()
    const[message,setMessage]=useState("")
    fetch(`/api/singleproductdelete/${id}`).then((result)=>{return result.json()}).then((data)=>{
        if(data.staus===201){
            setMessage(data.message)
            navigate("/adminproducts")

        }
        else{
            setMessage(data.message)

        }
    })
    
    
    return ( 
     <><h4>{message}</h4></>
     );
}

export default Adminproductdelete;