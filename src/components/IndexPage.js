import icon from '../assets/icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import {Navigate, useNavigate} from "react-router-dom";
import UserIcon from "./UserIcon";
import {useEffect, useState} from "react";


function IndexPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // Check if user is logged in (e.g., by checking for token in localStorage)
        const token = localStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    };
    return (

        <div className="IndexPage">

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
                    {isLoggedIn && <UserIcon onLogout={handleLogout} />}
                    {!isLoggedIn && (
                        <div>
                        <a className="btn btn-primary" href="/LoginPage">Login</a>
                        </div>)}
                </Container>
            </Navbar>

            <Container className="mt-4">
                <h1>Welcome to EasyWear to Buy</h1>
                <p>Try the digital experience anytime, anywhere</p>
                {/*<Button variant="primary">Click me</Button>*/}
            </Container>
        </div>
    );
}

export default IndexPage;