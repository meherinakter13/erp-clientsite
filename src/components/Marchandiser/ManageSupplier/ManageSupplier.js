import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const ManageSupplier = () => {
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/supplier')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])

    const deleteSupplier = () => {
        fetch(`http://localhost:5000/supplier`)
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteSupplier/${id}`, suppliers)
            console.log(res.data);

            if (res.data) {
                alert("Supplier deleted successfully")
                deleteSupplier();
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
                <MarchanSidebar></MarchanSidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        suppliers.map(supplier => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                        <th className="" scope="col">Company Name</th>
                                        <th className="" scope="col">Name</th>
                                        <th className="" scope="col">Email</th>
                                        <th className="" scope="col">Material Name</th>
                                        <th className="" scope="col">Quantity</th>
                                        <th className="" scope="col">Total Amount</th>
                                        <th className="" scope="col">Order Date</th>
                                        <th className="" scope="col">Delivery Date</th>
                                        <th className="" scope="col">Acton</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="">{supplier.companyName}</td>
                                        <td className="">{supplier.name}</td>
                                        <td className="">{supplier.email}</td>
                                        <td className="">{supplier.quantity}</td>
                                        <td className="">{supplier.materialName}</td>
                                        <td className="">{supplier.totalAmount}</td>
                                        <td className="">{supplier.orderDate}</td>
                                        <td className="">{supplier.deliveryDate}</td>
                                        <td className=""><button className="btn btn-danger mt-3 mr-2">Edit</button>
                                            <button className="btn btn-danger mt-3" onClick={() => handleDelete(supplier.id)}>Delete</button></td>
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

export default ManageSupplier;