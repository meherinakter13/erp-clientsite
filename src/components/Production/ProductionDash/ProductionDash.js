import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Define from '../../Define';
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';

const ProductionDash = () => {
    const [u, setU] = useState(JSON.parse(localStorage.getItem(Define.C_USER)))
    const his = useHistory()
    if (!localStorage.getItem(Define.C_USER)) {
        his.push('/login')
    }
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
            <h1>Production Dashboard</h1>
            </div>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <ProductionSidebar></ProductionSidebar>
                </div>
                <div className="col-md-9 p-5 d-flex ">
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
        </section>
    );
};

export default ProductionDash;