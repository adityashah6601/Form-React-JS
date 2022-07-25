import React,{ useState } from "react"

const Signup = ()=> {
    const[email, setEmail]=useState()
    const[password, setPassword]=useState()
    const[Username, setUsername]=useState()
    const[confirmpassword, setconfirmpassword]=useState()
    
  const onchangeEmail = (event)=>{
    setEmail(event.target.value)
  }

  const onchangePassword = (event)=>{
    setPassword(event.target.value)
 
}

const onchangeUsername = (event)=>{
    setUsername(event.target.value)
 
}

const onchangeconfirmpassword = (event)=>{
    setconfirmpassword(event.target.value)
 
}
  return (
    <div>
        <h1>Signup Page</h1>
        <form>
    <div className="orm-group">
    <label for="exampleInputUsername">Username</label>
      <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="UsernameHelp" placeholder="Enter Username" value=
      {Username} onChange={onchangeUsername}/>
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value=
      {email} onChange={onchangeEmail}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value= {password} onChange={onchangePassword}/>
      <label for="exampleInputconfirmPassword1">Confirm Password</label>
      <input type="confirmpassword" className="form-control" id="exampleInputconfirmpassword" placeholder="Confirm Password" value= {confirmpassword} onChange={onchangeconfirmpassword}/>
    </div>
    {/* <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div> */}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Signup