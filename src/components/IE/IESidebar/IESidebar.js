import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import'./IESidebar.css';

const IESidebar = () => {
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
                <Link to="/IE-dashboard" className="text-white">
                    <span>Dashboard</span>
                </Link>
            </li>

            <li>
                <Link to="/viewSample" className="text-white">
                    <span>View Sample info</span>
                </Link>
            </li>
            <li>
                    <Link to="/viewOrder" className="text-white">
                         <span>view Order info</span>
                    </Link>
                </li>
            <li>
                <Link to="/addSTime" className="text-white">
                    <span>Add Sample Time Cost</span>
                </Link>
            </li>
            <li>
                <Link to="/addProTime" className="text-white">
                    <span>Add Production Time Cost</span>
                </Link>
            </li>
            <li>
                <Link to="/manageFSTimeCost" className="text-white">
                     <span>Manage Sample Time Cost</span>
                </Link>
            </li>
            <li>
                <Link to="/managePTimeCost" className="text-white">
                     <span>Manage Product Time Cost</span>
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

export default IESidebar;