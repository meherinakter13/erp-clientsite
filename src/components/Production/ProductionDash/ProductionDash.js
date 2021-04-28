import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';

const ProductionDash = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <section className="fluid-container">
            <h1>Production Dashboard</h1>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <ProductionSidebar></ProductionSidebar>
                </div>
            </div>
        </section>
    );
};

export default ProductionDash;