import React from 'react';

import './styles.css';

import logo from '../../assests/logo.svg';
import padlock from '../../assests/padlock.png';

export default function Login() {
    return (
        <div className="global-container">
            <section className="form">
                <img src={logo} alt="Login"/>
                <form action="">
                    <h1>Acess your Account</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="Login"/>
        </div>       
    );
}