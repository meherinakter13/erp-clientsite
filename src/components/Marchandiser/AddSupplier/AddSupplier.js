import axios from 'axios';
import React, { useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const AddSupplier = () => {
    const [suppliers, setSuppliers] = useState({})

    const onChange = (e) => {
        setSuppliers({ ...suppliers, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/addSupplier', suppliers)
            console.log(res.data);
            if (res.data) {
                alert("Supplier added successfully")

            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="container-fluid row " >

            <div className="col-md-2">
                <MarchanSidebar></MarchanSidebar>
            </div>
            <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Supplier Info</h5>
                <form>
                    <div class="form-group">
                        <label for="exampleInputName">Company Name</label>
                        <input onChange={onChange} type="text" class="form-control" name="companyName" placeholder="Enter companyName" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={onChange} type="text" class="form-control" name="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onChange={onChange} type="email" class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Material Name</label>
                        <input onChange={onChange} type="text" class="form-control" name="materialName" placeholder="Enter materialName" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Quantity</label>
                        <input onChange={onChange} type="text" class="form-control" name="quantity" placeholder="Enter quantity" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Total Amount</label>
                        <input onChange={onChange} type="text" class="form-control" name="totalAmount" placeholder="Enter totalAmount" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Order Date</label>
                        <input onChange={onChange} type="text" class="form-control" name="orderDate" placeholder="Enter orderDate" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Delivery Date</label>
                        <input onChange={onChange} type="text" class="form-control" name="deliveryDate" placeholder="Enter deliveryDate" />
                    </div>
                    <br />
                    <button onClick={onSubmit} class="btn btn-primary">Add Supplier</button>
                </form>
            </div>
        </section>
    );
};

export default AddSupplier;