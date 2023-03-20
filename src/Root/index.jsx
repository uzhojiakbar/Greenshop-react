import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Navigations } from '../Utils/navigations'
import './style.css'
const Root = () => {
    return (
        <div className='main-root'>
            <Navbar />
            <Routes>
                
                {
                    Navigations.map((v) => {
                        return <Route path={v.path} element={v.element} />
                    })
                }
            </Routes>
        </div>
    )
}

export default Root