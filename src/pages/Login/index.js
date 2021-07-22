import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css';

import logo from '../../assests/logo.svg';
import padlock from '../../assests/padlock.png';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = { userName, password }

        try {
            const response = await api.post('v1/api/auth/signin', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            history.push('/books')
        } catch (error) {
            alert('Login failed! Try again!')
        }

    }

    return (
        <div className="global-container">
            <section className="form">
                <img src={logo} alt="Login"/>
                <form onSubmit={login}>
                    <h1>Acess your Account</h1>
                    <input placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />

                    <button className="button" type="submit">Login</button>
                </form>
            </section>
            <img src={padlock} alt="Login"/>
        </div>       
    );
}