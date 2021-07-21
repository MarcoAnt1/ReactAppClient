import React from 'react';
import './styles.css';
import Cadeado from '../../assests/Cadeado.png';

export default function Login() {
    return (
        <div className="login container">
            <section className="form">
                <form action="">
                    <h1>Acess your Account</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button type="submit">Login</button>
                </form>
            </section>
            <img src={Cadeado} alt="Login"/>
        </div>       
    );
}