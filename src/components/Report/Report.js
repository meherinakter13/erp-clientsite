import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import './Report.css';
import MarchanSidebar from '../Marchandiser/MarchanSidebar/MarchanSidebar';

const Report = () => {
    const [printStatus, setPrintStatus] = useState(false);

    //Donation show in Report
    const [donationStatus, setDonationStatus] = useState(false);
    const [selectedFromDate, setSelectedFromDate] = useState(new Date());
    const [selectedToDate, setSelectedToDate] = useState(new Date());
    const [donationCheck, setDonationCheck] = useState([]);
    // const [donation, setDonation] = useState([]);

    // order-------------------------
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_Payment')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);

    const handleFromDateChange = (date) => {
        setSelectedFromDate(date)
    };

    const handleToDateChange = (date) => {
        setSelectedToDate(date)
    };


    var clickedFromDate = selectedFromDate.getTime()
    var clickedToDate = selectedToDate.getTime()

    const handleDonation = () => {
        let newList = orders.filter(dn => new Date(dn.orderDate).getTime() >= clickedFromDate && new Date(dn.orderDate).getTime() <= clickedToDate)
        console.log(newList)
        setDonationCheck(newList)
        setDonationStatus(true)
        setWSStatus(false)
        setPrintStatus(true)

    }


    let totalDonation = 0;
    for (let i = 0; i < donationCheck.length; i++) {
        const element = parseFloat(donationCheck[i].paid_amount);
        totalDonation = totalDonation + element;
    }
    console.log(totalDonation)

    //Supply details show in Report

    const [WSStatus, setWSStatus] = useState(false);
    const [WSCheck, setWSCheck] = useState([]);
    const [WS, setWS] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/supplier')
            .then(res => res.json())
            .then(data => {
                setWS(data)
                console.log(data);
            })
    }, [])


    const handleWS = () => {
        let newList = WS.filter(WS => new Date(WS.orderDate).getTime() >= clickedFromDate && new Date(WS.orderDate).getTime() <= clickedToDate)
        console.log(newList)
        setWSCheck(newList)
        setWSStatus(true)
        setDonationStatus(false)
        setPrintStatus(true)
    }


    let totalWSCost = 0;
    for (let i = 0; i < WSCheck.length; i++) {
        const element = parseFloat(WSCheck[i].totalAmount);
        totalWSCost = totalWSCost + element;
    }
    console.log(totalWSCost)
    return (
        <section>
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Marchandiser Dashboard</h1>
            </div>
            <div className="fluid-container row ">
                <div className="col-md-2">
                    <MarchanSidebar></MarchanSidebar>
                </div>
                <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>



                    {/* <div className="mt-3" style={{ marginLeft: '280px' }}> */}
                    {/* <h2 style={{ marginLeft: '30%' }} className="mt-3 mb-4">Report</h2> */}

                    {printStatus &&
                        <button style={{ marginLeft: '80%' }} className="btn btn-primary" onClick={() => window.print()}>Print</button>
                    }

                    <div >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                style={{ marginLeft: '15%' }}
                                margin="normal"
                                id="date-picker-dialog"
                                label="From"
                                format="dd/MM/yyyy"
                                minDate="2021-01-01"
                                value={selectedFromDate}
                                onChange={handleFromDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>


                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                style={{ marginRight: '30%', float: 'right' }}
                                margin="normal"
                                id="date-picker-dialog"
                                label="TO"
                                format="dd/MM/yyyy"
                                minDate="2021-01-01"
                                value={selectedToDate}
                                onChange={handleToDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <div style={{ float: 'right' }} className="mb-4 mt-3 mr-5">
                            <button onClick={handleDonation} className="btn btn-danger ms-5 mt-2">Order</button>

                            <button onClick={handleWS} className="btn btn-info ml-3 ms-2 mt-2">Material</button>
                        </div>
                    </div>



                    {/* Order Status */}
                    {donationStatus && <div id="donate">
                        {
                            <table id="table" class="table text-center mb-5">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">Name</th>
                                <th scope="col" >Email</th> */}
                                <th scope="col">Buyer Email</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Order date</th>
                                        <th scope="col">Delivery date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Payment Status</th>
                                    </tr>
                                </thead>
                                {
                                    donationCheck.map(order =>
                                        <tbody>
                                            <tr>
                                                {/* <th scope="row">{donation.name || donation.email || ''}</th> */}
                                                {/* <td>{donation.email}</td> */}
                                                <td><strong>{order.email}</strong></td>
                                                <td><strong>{order.productName}</strong></td>
                                                <td><strong>{(new Date(order.orderDate).toDateString("dd/MM/yyyy"))}</strong></td>
                                                <td><strong>{(new Date(order.deliveryDate).toDateString("dd/MM/yyyy"))}</strong></td>
                                                <td><strong>{order.totalAmount} Tk</strong></td>
                                                <td><strong>{order.status}</strong></td>
                                                <td><strong>{order.payment_status}</strong></td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        }<hr />
                        <div style={{ marginLeft: '80%' }}>
                            <strong>Total Amount: {totalDonation} Tk</strong>
                        </div>
                        <hr />
                    </div>}


                    {/* WS Stats */}
                    {WSStatus && <div id="event">
                        {
                            <table id="table" class="table text-center mb-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Supplier Name</th>
                                        <th scope="col">Supplier email</th>
                                        <th scope="col" >Material Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Delivery Date</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                {
                                    WSCheck.map(WS =>
                                        <tbody>
                                            <tr>
                                                <th scope="row">{WS.companyName}</th>
                                                <th scope="row">{WS.name}</th>
                                                <th scope="row">{WS.email}</th>
                                                <th scope="row">{WS.materialName}</th>
                                                <th scope="row">{WS.quantity} Kg</th>
                                                <th scope="row">{(new Date(WS.orderDate).toDateString("dd/MM/yyyy"))}</th>                                                
                                                <th scope="row">{(new Date(WS.deliveryDate).toDateString("dd/MM/yyyy"))}</th>
                                                <th scope="row">{WS.totalAmount} Tk</th>
                                            </tr>
                                        </tbody>
                                    )
                                }
                            </table>
                        }<hr />
                        <div style={{ marginLeft: '80%' }}>
                            <strong>Total Amount: {totalWSCost} Tk</strong>
                        </div>
                        <hr />
                    </div>}


                </div>
            </div>
        </section>
    );
};

export default Report;






