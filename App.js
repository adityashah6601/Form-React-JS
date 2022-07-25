
import './App.css';
import React from "react"
 import {Routes ,Route} from 'react-router-dom';
import Form from './components/Form';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
// import UserList from './components/UserList';
function App() {
  return (
    <div>
    {/* <Form/> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <UserList/> */} 
     <Home/> 
   <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/" element={<Signup/>}/>
    </Routes> 
    </div>
  );
}
export default App