import React from 'react'
import Navbar from '../Components/Navbar'
import Shop from '../Components/Shop'
import './style.css'
const Root = () => {
    return (
        <div className='main-root'>
            <Navbar/>
            <Shop/>
        </div>
    )
}

export default Root