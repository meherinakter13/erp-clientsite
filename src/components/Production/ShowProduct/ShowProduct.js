import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';

const ShowProduct = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <section className="fluid-container">
            <h1>Production Dashboard</h1>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <ProductionSidebar></ProductionSidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <div className="row">
                        {
                            orders.map(order => <div className="col-md-12 col-sm-12">
                                <table class="table table-primary table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="" scope="col">Product Name</th>
                                            <th className="" scope="col">Color</th>
                                            <th className="" scope="col">Measurement</th>
                                            <th className="" scope="col">Quantity</th>
                                            <th className="" scope="col">Total Amount</th>
                                            <th className="" scope="col">Order Date</th>
                                            <th className="" scope="col">Delivery Date</th>
                                            <th className="" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="">{order.productName}</td>
                                            <td className="">{order.color}</td>
                                            <td className="">{order.measurement}</td>
                                            <td className="">{order.quantity}</td>
                                            <td className="">{order.totalAmount}</td>
                                            <td className="">{(new Date(order.orderDate).toDateString("dd/MM/yyyy"))}</td>
                                            <td className="">{(new Date(order.deliveryDate).toDateString("dd/MM/yyyy"))}</td>
                                            <td><button className="  btn btn-danger"><Link to ={`/addFProImg/${order.id}`} className = "text-white">Add Image</Link> </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowProduct;