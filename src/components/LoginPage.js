import icon from '../assets/icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, Button, Row, Col} from 'react-bootstrap';
import LoginForm from "./LoginForm";
import axios from 'axios';
import {useState} from "react";
import {API_BASE_URL} from "../config";
import axiosInstance from "../axiosConfig";
import {deleteAccount, logInAccount} from '../api/userAPI';
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (credentials) => {
        try {
            logInAccount(credentials).then((response_data) => {
                if (response_data) {
                    console.log(response_data);
                    if (response_data.status === 'ok') {
                        const {access_token, token_type} = response_data.data;
                        localStorage.setItem('accessToken', access_token);
                        localStorage.setItem('tokenType', token_type);
                        console.log("Token: " + access_token);
                        setError('');
                        setSuccessMessage('Login successful! Redirecting...');
                        setTimeout(() => {
                            navigate('/AccountPage');
                        }, 2000);
                    } else {
                        setError('Login failed. Please check your username and password.');
                    }
                } else {
                    setError('Login failed. Please check your username and password.');
                }
            }).catch(error => {
                setError('An error occurred during login.');
            })

        } catch (error) {
            setError(error);
        }
    }



    //     try{
    //         // const response = await axios.post(API_BASE_URL+'/token',
    //         const response = await axiosInstance.post('/token',
    //             new URLSearchParams({
    //                 'grant_type': 'password',
    //                 'username': credentials.email,
    //                 'password': credentials.password,
    //                 'scope': '',
    //                 'client_id': 'string',
    //                 'client_secret': 'string'
    //             })
    //         );
    //
    //         const {access_token, token_type} = response.data;
    //
    //         //consider more secure methods
    //         localStorage.setItem('accessToken', access_token);
    //         localStorage.setItem('tokenType', token_type);
    //         console.log("Token: " + access_token);
    //         //set success message
    //         setError('');
    //         setSuccessMessage('Login successful! Redirecting...');
    //
    //         setTimeout(() =>{
    //             navigate('/AccountPage');
    //         }, 2000);
    //
    //     }catch (error){
    //         console.log('Login error:', error.response ? error.response.data : error.message)
    //         setError('Login failed. Please check your username and password.');
    //     }
    //     console.log('Login attempt with:', credentials);
    // };



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
                </Container>
            </Navbar>

            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={12} md={6}>
                        <h2 className="text-center mb-4">Login</h2>
                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <LoginForm onSubmit={handleLogin} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;