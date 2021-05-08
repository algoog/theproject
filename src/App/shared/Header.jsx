import React from 'react'
import '../../Assets/styles/css/shared.css'
import Logo from '../../Assets/img/logo.png'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="Header">
            <div className="header-content">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <nav>
                <Link>
                <li>
                    
                    Discover
                </li>
                </Link>
                <Link>
                <li>
                    
                Faq
                </li>
                </Link>
                <Link>
                <li>
                    
                Why
                </li>
                </Link>
                <Link className="auth-button"to="/auth/login">
                <li>
                    
                Sign in
                </li>
                </Link>
                <Link  className="auth-button auth-button-outline"to="/auth/register">
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
