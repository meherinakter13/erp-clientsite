import React from 'react';
import { Link } from 'react-router-dom';
import'./IESidebar.css';

const IESidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">

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
                     <span>Manage Time Cost</span>
                </Link>
            </li>


        </ul>
    </div >
    );
};

export default IESidebar;