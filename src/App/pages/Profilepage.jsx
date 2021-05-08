import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import '../../Assets/styles/css/profile.css'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core'
import GigForm from '../component/GigForm'
import axios from 'axios'
function Profilepage() {
    const [Gigs,setGigs]=useState([])
    const [providers,setProviders]=useState([])
    const [recceivers,setReceivers]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/api/gig/show").then(res=>{
            setGigs(res.data)
            setProviders( res.data.filter(data=>data.role=="provider"))
            setReceivers( res.data.filter(data=>data.role=="receiver"))
            console.log(res.data)
        }).catch(err=>console.log(err))
    },[])

    return (
        
        <div className="Profilepage">
            <Header/>
            <GigForm/>
            <div className="profile-container">
                <div className="profile-pic">
                    <p>AT</p>
                </div>
                <div className="about-profile">
                    <div className="presentation-wrapper">
                        <h3>Joined</h3>
                        <p>2 May 2030</p>
                    </div>

                    <div className="presentation-wrapper">
                        <h3>Description</h3>
                        <p>
                        Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML.
                        </p>
                    </div>
                    <div className="presentation-wrapper">
                        <h3>Languages</h3>
                        <p>
                       I know English And Urdu
                        </p>
                    </div>

                    <div className="presentation-wrapper">
                        <h3>Skills</h3>
                        <p>
                            I know HTML, CSS and JAVASCRIPT
                        </p>
                    </div>

                    <div className="presentation-wrapper">
                        <h3>Education</h3>
                        <p>
                            Goverment School Pakistan
                        </p>
                    </div>


                    <div className="presentation-wrapper">
                        <h3>Certification</h3>
                        <p>
                            Empty
                        </p>
                    </div>


                    
                </div>
                <div className="provider-area">
                        <h2>Provide</h2>
                        <div className="providers-collection">
{
providers.map(Gig=>(



    <Link to="/">
        <div className="provider">
            <img src="https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_960_720.jpg" alt=""/>
            <h3>{Gig.title}</h3>
          </div>    
    </Link>

))

}
 
 
                        </div>
                     
                        <div className="button-wrapper">
                        <IconButton onClick={e=>{
                            document.querySelector(".GigForm").style.display="block"
                        }}>
                            <AddIcon/>
                         </IconButton>
                        
                        </div>
                </div>
                <div className="receive-area">
                <h2>Reveive</h2>
                        <div className="reveivers-collection">
                        {
recceivers.map(Gig=>(
// const [providers,setProviders]=useState([])


    <Link to="/">
        <div className="provider">
            <img src="https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_960_720.jpg" alt=""/>
            <h3>{Gig.title}</h3>
          </div>    
    </Link>

))

}
                        </div>
                      
                        <div className="button-wrapper">
                        <IconButton onClick={e=>{
                            document.querySelector(".GigForm").style.display="block"
                        }}>
                            <AddIcon/>
                         </IconButton>
                        
                        </div>
                </div>
            </div>
            <div className="gig-footer-container">
                <Footer/>
            </div>
        </div>
    )
}

export default Profilepage
