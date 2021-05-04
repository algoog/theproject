import React, { useEffect } from 'react'
import Header from '../shared/Header'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import GigProfilePic from '../../Assets/img/profile-pic.png'
import Tournament from '../../Assets/img/Tournaments.png'
import '../../Assets/styles/css/gig.css'
import {Link} from 'react-router-dom'
import Footer from '../shared/Footer'
import { GigEvents } from '../../Assets/script/js/Events/gigs';
function Gig() {
    useEffect(() => {
        GigEvents()
        // fetch("")
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

               <div className="profile-slider">
                <span className="profile-siider-front-shade"></span>
               <div className="back-arrow-wrapper">
               <ArrowBackIosIcon className="back-arrow"/>
               </div>
               <div className="forward-arrow-wrapper">
               <ArrowForwardIosIcon className="forward-arrow"/>
               </div>
                   <div className="slider-reel">
                       <img src="https://cdn.pixabay.com/photo/2020/08/17/13/24/flower-5495384_960_720.jpg" alt=""/>
                   </div>  
               </div>
               <div className="images-container">
                       <div className="images-container-reel">
                                <img src="https://cdn.pixabay.com/photo/2020/08/17/13/24/flower-5495384_960_720.jpg" alt=""/>
                       </div>
                </div>


                <p className="description">
                    
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, unde! Corporis sint adipisci minima voluptatibus natus fugit, quo, ex qui officia architecto harum dolorum odio vero in autem, sed enim. Ipsam, odit vitae, itaque fuga culpa harum rem velit voluptate consequuntur placeat inventore officiis sunt dolore iure, corrupti ullam similique ad! Voluptates repellendus totam ratione corporis facere debitis explicabo molestiae laborum quaerat. Fugiat expedita quaerat, delectus ullam tenetur error provident, corrupti, natus architecto eum magni saepe laudantium! Facilis blanditiis, laboriosam accusamus amet veniam ab provident at vitae co
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
