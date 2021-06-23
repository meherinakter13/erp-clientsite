import React, { useEffect } from 'react';
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
        // Sample-----------------------
        const [samples, setSamples] = useState([])
        useEffect(() => {
            fetch(`http://localhost:5000/sample`)
                .then(res => res.json())
                .then(data => setSamples(data))
        }, [])

        // Final Sample-----------------------
        const [fiSamples, setfiSamples] = useState([])
        useEffect(() => {
            fetch(`http://localhost:5000/get_all_smaple`)
                .then(res => res.json())
                .then(data => setfiSamples(data))
        }, [])
      // Order-----------------------
        const [orders, setOrders] = useState([])
        useEffect(() => {
            fetch('http://localhost:5000/ordersStatus')
                .then(res => res.json())
                .then(data => setOrders(data))
        }, [])
    // Final Order-----------------------
    const [fiOrders, setfiOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_product')
            .then(res => res.json())
            .then(data => setfiOrders(data))
    }, [])
    return (
        <section className="fluid-container">
         <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>CAD Dashboard</h1>
            </div>
        <div className="row mx-0">
            <div className="col-md-2 p-0">
                <CADSidebar></CADSidebar>
            </div>
            <div className="col-md-9 p-5 ">
                    <div className="row mx-0">
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Sample</p>
                            <p>{samples.length}</p>
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#15aec5", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Completed Sample</p>
                            <p>{fiSamples.length}</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#076270", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Total Order</p>
                            <p>{orders.length}</p>
                        </div>
                        </div> 
                         <div className="col-md-4">
                        <div style={{ height: "200px", width: "300px", backgroundColor: "#15aec5", padding: "10px", margin: "10px", color: "white", textAlign: "center" }}>
                            <p>Completed Order</p>
                            <p>{fiOrders.length}</p>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
    </section>
    );
};

export default CADDashboard;