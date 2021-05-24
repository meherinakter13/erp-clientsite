import axios from 'axios';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const OrderInfo = () => {
    
    const [orders, setOrders] = useState({
        productName:"",
        color:"",
        measurement:"",
        quantity: "",
        totalAmount: "",
        orderDate: new Date(),
        deliveryDate: new Date()
    })

    //Time
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let today = `${year}-${month}-${date}`
    console.log(today)


    const handleOrderDate = (date) => {
        const newDates = { ...orders }
        newDates.orderDate = date;
        setOrders(newDates);
    };

    const handleDeliveryDate = (date) => {
        const newDates = { ...orders }
        newDates.deliveryDate = date;
        setOrders(newDates);
    };

    const onChange = (e) => {
        setOrders({ ...orders, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
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
        <section>
            <h1>Buyer Dashboard</h1>
            <div className="container-fluid row ">
            <div className="col-md-2">
                <BuyerSidebar></BuyerSidebar>
            </div>
            <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Order Info</h5>
                <form onSubmit= {handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName">ProductName</label>
                        <input onChange={onChange} type="text" class="form-control" name="productName" placeholder=" ProductName name" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Color</label>
                        <input onChange={onChange} type="text" class="form-control" name="color" placeholder="Enter color" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Measurement</label>
                        <input onChange={onChange} type="text" class="form-control" name="measurement" placeholder="Enter measurement" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Quantity</label>
                        <input onChange={onChange} type="number" min="1" class="form-control" name="quantity" placeholder="Enter quantity" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Total Amount</label>
                        <input onChange={onChange} type="number" min="1" class="form-control" name="totalAmount" placeholder="Enter totalAmount" required/>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <Grid container justify="space-around">

                            <KeyboardDatePicker

                                margin="normal"
                                // minDate={today}

                                id="date-picker-dialog"

                                name="orderDate"
                                label="Order Date"

                                format="dd/MM/yyyy"

                                value={orders.orderDate}

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

                                value={orders.deliveryDate}

                                onChange={handleDeliveryDate}

                                KeyboardButtonProps={{

                                    'aria-label': 'change date',

                                }}

                            />

                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br />
                    <input class="btn btn-primary" type="submit" value="Add Order"/>
                </form>
            </div>
            </div>
        </section>
    );
};

export default OrderInfo;