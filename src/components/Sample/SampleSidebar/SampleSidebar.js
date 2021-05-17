import React from 'react';
import { Link } from 'react-router-dom';
import'./SampleSidebar.css';

const SampleSidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">

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

        </ul>
    </div >
    );
};

export default SampleSidebar;