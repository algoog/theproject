import React from 'react'

function ProviderCard({user,title}) {
    return (
        <div className="ProviderCard">
            <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg" alt="" />
          <div className="bottom-area">
          <div className="presentation">
                <img src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg" alt="" />
                <p>Atif Asim</p>
            </div>
            <p className="description">
                {title}
            </p>
          </div>
        </div>
    )
}

export default ProviderCard
