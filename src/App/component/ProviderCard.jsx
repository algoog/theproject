import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom'
function ProviderCard({ user, title,path,img,id }) {
  return (
   <Link to={`/services/${id}`}>
       <div className="ProviderCard">
      <img
            src={`${path}${img}`}
            alt=""
        />
      <div className="bottom-area">
        <div className="presentation">
     
          <img
            src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
            alt=""
          />
          <p>Atif Asim</p>
        </div>
        <p className="description">{title}</p>
      </div>
    </div>
   </Link>
  );
}

export default ProviderCard;
