import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import GigProfilePic from '../../Assets/img/profile-pic.png'
import Tournament from '../../Assets/img/Tournaments.png'
import '../../Assets/styles/css/gig.css'
import {Link,useParams} from 'react-router-dom'
import Footer from '../shared/Footer'
import { GigEvents } from '../../Assets/script/js/Events/gigs';
import {AxiosInstance} from '../../Lib/Axios/axios'
function Gig() {
    const {id}=useParams()
    const [gigData,setGigData]=useState({})
    useEffect(() => {
        GigEvents()
        
        AxiosInstance.get(`/gig/show/${id}`).then(res=>{
            setGigData(res.data)
          
        
        }).catch(err=>console.log(err))
    }, [])
    return (
        <div className="Gig">
            <Header/>

            <div className="gig-body">
               <div className="profile-area">
                <Link className="profile-link">
                    <img src={GigProfilePic} alt=""/>
                    <p>Atif Asim</p>
                </Link>
               
               </div>

            
               <p className="gig-title">
                    {gigData['title']}
                </p>

               <div className="profile-slider">
                <span className="profile-siider-front-shade"></span>
               <div className="back-arrow-wrapper">
               <ArrowBackIosIcon className="back-arrow"/>
               </div>
               <div className="forward-arrow-wrapper">
               <ArrowForwardIosIcon className="forward-arrow"/>
               </div>
                   <div className="slider-reel">
                 
                       <img src={`../../uploads/${gigData['images']&&gigData['images'][0]['image']}`} alt=""/>
                   </div>  
               </div>
               <div className="images-container">
                       <div className="images-container-reel">
                       <img src={`../../uploads/${gigData['images']&&gigData['images'][0]['image']}`} alt=""/>
                       </div>
                </div>


                <p className="description">
                    {gigData['description']}
                </p>

                <Link className="gig-contact-button">
                    Contact Me
                </Link>


                <div className="comments-container">
                    <h1>Comments</h1>
                    <div className="comments-wrapper">
                        <div className="comment">
                            <img src={GigProfilePic} alt=""/>
                            <div className="comment-presentation">
                                <p className="name">Atif Asim</p>
                                <p className="pure-cooment">He is amazing he did well</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



<div className="gig-footer-container">
<Footer/>
</div>
        </div>
    )
}

export default Gig
