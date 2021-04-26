import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../Define';

const Login = () => {
    const history = useHistory()

    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/login', user)
            console.log(res.data);

            if (!res.data.error) {
                if (Define.D_Buyer == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/buyer-dashboard')
                } 
               else if (Define.D_IE == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/IE-dashboard')
                }
                else if (Define.D_CAD == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/CAD-dashboard')
                }
                else if (Define.D_Marchandiser == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/marchandiser-dashboard')
                }
                else if (Define.D_Production == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/production-dashboard')
                }
                else if (Define.D_Sample == res.data.data.department) {
                    localStorage.setItem(Define.C_USER, JSON.stringify(res.data.data))
                    history.push('/sample-dashboard')
                }
                else {
                    ////
                }
            } else {
                console.log('login faild', res.data.msg);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
        <input onChange={onChange} name="department" placeholder="department" />
        <input onChange={onChange} name="email" placeholder="email" />
        <input onChange={onChange} name="password" placeholder="password" />
        <button onClick={onSubmit}>Login</button>
    </div>
    );
};

export default Login;