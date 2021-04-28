import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import IESidebar from '../IESidebar/IESidebar';

const IEDashboard = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <section className="fluid-container">
        <h1>IE Dashboard</h1>
        <div className="row mx-0">
            <div className="col-md-2 p-0">
                <IESidebar></IESidebar>
            </div>
        </div>
    </section>
    );
};

export default IEDashboard;