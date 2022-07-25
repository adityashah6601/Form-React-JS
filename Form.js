import React,{ useState } from "react"
import "/../React/my-second-app/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Form=() =>{
    
    const[email, setEmail]=useState()
    const[password, setPassword]=useState()

    const onchangeEmail =(event)=>{
  setEmail(event.target.value)
  console.log(email)
    }

    const onchangePassword = (event)=>{
    setPassword(event.target.value)
 
}
return (
    <div>
        <form>
    <div className="orm-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value=
      {email} onChange={onchangeEmail}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value= {password} onChange={onchangePassword}/>
    </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
   </div>

)
}
export default Form