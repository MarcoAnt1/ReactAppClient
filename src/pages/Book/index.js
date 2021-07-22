import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';

import logo from '../../assests/logo.svg';

export default function Book() {
    return(
        <div className="book-container">
            <header>
                <img src={logo} alt="Erudio"/>
                <span>Welcome, <strong>Marco</strong> </span>
                <Link className="button" to="book/new">Add New Book</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>
        </div>
    );
}