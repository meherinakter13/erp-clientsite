import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const AddSupplier = () => {

    // order-------------------------
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/order')
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
    const [supplier, setSupplier] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/supplier')
            .then(res => res.json())
            .then(data => setSupplier(data))
    }, [])

    let totalSpendAmount = 0;
    for (let i = 0; i < supplier.length; i++) {
        const element = parseFloat(supplier[i].totalAmount);
        totalSpendAmount = totalSpendAmount + element;
    }
    console.log(totalSpendAmount)

    // remaining Amount
    let remainingAmount = 0;

    remainingAmount = totalOrderCost - totalSpendAmount;



    const [suppliers, setSuppliers] = useState({
        companyName: "",
        name: "",
        email: "",
        materialName: "",
        quantity: "",
        totalAmount: "",
        orderDate: new Date(),
        deliveryDate: new Date()
    })
    //Time
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let today = `${year}-0${month}-${date}`
    console.log(today)

    const handleOrderDate = (date) => {

        const newDates = { ...suppliers }

        newDates.orderDate = date;

        setSuppliers(newDates);

    };
    const handleDeliveryDate = (date) => {

        const newDates = { ...suppliers }

        newDates.deliveryDate = date;

        setSuppliers(newDates);

    };


    const onChange = (e) => {
        setSuppliers({ ...suppliers, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/addSupplier', suppliers)
            console.log(res.data);
            e.target.reset();
            if (res.data) {
                alert("Supplier added successfully")

            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <section >
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Marchandiser Dashboard</h1>
            </div>
            <div className="fluid-container row ">
                <div className="col-md-2">
                    <MarchanSidebar></MarchanSidebar>
                </div>
                <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Material Info</h5>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputName">Company Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="companyName" placeholder="Enter company name" required />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="name" placeholder="Enter supplier name" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input onChange={onChange} type="email" class="form-control" name="email" placeholder="Enter supplier email" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Material Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="materialName" placeholder="Enter material name" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Quantity</label>
                            <input onChange={onChange} type="number" min="1" class="form-control" name="quantity" placeholder="Enter quantity" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Total Amount</label>
                            <input onChange={onChange} type="number" min="1" max={remainingAmount} class="form-control" name="totalAmount" placeholder="Enter total amount" required/>
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <Grid container justify="space-around">

                                <KeyboardDatePicker

                                    margin="normal"
                                    minDate={today}
                                    id="date-picker-dialog"

                                    name="orderDate"
                                    label="Order Date"

                                    format="dd/MM/yyyy"

                                    value={suppliers.orderDate}

                                    onChange={handleOrderDate}

                                    KeyboardButtonProps={{

                                        'aria-label': 'change date',

                                    }}

                                />

                                <KeyboardDatePicker

                                    margin="normal"

                                    id="date-picker-dialog"
                                    minDate={today}
                                    name="deliveryDate"
                                    label="Delivary Date"

                                    format="dd/MM/yyyy"

                                    value={suppliers.deliveryDate}

                                    onChange={handleDeliveryDate}

                                    KeyboardButtonProps={{

                                        'aria-label': 'change date',

                                    }}

                                />

                            </Grid>
                        </MuiPickersUtilsProvider>
                        {/* <div class="form-group">
                        <label for="exampleInputEmail1">Order Date</label>
                        <input onChange={onChange} type="text" class="form-control" name="orderDate" placeholder="Enter orderDate" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Delivery Date</label>
                        <input onChange={onChange} type="text" class="form-control" name="deliveryDate" placeholder="Enter deliveryDate" />
                    </div> */}
                        <br />
                        <input class="btn btn-primary" type="submit" value="Add material" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddSupplier;