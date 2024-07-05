import icon from './assets/icon.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import AccountPage from './components/AccountPage';
import LoginPage from "./components/LoginPage";
import DeleteAccount from "./components/DeleteAccount";
import {useEffect, useState} from "react";

function App() {

    return (

        <Router>
            <title>EasyWear</title>
            <Routes>
                {/* Redirect the root path to NewPage */}
                <Route path="/" element={<Navigate to="/IndexPage" replace/>}/>

                {/* Set NewPage as the main content for both / and /new-page */}
                <Route path="/IndexPage" element={<IndexPage/>}/>
                <Route path="/AccountPage" element={<AccountPage/>}/>
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/DeleteAccount" element={<DeleteAccount/>}/>
                {/* Keep the old home page accessible at /old-home if desired */}
                {/*<Route path="/old-home" element={<OldHomePage />} />*/}

                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
