import React,{useState} from "react";

import "../../Assets/styles/css/login.css";
import "../../Assets/styles/css/login-select.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useParams ,useHistory} from "react-router-dom";
import {
  AxiosInstance
} from '../../Lib/Axios/axios'

function Login({ img, title, desc, mainheading }) {
  const {type}=useParams()
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [AuthToken,setAuthToken]=useState("")
  const [Error,setError]=useState(null)
  const History=useHistory()

  const HandleLogin=async e=>{
    e.preventDefault()
    let UserData={
      email:Email,
      password:Password,
    }
    await AxiosInstance.post(`/login`,UserData).then(res=>{
      console.log(res)
      console.log(res.data)
      if(res.data['error']){
    
        setError(res.data['error'])
      
    }else if (res.data['error']){
      setError(res.data['error'])

    }else{
       setError(null)
       setAuthToken(res.data['token'])
      window.sessionStorage.setItem("Auth",res.data['token'])
      console.log(res.data)
      History.push("/")
    }
      
      
      
    }).catch(err=>{
      setError(err.message)
    })
  }
  return (
    <div className="LoginSelect Login">
  
      <div className="login-selection-section">
        <div className="login-selection-section-top">
          
            <img src={img} />
         
          

          <Link to="/" className="close-login-selection-icon">
            <CloseIcon />
          </Link>
        </div>
        
{/* {type} */}
        <div className="login-form">
          
          <form className="login-form-pure">
            <div className="input-wrapper">
              <label htmlFor="login-email-pure">Email Addres</label>
              <input
                type="email"
                id="login-email-pure"
                placeholder="Type your email address"
                onChange={e=>setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper password-input-wrapper">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="Type your email address"
                onChange={e=>setPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="login-submit-button"
              onClick={HandleLogin}
            />
{Error!=null&&(
  
  <div className="error-message">
  <p>{Error}</p>
</div>
)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
