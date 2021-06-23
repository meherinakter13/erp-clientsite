import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const Payment = () => {
    const {id}= useParams();
    const [pay, setPay] = useState({
        account_num:"",
        paid_amount:"",
        order_id:id
    })
    const onChange = (e) => {
        setPay({ ...pay, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`/addPayment/${id}`, pay)
            console.log(res.data);
            if (res.data) {
                alert("payment added successfully")
            }
        } catch (e) {
            console.log(e);
        }
    }
// set the amount value
    const [orders,setOrders]=useState({})
const[amount,setAmount]= useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                data.map(data => setAmount(data))
            })
    }, [])
    let totalPaymentAmount = amount.totalAmount;
    
    return (
        <section>
         <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Buyer Dashboard</h1>
            </div>
        <div className="fluid-container row ">
        <div className="col-md-2">
            <BuyerSidebar></BuyerSidebar>
        </div>
        <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add Payment Info</h5>
            <form onSubmit= {handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputName">Account NUmber</label>
                    <input onChange={onChange} type="number" class="form-control" min="999999999" max ="9999999999"name="account_num" placeholder=" Account Number" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input onChange={onChange} type="number" class="form-control" min={totalPaymentAmount} max={totalPaymentAmount} name="paid_amount" placeholder="Enter amount" required/>
                </div>
                <br />
                    <input class="btn btn-primary" type="submit" value="Add Payment"/>
                </form>
            </div>
            </div>
        </section>
    );
};

export default Payment;