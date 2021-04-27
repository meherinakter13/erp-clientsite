import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import CADSidebar from '../CADSidebar/CADSidebar';

const CADDashboard = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <section className="fluid-container">
        <h1>CAD Dashboard</h1>
        <div className="row mx-0">
            <div className="col-md-2 p-0">
                <CADSidebar></CADSidebar>
            </div>
        </div>
    </section>
    );
};

export default CADDashboard;