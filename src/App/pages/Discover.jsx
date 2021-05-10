import React, { useEffect, useState } from 'react'
import ProviderCard from '../component/ProviderCard'
import axios from 'axios'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import '../../Assets/styles/css/discover.css'
import { HandleDiscoverEvents } from '../../Assets/script/js/Events/Discover';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import {useParams} from 'react-router-dom'
function Discover() {
    const {type} =useParams()
    const [Gigs,setGigs]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:4000/api/gig/show").then(res=>{
            
            setGigs( res.data.filter(data=>data.role==`${type}`))
          
        
        }).catch(err=>console.log(err))
    })
    useEffect(()=>{
        HandleDiscoverEvents()
    },[])
    return (
        <div className="Discover">

                <Header/>
               <div className="discover-body">
                    <div className="reel-container services-reel-container">
                        <ChevronLeftIcon className="left-arrow-icon service-left-arrow"/>
                            <div className="services-reel">
                            {
                                Gigs.map(gig=>(
                                    <ProviderCard title={gig.title} path="../../../uploads/" img={gig['images'][0]['image']}  id={gig._id} key={gig._id}/>
                                ))
                            }
                            
                        
                            </div>

                            <ChevronRightIcon className="right-arrow-icon service-right-arrow"/>
                    </div>
                    <form className="discover-gigs-area">
                   <div className="filter">
                       <h2>Filter</h2>
                       <div className="location">
                           <h3>location</h3>
                           <div className="checkbox-wrapper">
                               <label htmlFor="pakistan">Pakistan</label>
                               <input type="radio" name="country" id="pakistan" />
                           </div>
                           <div className="checkbox-wrapper">
                               <label htmlFor="Turkey">Turkey</label>
                               <input type="radio" name="country" id="Turkey" />
                           </div>
                           <div className="checkbox-wrapper">
                               <label htmlFor="Afganishtan">Afganishtan</label>
                               <input type="radio" name="country" id="Afganishtan" />
                           </div>
                       </div>
                   </div>
                   <div className="gig-container">
                       <div className="gigs-container-top">
                           <button>Best</button>
                           <button>Most Reviewed</button>
                           <button>High Price</button>
                           <button>Low Price</button>
                       </div>
                       <div className="gigs">
                       {
                                Gigs.map(gig=>(
                                    <ProviderCard title={gig.title} path="../../../uploads/" img={gig['images'][0]['image']}  id={gig._id} key={gig._id}/>
                                ))
                            }
                       </div>
                   </div>
               </form>
               </div>

             
               <Footer/>
        </div>
    )
}

export default Discover
