import React from 'react'
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
function Main() {
    return (
        <div className="Main">
            <Header/>
            <div className="hero">
                <div className="hero-content">
                    <h1>The pigeon</h1>
                    <form>
                        <input type="text" placeholder="Search"/>
                        <div className="search-button-wrapper">
                            <input type="submit" value="Search" />
                            <input type="submit" value="Drive Now" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="companies-wrapper">
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
                </div>
            </div>


            <div className="discover-wrapper">
                <h1>Services</h1>
                <div className="services-reel">
                    
                        <ProviderCard/>
                        <ProviderCard/>
                        <ProviderCard/>
                        <ProviderCard/>
                        <ProviderCard/>
                    
                </div>

                <h1>Popular</h1>

                <div className="popular-reel">
                    
                    <ProviderCard/>
                    <ProviderCard/>
                    <ProviderCard/>
                    <ProviderCard/>
                    <ProviderCard/>
                
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


            {/* <div className="main-find-us-section">

            </div> */}
            <Footer/>
        </div>
    )
}

export default Main
