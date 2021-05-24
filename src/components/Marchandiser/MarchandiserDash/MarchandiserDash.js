import React from 'react';
import {useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const MarchandiserDash = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }

    // buyer-----------------------
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/buyers`)
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [])

// order-------------------------
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    let totalOrderCost = 0;
    for (let i = 0; i < orders.length; i++) {
        const element = parseFloat(orders[i].totalAmount);
        totalOrderCost = totalOrderCost + element;
    }
    console.log(totalOrderCost)

// supplier--------------
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/supplier')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])

    let totalSpendAmount = 0;
    for (let i = 0; i < suppliers.length; i++) {
        const element = parseFloat(suppliers[i].totalAmount);
        totalSpendAmount = totalSpendAmount + element;
    }
    console.log(totalSpendAmount)

// remaining Amount
    let remainingAmount = 0;
  
        remainingAmount = totalOrderCost - totalSpendAmount;
    
    

    return (
        <section className="fluid-container">
            <h1>Marchandiser Dashboard</h1>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <MarchanSidebar></MarchanSidebar>
                </div>
                <div className="col-md-9 p-5 ">
                    <div className="row mx-0">
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "green", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Buyer</p>
                            <p>{buyers.length}</p>
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "red", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Supplier</p>
                            <p>{suppliers.length}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "green", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Order</p>
                            <p>{orders.length}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "red", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Order Amount</p>
                            <p>{totalOrderCost}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "green", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Material Cost</p>
                            <p>{totalSpendAmount}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "red", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Remaining Amount</p>
                            <p>{remainingAmount}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default MarchandiserDash;