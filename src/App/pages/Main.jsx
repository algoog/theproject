import React, { useEffect,useState } from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import '../../Assets/styles/css/main.css'
import Client1 from '../../Assets/img/svg/client-1.svg'
import Client2 from '../../Assets/img/svg/client-2.svg'
import Client3 from '../../Assets/img/svg/client-4.svg'
import Client4 from '../../Assets/img/svg/client-5.svg'
import Client5 from '../../Assets/img/svg/client-6.svg'
import ProviderCard from '../component/ProviderCard'
import Comment from '../component/Comment'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { HandleHomeEvents } from '../../Assets/script/js/Events/Main'
import SearchIcon from '@material-ui/icons/Search';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import {AxiosInstance} from '../../Lib/Axios/axios'

import {Link} from 'react-router-dom'
function Main() {
    const [Gigs,setGigs]=useState([])
    const [providers,setProviders]=useState([])
    const [recceivers,setReceivers]=useState([])

    useEffect(()=>{
        AxiosInstance.get("gig/show").then(res=>{
            setGigs(res.data)
            setProviders( res.data.filter(data=>data.role=="provider"))
            setReceivers( res.data.filter(data=>data.role=="receiver"))
        
        }).catch(err=>console.log(err))
    },[])


    useEffect(()=>{
        HandleHomeEvents()
    },[])
    return (
        <div className="Main">
            <Header/>
            <div className="hero">
                <div className="hero-content">
                   
                    <h1>search with pigeon</h1>
                    <form>
                       <div className="search-wrapper">
                       <SearchIcon/>
                       <input type="text" placeholder="Search"/>
                       </div>
                        <div className="search-button-wrapper">
                            <input type="submit" value="Search" />
                            <input type="submit" value="Drive Now" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="companies-wrapper">
                <div className="reel-container">
                <ChevronLeftIcon className="left-arrow-icon companies-left-arrow"/>
                <div className="companies-reel">
                    <div class="image-wrapper">
                        <img src={
                            Client1
                        } alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client2} alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client3} alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client4} alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client5} alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client2} alt=""/>
                    </div>
                    <div class="image-wrapper">
                        <img src={Client3} alt=""/>
                    </div>
                </div>
                <ChevronRightIcon className="right-arrow-icon companies-right-arrow"/>
                </div>
              
            </div>


            <div className="discover-wrapper">
           

                <h1>Services</h1>
               <div className="reel-container services-reel-container">
                   <ChevronLeftIcon className="left-arrow-icon service-left-arrow"/>
                    <div className="services-reel">
                    {
                        Gigs.map(gig=>(
                            <ProviderCard title={gig.title} path="./uploads/" img={gig['images'][0]['image']}  id={gig._id} key={gig._id}/>
                        ))
                    }
                    
                
                     </div>

                     <ChevronRightIcon className="right-arrow-icon service-right-arrow"/>
               </div>

                <h1>Popular</h1>

                <div className="reel-container popular-reel-container">
                <ChevronLeftIcon className="left-arrow-icon provider-left-arrow"/>

               
                <div className="popular-reel">
                {
                        Gigs.map(gig=>(
<ProviderCard title={gig.title} path="./uploads/" img={gig['images'][0]['image']} id={gig._id} key={gig._id}/>
                        ))
                    }
                   
                
            </div>
            <ChevronRightIcon className="right-arrow-icon provider-right-arrow"/>
            </div>
            </div>

            <div className="how-to-use">
                <h1>How to Use</h1>
                <ul>
                    <li>
                        First you should register as a user and login
                    </li>
                    <li>
                        After Login you can create provide gig or receiver gig
                    </li>
                    <li>
                        Provider Provide Service like front end service
                    </li>
                    <li>
                        Reveicer Receive Service from Provider
                    </li>
                </ul>  
            </div>
            <div className="news-wrapper">
                <h1>News</h1>
              <div className="reel-container">
              <ChevronLeftIcon className="left-arrow-icon news-left-arrow"/>
  
              <div className="news-reel">
                    <div className="news">
                        <img src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" alt="" />
                        <div className="presentation">
                            <h1>What is news</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus cum culpa, tempora fugit, odit placeat ipsum pariatur nisi eligendi quos quaerat id, ratione deleniti corporis delectus animi doloribus ipsa.</p>
                        </div>
                    </div>

                    <div className="news">
                        <img src="https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg" alt="" />
                        <div className="presentation">
                            <h1>What is news</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus cum culpa, tempora fugit, odit placeat ipsum pariatur nisi eligendi quos quaerat id, ratione deleniti corporis delectus animi doloribus ipsa.</p>
                        </div>
                    </div>

                </div>

                <ChevronRightIcon className="right-arrow-icon news-right-arrow"/>
              </div>
            </div>

            <div className="main-page-comments-wrapper">
                <h1>Comments</h1>
                <div className="comment-reel">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>


           <div className="main-find-us-container">
               <h1>Find us now</h1>
           <div className="main-find-us-section">
                <Link className="AppleLink">
                <AppleIcon/>
                App Store
                  

                </Link> 
                <Link className="PlayStoreLink">
                    <ShopIcon/>
                
                    Play Store
                </Link>
            </div>
           </div>
            <Footer/>
        </div>
    )
}

export default Main
