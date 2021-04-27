import React from 'react';
import { Link } from 'react-router-dom';
import'./CADSidebar.css';

const CADSidebar = () => {
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
                <Link to="/addSQntyFab" className="text-white">
                    <span>Add Final Sample</span>
                </Link>
            </li>
            <li>
                <Link to="/manageFSampleImg" className="text-white">
                     <span>Manage Final Sample</span>
                </Link>
            </li>

        </ul>
    </div >
    );
};

export default CADSidebar;