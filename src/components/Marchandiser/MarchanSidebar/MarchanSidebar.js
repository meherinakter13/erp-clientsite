import React from 'react';
import { Link } from 'react-router-dom';
import'./MarchanSidebar.css';

const MarchanSidebar = () => {
    return (
        <div className="sidebar py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
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
                    <Link to="/viewFiSample" className="text-white">
                        <span>View Final Sample</span>
                    </Link>
                </li>
                <li>
                    <Link to="/viewFiProduct" className="text-white">
                         <span>View Final Product</span>
                    </Link>
                </li>

            </ul>
        </div >
    );
};

export default MarchanSidebar;