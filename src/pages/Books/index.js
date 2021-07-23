import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assests/logo.svg';

export default function Books() {

    const [books, setBooks] = useState([]);
    const userName = localStorage.getItem('userName');
    const accessToken = localStorage.getItem('accessToken');
    const history = useHistory();

    useEffect(() => {
        api.get('v1/api/Book/asc/20/1', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            setBooks(response.data.list)
        })
    }, [accessToken]);
    
    async function logout() {
        try {
            await api.get('v1/api/auth/revoke', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
            localStorage.clear();
            history.push('/');
        } catch (error) {
            alert('Logout failed! Try again!');
        }
    }

    async function editBook(id) {
        try {
            history.push(`books/new/${id}`);
        } catch (error) {
            alert('Edit book failde! Try again!');
        }
    }

    async function deleteBook(id) {
        try {
            await api.delete(`v1/api/book/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            
            setBooks(books.filter(book => book.id !== id))
        } catch (error) {
            alert('Delete failde! Try again!');
        }
    }

    return(
        <div className="book-container">
            <div className="header">
                <header>
                    <img src={logo} alt="Erudio"/>
                    <span>Welcome, <strong>{userName.toLowerCase()}</strong>!</span>
                    <Link className="button" to="books/new/0">Add New Book</Link>
                    <button onClick={logout} type="button">
                        <FiPower size={18} color="#251FC5" />
                    </button>
                </header>
            </div>
            
            <div className="list">
                <h1>Registered Books</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <strong>Title:</strong>
                            <p>{book.title}</p>
                            <strong>Author:</strong>
                            <p>{book.author}</p>
                            <strong>Price:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(book.price)}</p>
                            <strong>Release Date:</strong>
                            <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

                            <button onClick={() => editBook(book.id)} type="button">
                                <FiEdit size={20} color="#251FC5"/>
                            </button>

                            <button onClick={() => deleteBook(book.id)} type="button">
                                <FiTrash2 size={20} color="#251FC5"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}