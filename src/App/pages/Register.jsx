import React,{useState} from "react";
import "../../Assets/styles/css/register.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import {AxiosInstance} from '../../../assets/script/js/axios/BaseAxios'
// import {HandleMessages} from '../../../assets/script/js/Events/Auth/Register/Register'
import {useParams} from 'react-router-dom'
function Register() {
  const {type}=useParams()
  
  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [description,setdescription]=useState("")
  const [language,setlanguage]=useState("")
  const [skills,setskills]=useState("")
  const [error,setError]=useState("")
  const HandleRegistration=async e=>{

    


    // HandleMessages  (
    //   ".SuccessMessage",
    //   ".ErrorMessage",
    //   "none",
    //   "none"
    // )


    e.preventDefault()
    let UserData={
      firstname:FirstName,
      lastname:LastName,
      email:Email,
      password:Password,
      description:description,
    }
    

    // await AxiosInstance.post(`/${type}/auth/register`,UserData)
    // .then(res=>{
    //   console.log(res.data)
    
    //   if(res.data['details']){
    
    //     setError(res.data['details'][0].message)
    //     HandleMessages  (
    //         ".SuccessMessage",
    //         ".ErrorMessage",
    //         "none",
    //         "block"
    //       )
    // }else{
    //     HandleMessages  (
    //         ".SuccessMessage",
    //         ".ErrorMessage",
    //         "block",
    //         "none"
    //       )
    // }
    // })
    // .catch(err=>{
    //   console.log(err)

    //   setError(err.message)

    //   HandleMessages  (
    //     ".SuccessMessage",
    //     ".ErrorMessage",
    //     "none",
    //     "block"
    //   )
    // });
  }
  return (
    <div className="CommonRegister">
      {/* <img src={Logo} alt="logo" /> */}
      <div className="register-form-common">
        <div className="top">
          <Link to="/" class="register-back-icon">
            <ArrowBackIcon />
          </Link>
          <h4>Sign up</h4>
          <Link to="/auth/login" className="register-login-button">
            Log in
          </Link>
        </div>
        <form className="common-registration-form">
          <div className="input-wrapper">
            <label>first name</label>
            <input type="text" onChange={e=>setFirstName(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label>last name</label>
            <input type="text" onChange={e=>setLastName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>EMAIL ADDRESS</label>
            <input type="email" onChange={e=>setEmail(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>Skills</label>
            <input type="text" onChange={e=>setskills(e.target.value)} />
          </div>
          

          <div className="input-wrapper">
            <label>language</label>
            <input type="text" onChange={e=>setlanguage(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>CREATE A PASSWORD</label>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>Description</label>
            <textarea name="" id="" cols="30" rows="10" onChange={e=>setdescription(e.target.value)}></textarea>
            
          </div>

          <input type="submit" value="sign up" onClick={HandleRegistration}/>


          <div className="SuccessMessage" style={{display:"none"}}>
            <p>Wow! {FirstName} {LastName} you have registered</p>
          </div>

          <div className="ErrorMessage"style={{display:"none"}}>
            <p>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
