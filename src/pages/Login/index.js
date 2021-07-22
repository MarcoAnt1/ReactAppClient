import React from 'react';
import './styles.css';

import logo from '../../assests/logo.png';
import login from '../../assests/login.png';

export default function Login() {
    return (
        <div className="login container">
            <section className="form">
                <img src={logo} alt="Login"/>
                <form action="">
                    <h1>Acess your Account</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={login} alt="Login"/>
        </div>       
    );
}