import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assests/logo.svg';

export default function NewBook() {
    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Erudio"/>
                    <h1>Add New Book</h1>
                    <p>Enter the book information and lick on 'Add'!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Home
                    </Link>
                </section>
                <form action="">
                    <input placeholde="Title" />
                    <input placeholde="Author" />
                    <input type="date" />
                    <input placeholde="Price" />

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}