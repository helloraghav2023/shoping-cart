import { useState } from "react";
import Left from "./Left";

function Adminaddproduct() {
const[name,setName]=useState("")
const[desc,setDesc]=useState("")
const[price,setPrice]=useState("")
const[quantity,setQuantity]=useState("")
const[img,setImg]=useState("")
const[message,setMessage]=useState("")

function handleimage(e){
    setImg(e.target.files[0])
    
}

function handleform(e){

    e.preventDefault()
    //console.log(name,desc,price,quantity,img)
    let data=new FormData()
    data.append("file",img)
    data.append("name",name)
    data.append("desc",desc)
    data.append("price",price)
    data.append("quantity",quantity)

    fetch("/api/productadd",{
        method:"POST",
        body:data
    }).then((result)=>{return result.json()}).then((data)=>{
        //console.log(data)
        if(data.status===201){
            setMessage(data.message)

        }
        else{
            setMessage(data.message)

        }
    })

}

    return ( 
        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9"><h2>Add product here</h2>
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
                        onChange={(e)=>{handleimage(e)}}/>
                        <br></br>
                        <label>product quantity</label>
                        <input type="text" className="form-control"
                        value={quantity}
                        onChange={(e)=>{setQuantity(e.target.value)}}/>
                        <button type="submit" className="btn btn-warning form-control mt-2">Add product</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Adminaddproduct;