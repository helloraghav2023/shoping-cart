import { useContext, useState } from "react";   
import {useNavigate} from "react-router-dom";
import { contextapi } from "./contextapi";


function Login() {
    const{setLoginname}=useContext(contextapi)
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")
    
    
    const navigate=useNavigate()
   

    function handleform(e){
        
        e.preventDefault()
        //console.log(username,password)
        const data={username,password}
        fetch("/api/logincheck",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((result)=>{return result.json()}).then((data)=>{
            console.log(data)
            if(data.status===200){
                window.localStorage.setItem("loginname",data.apiData.username)
                setLoginname(window.localStorage.getItem("loginname"))
                if(data.apiData.username==="admin"){
                    navigate("/dashboard")
                    
                }else{
                    navigate("/products")
                }
            }else{
                setMessage(data.message)
                
            }

        })

        
    }


    return (  
        <section id="reg">
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form onSubmit={(e)=>{handleform(e)}}>
    
                   {message}
                    <h2>login!!!</h2>
                    

                    <label>Username</label>
                    <input type="text" className="form-control"
                     value={username}
                     onChange={(e)=>{setUsername(e.target.value)}}
                    />
                   

                    <label>Password</label>
                    <input type="text" className="form-control"
                     value={password}
                     onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                   
                    <button type="submit"className="form-control btn btn-success mt-2">login</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </section>
    );
}

export default Login;