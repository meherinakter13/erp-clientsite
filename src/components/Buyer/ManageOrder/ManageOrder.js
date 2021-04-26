import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const deleteProduct = () => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteOrder/${id}`, orders)
            console.log(res.data);

            if (res.data) {
                alert("order deleted successfully")
                deleteProduct();
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <section className="fluid-container">
            <h1>Buyer Dashboard</h1>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <BuyerSidebar></BuyerSidebar>
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
                                            <th className="" scope="col">Acton</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="">{order.productName}</td>
                                            <td className="">{order.color}</td>
                                            <td className="">{order.measurement}</td>
                                            <td className="">{order.quantity}</td>
                                            <td className="">{order.totalAmount}</td>
                                            <td className="">{order.orderDate}</td>
                                            <td className="">{order.deliveryDate}</td>
                                            <td className=""><button className="btn btn-danger mt-3 mr-2">Edit</button>
                                                <button className="btn btn-danger mt-3" onClick={() => handleDelete(order.id)}>Delete</button></td>
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

export default ManageOrder;