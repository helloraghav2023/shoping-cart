import { useParams } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";


function Adminproductupdate() {
    const[name,setName]=useState("")
    const[desc,setDesc]=useState("")
    const[price,setPrice]=useState("")
    const[quantity,setQuantity]=useState("")
    const[message,setMessage]=useState("")
    const[status,setStatus]=useState("")
const[image,setImage]=useState("")

function handleimage(e){
    setImage(e.target.files[0])
    
    }


const{id}=useParams()
    useEffect(()=>{
    fetch(`/api/singleproduct/${id}`).then((result)=>{return result.json()}).then((data)=>{
    console.log(data)
    if(data.status===200){
        setName(data.apidata.name)
        setDesc(data.apidata.desc)
        setPrice(data.apidata.price)
        setQuantity(data.apidata.quantity)
        setStatus(data.apidata.status)
    }
    else{
        setMessage(data.message)
    }
})
},[id])

function handleform(e){
    e.preventDefault()
    let data= new FormData()
    data.append("name",name)
    data.append("desc",desc)
    data.append("price",price)
    data.append("file",image)
    data.append("status",status)
    data.append("quantity",quantity)
    console.log(name,desc,price,quantity,image,status)
   
    
   // useEffect(()=>{
    fetch(`/api/productupdate/${id}`,{
        method:"PUT",
        body:(data)
    })
        .then((result)=>{return result.json()}).then((data)=>{
        //console.log(data)
        if(data.status===200){
            setMessage(data.message)
        }else{
            setMessage(data.message)
        }
          })

//},[])
}

    return (  <>
        <section id="mid">
        <div className="container">
            <div className="row">
                <Left/>
                <div className="col-md-9"><h2>product update </h2>
             {message}
                <form onSubmit={(e)=>{handleform(e)}}>
                    <label>product name</label>
                    <input type="text" className="form-control"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}/>
                    <label>product desc</label>
                    <input type="text" className="form-control"
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}/>
                    <label>product price</label>
                    <input type="text" className="form-control"
                   value={price} 
                   onChange={(e)=>{setPrice(e.target.value)}}/>
                    <label>product image</label>
                    <input type="file"
                    onChange={(e)=>{handleimage(e)}}
                   />
                    <br></br>
                    <label>product quantity</label>
                    <input type="text" className="form-control"
                    value={quantity}
                    onChange={(e)=>{setQuantity(e.target.value)}}/>
                    <label>product status</label>
                    <select value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}>
                        <option value="IN-STOCK">IN-STOCK</option>
                        <option value="OUT-STOCK">OUT-STOCK</option>
                    </select>
                    <button type="submit" className="btn btn-warning form-control mt-2">update</button>
                </form>
                </div>
            </div>
        </div>
    </section>
    </>
    );
    }
    
export default Adminproductupdate;