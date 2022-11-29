import React from 'react';
import './Header.css';
import Logo from  "./Nlogo.png"

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://i.pinimg.com/564x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg" alt="usuário"/>
                </a>
            </div>
        </header>
    );
}