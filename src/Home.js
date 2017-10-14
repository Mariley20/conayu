import React, { Component } from 'react';
import './Home.css';
import {
    NavLink,
} from 'react-router-dom'

const Home = () => (
    <div className="home-container">
        <form>
            <h1>CONAYUS</h1>
            <p className="home-p">Te ayudamos,ayudar</p>

            <NavLink
                to={"/signUp"} className="btn btn-warning">Empezar
            </NavLink>
        </form>

    </div>
)

export default Home;
