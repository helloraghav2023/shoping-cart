import { useState } from "react";

function Registration() {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[message,setmessage]=useState("")

      function handleform(e){
        
        e.preventDefault()
        //console.log(username,password)
        const formdata={username,password}
        fetch("/api/reg",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }
       ).then((result)=>{return result.json()}).then((data)=>{
         console.log(data)
         if(data.status===201){
            setmessage(data.message)
         }else{
            setmessage(data.message)
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
                       
                        <h2>signup!!!</h2>
                        

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
                       
                        <button type="submit"className="form-control btn btn-success mt-2">Register</button>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>

    
     );
}

export default Registration;