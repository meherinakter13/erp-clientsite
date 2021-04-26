import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/addUser', user)
            console.log(res.data);

            if (res.data.email) {

            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <input onChange={onChange} name="name" placeholder="name" />
            <input onChange={onChange} name="designation" placeholder="designation" />
            <input onChange={onChange} name="department" placeholder="department" />
            <input onChange={onChange} name="email" placeholder="email" />
            <input onChange={onChange} name="password" placeholder="password" />
            <button onClick={onSubmit}>Sign UP</button>
        </div>
    );
};

export default SignUp;