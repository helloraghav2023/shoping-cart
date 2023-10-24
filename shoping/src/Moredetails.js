import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Moredetails() {
   
   const[desc,setDesc]=useState("")
   const[img,setImg]=useState("")
    const{id}=useParams()
    useEffect(()=>{fetch(`/api/moredetailssingleproducts/${id}`).then((result)=>{return result.json()}).then((data)=>{
        console.log(data)
        if(data.status===201){
            setDesc(data.apidata.desc)
            setImg(data.apidata.img)
            console.log(data.apidata.desc)
        }
    })},[])
    
         
    
    
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div style={{textAlign:"center"}} className="col-md-12">
           <img style={{width:"600px" }} src={`/images/${img}`} alt=""/>

                    <h2 >Details</h2 >{desc}
                    </div>
            </div>
        </div>
        </>
     );
}

export default Moredetails;