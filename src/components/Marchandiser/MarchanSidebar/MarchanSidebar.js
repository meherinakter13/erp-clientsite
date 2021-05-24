import React from 'react';
import { Link } from 'react-router-dom';
import './MarchanSidebar.css';

const MarchanSidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/marchandiser-dashboard" className="text-white">
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBuyer" className="text-white">
                        <span>Add Buyer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageBuyer" className="text-white">
                        <span>Manage Buyer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addSupplier" className="text-white">
                        <span>Add Supplier</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageSupplier" className="text-white">
                        <span>Manage Supplier info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/viewOrderStatus" className="text-white">
                        <span>view Order info</span>
                    </Link>
                </li>
                <li>
                    <Link to="/finalSample" className="text-white">
                        <span>View All Sample</span>
                    </Link>
                </li>
                <li>
                    <Link to="/finalProduct" className="text-white">
                        <span>View All Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/report" className="text-white">
                        <span>View Report</span>
                    </Link>
                </li>

            </ul>
        </div >
    );
};

export default MarchanSidebar;