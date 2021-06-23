import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import'./BuyerSidebar.css';

const BuyerSidebar = () => {
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
                    <Link to="/buyer-dashboard" className="text-white">
                         <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addSample" className="text-white">
                        <span>Add Sample info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageSample" className="text-white">
                         <span>Manage Sample info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addOrder" className="text-white">
                        <span>Add Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageOrder" className="text-white">
                         <span>Manage Order info</span>
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

export default BuyerSidebar;