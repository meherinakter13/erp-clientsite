import axios from 'axios';
import React, { useState } from 'react';
import BuyerDashboard from '../BuyerDashboard/BuyerDashboard';

const OrderInfo = () => {
    const [orders, setOrders] = useState({})

    const onChange = (e) => {
        setOrders({ ...orders, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/addOrder', orders)
            console.log(res.data);
            if (res.data) {
                alert("order added successfully")
               
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="container-fluid row " >
           
            <div className="col-md-2">
                <BuyerDashboard></BuyerDashboard>
            </div>
            <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Order Info</h5>
                <form>
                    <div class="form-group">
                        <label for="exampleInputName">ProductName</label>
                        <input onChange={onChange} type="text" class="form-control" name="productName" placeholder=" ProductName name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Color</label>
                        <input onChange={onChange}  type="text" class="form-control" name="color" placeholder="Enter color" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Measurement</label>
                        <input onChange={onChange}  type="text" class="form-control" name="measurement" placeholder="Enter measurement" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Quantity</label>
                        <input onChange={onChange}  type="text" class="form-control" name="quantity" placeholder="Enter quantity" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Total Amount</label>
                        <input onChange={onChange}  type="text" class="form-control" name="totalAmount" placeholder="Enter totalAmount" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Order Date</label>
                        <input onChange={onChange}  type="text" class="form-control" name="orderDate" placeholder="Enter orderDate" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Delivery Date</label>
                        <input onChange={onChange}  type="text" class="form-control" name="deliveryDate" placeholder="Enter deliveryDate" />
                    </div>
                    <br/>
                    <button onClick={onSubmit} class="btn btn-primary">Add Order</button>
                </form>
            </div>
        </section>
    );
};

export default OrderInfo;