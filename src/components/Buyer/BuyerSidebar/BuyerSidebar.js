import React from 'react';
import { Link } from 'react-router-dom';
import'./BuyerSidebar.css';

const BuyerSidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
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
                    <Link to="/viewFiSample" className="text-white">
                         <span>View Final Sample</span>
                    </Link>
                </li>
                <li>
                    <Link to="/viewFiProduct" className="text-white">
                         <span>View Final Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/viewStatus" className="text-white">
                         <span>View Order Status</span>
                    </Link>
                </li>

            </ul>
        </div >
    );
};

export default BuyerSidebar;