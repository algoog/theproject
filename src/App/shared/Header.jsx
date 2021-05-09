import React, { useEffect } from 'react'
import '../../Assets/styles/css/shared.css'
import Logo from '../../Assets/img/logo.png'
import {Link} from 'react-router-dom'
import { AxiosInstance } from '../../Lib/Axios/axios'


function Header() {
useEffect(()=>{
    

    let AuthToken = window.sessionStorage.getItem("Auth");

    AxiosInstance.get(`show/${window.sessionStorage.getItem("user_id")}/`, {
      headers: {
        Authorization: `Bearer ${AuthToken}`,
      },
    })
      .then((res) => {
        if (res.data["name"] == "JsonWebTokenError") {
            document.querySelectorAll(".auth-button").forEach((Each) => {
                Each.style.display = "block";
              });

        } else {
          document.querySelectorAll(".auth-button").forEach((Each) => {
            Each.style.display = "none";
          });

          document.querySelector(".profile-button").style.display = "block";
          
          
        }
      })
      .catch((err) => console.log(err));

      
},[])
    return (
        <div className="Header">
            <div className="header-content">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <nav>
                <Link>
                <li>
                
                    
                    <p onClick={e=>document.querySelector(".discover-drop-down").classList.toggle("active-drop-down")}>Discover</p>
                    
                    <ul className="discover-drop-down">
                        <Link to="/discover/service/provider">
                        
                            <li>
                            Provider
                            </li>
                        </Link>
                        <Link to="/discover/service/receiver">
                        
                            <li>
                            Receiver 
                            </li>
                        </Link>
                    </ul>
                </li>
                </Link>
                <Link>
                <li>
                    
                Faq
                </li>
                </Link>
                <Link>
                <li>
                    
                Navigator
                </li>
                </Link>
                <Link>
                <li>
                    
                Why
                </li>
                </Link>

                <Link className="profile-button" to="/Profile" style={{display:"none"}}>
                <li>
                    
                Profile
                </li>
                </Link>


                <Link className="auth-button"to="/auth/login"  style={{display:"none"}}>
                <li>
                    
                Sign in
                </li>
                </Link>
                <Link  className="auth-button auth-button-outline"to="/auth/register"  style={{display:"none"}}>
                <li>
                    
                Join
                </li>
                </Link>
                
                
            </nav>
            </div>
        </div>
    )
}

export default Header
