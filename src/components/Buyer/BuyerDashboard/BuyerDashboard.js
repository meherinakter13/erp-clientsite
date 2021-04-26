import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const BuyerDashboard = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <section className="fluid-container">
            <h1>Buyer Dashboard</h1>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <BuyerSidebar></BuyerSidebar>
                </div>
            </div>
        </section>
    );
};

export default BuyerDashboard;