import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const MarchandiserDash = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <section className="fluid-container">
            <h1>Marchandiser Dashboard</h1>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <MarchanSidebar></MarchanSidebar>
                </div>
            </div>
        </section>
    );
};

export default MarchandiserDash;