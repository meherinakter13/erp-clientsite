import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
        <li>
                <Link to="/login" className="text-white">
                    <span>Buyer</span>
                </Link>
            </li>
            <li>
                <Link to="/login" className="text-white">
                     <span>IE</span>
                </Link>
            </li>
            <li>
                <Link to="/login" className="text-white">
                    <span>CAD</span>
                </Link>
            </li>
            <li>
                <Link to="/login" className="text-white">
                     <span>Marchandiser</span>
                </Link>
            </li>
            <li>
                <Link to="/login" className="text-white">
                    <span>Sample</span>
                </Link>
            </li>
            <li>
                <Link to="/login" className="text-white">
                     <span>Production</span>
                </Link>
            </li>

        </ul>
    </div >
    );
};

export default Sidebar;