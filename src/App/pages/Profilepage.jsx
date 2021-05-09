import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import '../../Assets/styles/css/profile.css'
import {Link,useHistory} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core'
import GigForm from '../component/GigForm'

import {AxiosInstance} from '../../Lib/Axios/axios'
function Profilepage() {
    const History=useHistory()
    const [providers,setProviders]=useState([])
    const [recceivers,setReceivers]=useState([])
    const [UserInfo,setUserInfo]=useState({})

    useEffect(()=>{
        let AuthToken=window.sessionStorage.getItem("Auth")
        
        AxiosInstance.get(`show/${window.sessionStorage.getItem("user_id")}/`,{
            headers: {
                Authorization: `Bearer ${AuthToken}`,
              }
        }).then(res=>{
            if(res.data['name']=="JsonWebTokenError"){
                History.push("/")
            }
            console.log(res.data)
            setUserInfo(res.data)
        }).catch(err=>console.log(err))


        AxiosInstance.get("gig/show/").then(res=>{
            let User=window.sessionStorage.getItem("user_id")
    

            setProviders( res.data.filter(data=>{
                if(data.role=="provider"&&data.user==User){
                    return 1
                }else{
                    return 0
                }
            }))


            setReceivers( res.data.filter(data=>{
             
                if(data.role=="receiver"&&data.user==User){
                    return 1
                }else{
                    return 0
                }
          
            }))
           
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
                        {UserInfo['description']}
                        </p>
                    </div>
                    <div className="presentation-wrapper">
                        <h3>Languages</h3>
                        <p>
                       {UserInfo['languages']}
                        </p>
                    </div>

                    <div className="presentation-wrapper">
                        <h3>Skills</h3>
                        <p>
                        {UserInfo['skills']}
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
                        <h2>Provider</h2>
                        <div className="providers-collection">
{
providers.map(Gig=>(



    <Link to={`/services/${Gig._id}`}>
        <div className="provider">
            <img src={`../uploads/${Gig['images']&&Gig['images'][0]['image']}`} alt=""/>
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
                <h2>Reveiver</h2>
                        <div className="reveivers-collection">
                        {
recceivers.map(Gig=>(
// const [providers,setProviders]=useState([])


    <Link to={`/services/${Gig._id}`}>
        <div className="provider">
            <img src={`../uploads/${Gig['images']&&Gig['images'][0]['image']}`} alt=""/>
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
