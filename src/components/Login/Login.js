import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Define from '../Define';
import "firebase/auth";
import firebase from "firebase/app";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/login', user)
            const {name, email} = user;
            const signedInUser = {
                name: name,
                email: email
            }
            setLoggedInUser(signedInUser) ;
            // storeAuthToken();
            history.replace(from);
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
                console.log('login failed', res.data.msg);
            }
        } catch (e) {
            console.log(e);
        }
    }
    // const storeAuthToken = () =>{
    //     firebase.auth().currentUser.getIdToken( true)
    //     .then(function(idToken) {
    //         sessionStorage.setItem('token',idToken);
    //       })
    //       .catch(function(error) {
    //       });
    // }
    return (
        <div className="container text-center w-25 mt-5 pt-5 bg-info text-white " >
            <form>
                    <div class="form-group">
                        <label for="exampleInputName">Department/Buyer</label>
                        <input onChange={onChange} type="text" class="form-control" name="department" placeholder="Enter Depertment name or Buyer"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">Email</label>
                        <input onChange={onChange} type="email" class="form-control" name="email" placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">Password</label>
                        <input onChange={onChange} type="password" class="form-control" name="password" placeholder="Enter your password"/>
                    </div>
                    <br />
                    <button className="btn btn-danger mb-3"onClick={onSubmit}>Login</button>
                    </form>
       
    </div>
    );
};

export default Login;