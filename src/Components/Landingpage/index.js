import React from 'react'
import AimScreen from './components/AimScreen'
import Header from './components/Header'
import './_landingpage.scss'
const ladningpage = () => {
    return (
        <div className='lpBG'>
            <Header />
            <AimScreen/>
        </div>
    )
}

export default ladningpage