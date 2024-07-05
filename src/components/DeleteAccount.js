import React, { useState } from 'react';
import icon from '../assets/icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import {deleteAccount} from "../api/userAPI";
import { useNavigate } from 'react-router-dom';

function DeleteAccount() {
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        try {
            await deleteAccount();
            // Clear local storage
            localStorage.removeItem('accessToken');
            localStorage.removeItem('tokenType');
            setSuccessMessage('Delete successful! Redirecting...');
            // Redirect to index page
            setTimeout(() => {
                navigate('/IndexPage');
            }, 2000);

        } catch (error) {
            setError('Failed to delete account. Please try again.');
        }
    };


    return (
        <div className="AccountPage">
            <Navbar bg="light" expand="lg"  >
                <Container>
                    <Navbar.Brand href="/IndexPage">
                        <img
                            src={icon}
                            width="50"
                            height="50"
                            className="d-inline-block align-top rounded"
                            alt="Your logo"

                        />
                        {/*{' EasyWear'}*/}
                    </Navbar.Brand>
                    <Navbar.Text className="text-primary"> EasyWear </Navbar.Text>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/IndexPage">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/AccountPage">Account</a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="#">Pricing</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link disabled" href="#">Disabled</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <h1 className="text-center">Delete Account</h1>
                <br/>
                <p className="lh-base text-start p-4 fw-light">When you delete your account, all your personal
                    information and data will be permanently removed from our servers. This action cannot be
                    undone.x</p>
                <p className="lh-base text-start p-4 fw-light"> If you're sure you want to proceed, please enter your
                    password and click "Confirm Deletion".</p>
                <Button onClick={handleDeleteAccount} variant="danger fw-normal position-absolute end-50 ">Confirm
                    Deletion</Button>
                <br/><br/><br/>
                {successMessage && (
                    <div className="alert alert-success text-start p-4" role="alert">
                        {successMessage}
                    </div>
                )}
                {error && (
                    <div className="alert text-start p-4" role="alert">
                    <p style={{color: 'red'}} >{error}</p>
                    </div>
                )}
            </Container>


        </div>
    );
}

export default DeleteAccount;