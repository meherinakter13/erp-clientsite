import React from 'react';
import { Link } from 'react-router-dom';
import'./ProductionSidebar.css';

const ProductionSidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">

            <li>
                <Link to="/viewOrder" className="text-white">
                    <span>View Order info</span>
                </Link>
            </li>
            <li>
                <Link to="/addFProImg" className="text-white">
                    <span>Add Final Product</span>
                </Link>
            </li>
            <li>
                <Link to="/manageFProImg" className="text-white">
                     <span>Manage Final Product</span>
                </Link>
            </li>

        </ul>
    </div >
    );
};

export default ProductionSidebar;