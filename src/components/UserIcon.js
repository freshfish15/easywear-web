import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PersonCircle } from    'react-bootstrap-icons';

function UserIcon({ onLogout }) {
    const navigate = useNavigate();

    const handleDeleteAccount = () => {
        navigate('/delete-account');
    };

    return (
        <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-decoration-none">
                <PersonCircle size={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                {/*<Dropdown.Item onClick={handleDeleteAccount}>Delete Account</Dropdown.Item>*/}
            </Dropdown.Menu>
        </Dropdown>
    );
}



export default UserIcon;