import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';

const SampleDashboard = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    return (
        <div>
            <h1>Sample dashboard</h1>
        </div>
    );
};

export default SampleDashboard;