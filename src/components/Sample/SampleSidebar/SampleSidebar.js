import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import'./SampleSidebar.css';

const SampleSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
            let signedOutUser = {
        
                name: '',
                email: ''
         
            }
            setLoggedInUser(signedOutUser);
    }
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
        <li>
                <Link to="/sample-dashboard" className="text-white">
                    <span>Dashboard</span>
                </Link>
            </li>

            <li>
                <Link to="/showSample" className="text-white">
                    <span>View Sample info</span>
                </Link>
            </li>
            <li>
                <Link to="/manageFSampleImg" className="text-white">
                     <span>Manage Final Sample</span>
                </Link>
            </li>
            <li>
                    <Link to="/login" onClick={handleSignOut} className="text-white">
                        <span>Logout</span>
                    </Link>
                </li>

        </ul>
    </div >
    );
};

export default SampleSidebar;