import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Route' 

import Footer from '../Components/template/Footer'
import Logo from '../Components/template/Logo'
import Nav from '../Components/template/Nav'

export default props => 
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>