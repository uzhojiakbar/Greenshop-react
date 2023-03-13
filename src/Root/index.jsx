import React from 'react'
import Navbar from '../Components/Navbar'
import ShopingCard from '../Components/ShopingCard'
import './style.css'
const Root = () => {
    return (
        <div className='main-root'>
            <Navbar/>
            <ShopingCard/>
        </div>
    )
}

export default Root