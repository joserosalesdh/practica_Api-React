import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        //Voy a hacer esto una flexbox y voy a centrar todo con la clase center
        <header className="center">
            <img src={logo} alt="" />
        </header>
    )
}

export default Header
