import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> QuickDish App</p>
        <div className="app-download-platforms">
            <img className="play-store" src={assets.PlayStore} alt="" />
            <img className="app-store" src={assets.AppStore} alt="" />
           
        </div>
      
    </div>
  )
}

export default AppDownload
