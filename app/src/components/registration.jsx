import '../App.css';
 import photo1 from  '../photos/1.svg';
 import photo2 from  '../photos/3.svg';
 import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
 import axios from 'axios';
 import Main from './main'

  const  Registration = () =>{
    
    const navig = useNavigate();
    
    
     const [state , setSate] = useState(false);
     const change = () =>{
       setSate(!state);
    }
    
    function redir(tok) {
       if (tok){
       alert("Logged in")
       navig('/main');
       
       }
       else{throw new Error("Wrong data")}//{alert("wrong password or email")}
     
      }
       
    
    async function  verify_token(token) {
    let flag = false;
      try {
       const user = axios.post('https://backend-3-4sig.onrender.com/token', {'token':token});
       flag =  await user.then(value => value.data)
       
       }
       
       catch (error) {
        console.error('no token'/* , error.response.data */);
        }
       console.log("flag :",flag);
       if (flag == true){
       return  1;
       
       }
       else {return  0}
   
   }
    
    
      
    
    const [formData1, setFormData1] = useState({
       login: '',    
       password: '',
    });
    
    
    
    let tok; //if tok == 1 => logged in
    
    const handleChange1 = (e) => {
      setFormData1({ ...formData1, [e.target.name]: e.target.value });
      
    }
     let token = '';
    const handleSubmit1 = async (e1) => {
       e1.preventDefault();
      
   
   
    try {
       const response = axios.post('https://backend-3-4sig.onrender.com/doctor/login', formData1);
       token = await  response.then(value => value.data.access_token);
       localStorage.setItem('token', token);
       
       
       const token1 = localStorage.getItem('token');
      // console.log("token : ", token);
       tok =  await verify_token(token1);
  
     
       //console.log(tok);
       
       
}
 catch (error) {
        console.error('Login failed'/* , error.response.data */);
        }
        redir(tok);
    };
     
     
        
       
  
    
       

    
        
    
    const [formData, setFormData] = useState({
       name: '',
       login: '',
       password: '',
    });
  
     const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
     };
  
     const handleSubmit = async (e) => {
       e.preventDefault();
        
   
        const response = axios.post('https://backend-3-4sig.onrender.com/add_doc', formData);
        let message = await  response.then(value => value.data.message);
        console.log(message)
        if (message == 'User registered successfully'){
        console.log('Registration successful',/*  response.data */);
    	window.location.reload();
       }
       else{throw new Error(message)}

       
       
    };
    
    
      
 console.log(formData.name, formData1.login);
 

 return(
        <>
        <div className={`container ${state ? 'sign-up-mode' : ''}`}>
         
         <div className="forms-container">
           <div className="signin-signup">
             <form action="#" className="sign-in-form" onSubmit={handleSubmit1} >
               <h2 className="title">Sign in</h2>
               <div className="input-field">
                 <i className="fas fa-user"></i>
               
		 <input type="text"
            placeholder="Username"
            name="login"
            value={formData1.login}
             onChange={handleChange1}
             required/>
               </div>
               
               <div className="input-field">
                 <i className="fas fa-lock"></i>
                
                 <input type="password"
            placeholder="password"
            name="password"
            value={formData1.password}
             onChange={handleChange1}
             required/>
                 
               </div>
             <button  type="submit" className="btn" >   Log in   </button>
             </form>
             
           
             
             <form action="#" class="sign-up-form" onSubmit={handleSubmit}>
               <h2 className="title">Sign up</h2>
               <div className="input-field">
                 <i className="fas fa-user"></i>
                 <input type="text"
            placeholder="Full name"
            name="name"
            value={formData.name}
             onChange={handleChange}
             required/>
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input             type="email"
             placeholder="Email"
             name="login"
             value={formData.login}
             onChange={handleChange}
             required/>
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input  type="password"
             placeholder="Password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required/>
                </div>
                <button  type="submit" className="btn" >   Sign up   </button>
                
              
              </form>
               
            </div>
          </div>
   
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content2">
                <h3>You have never registered here?</h3>
                <p>
    So just registrate here to use our application!
                </p>
              
                <button onClick = {change} className="btn transparent" id="sign-up-btn">
                 Sign up
                </button>
              </div>
             <img src={photo1}  class="image" alt="" />
            </div>
           <div className="panel right-panel">
              <div className="content2">
                <h3>If you have accaunt?</h3>
               <p>
   So just write your password and email!
               </p>
                <button onClick = {change} className="btn transparent" id="sign-in-btn">
                Sign in
               </button>
             </div>
             <img src={photo2} className="image" alt="" />
           </div>
          </div>
        </div>
        </>
     )
     
     
     
}

 export default Registration;

/* import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/register', formData);
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed');
    }
  };

  return (
    <div> 
      <form onSubmit={handleSubmit}>   
        <input 
          type="text"
          placeholder="Имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /> 
        <input 
          type="email"
          placeholder="Почта"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /> 
        <input 
          type="password"
          placeholder="Пароль"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        /> 
        <button type="submit"> Регистрация </button>
      </form>
    </div>
  );
};

export default Registration; */
