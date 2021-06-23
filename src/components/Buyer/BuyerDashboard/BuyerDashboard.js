import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Define from '../../Define';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const BuyerDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
    // order-------------------------
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // Sample--------------
    const [samples, setSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/samples?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setSamples(data))
    }, [])
    //    status--------------
    const [orderSta, setOrderSta] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orderStatusBuy?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderSta(data))
    }, [])
    return (
        <section className="fluid-container">
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Buyer Dashboard</h1>
            </div>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <BuyerSidebar></BuyerSidebar>
                </div>
                <div className="col-md-9 p-5">
                <div className="row mx-0">
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Order</p>
                            <p>{orders.length}</p>
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#15aec5", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Sample</p>
                            <p>{samples.length}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Confirmed Order</p>
                            <p>{orderSta.length}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyerDashboard;