import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const OrderStatus = () => {
    const {id} = useParams();
    const [orders,setOrders]=useState()
    // const [o_id,setid]=useState(-1)

    useEffect(()=>{
        const load=async()=>{
            const res=await axios.get('/order')
            setOrders(res.data)
        }
        load()
    },[])

    const statusUpdated = () => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }

    
     const handleRejectBtn = async (id,e) => {
        const status = 'Rejected'
        const user = { id, status };
        try {
            const res= await axios.put(`/updateStatus/${id}`,user)
          console.log(res.data);
          if (res.data) {
            alert("Do you want to reject?")
            statusUpdated();
          }
        } catch (e) {
          console.log(e);
        }
      }


    const handleConfirmBtn = async(id) => {

        const status = 'Confirmed'
        const user = { id, status };
        try {
            const res= await axios.put(`/updateStatus/${id}`,user)
          console.log(res.data);
          if (res.data) {
            alert("Do you want to confirm?")
            statusUpdated();
          }
        } catch (e) {
          console.log(e);
        }
      }
      
    const handlePaymentBtn = async(id) => {

        const payment_status = 'Recieved'
        const user = { id, payment_status };
        try {
            const res= await axios.put(`/updatePayment/${id}`,user)
          console.log(res.data);
          if (res.data) {
            alert("Do you want to confirm?")
            statusUpdated();
          }
        } catch (e) {
          console.log(e);
        }
      }

  
    return (
        <section className="fluid-container">
           <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Marchandiser Dashboard</h1>
            </div>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <MarchanSidebar></MarchanSidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <div className="row">
                        {
                            orders && orders.map((order) => {
                            
                               return <div className="col-md-12 col-sm-12">
                                <table class="table table-primary table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="" scope="col">Buyer Email</th>
                                            <th className="" scope="col">Product Name</th>
                                            <th className="" scope="col">Color</th>
                                            <th className="" scope="col">Measurement</th>
                                            <th className="" scope="col">Quantity</th>
                                            <th className="" scope="col">Total Amount</th>
                                            <th className="" scope="col">Order Date</th>
                                            <th className="" scope="col">Delivery Date</th>
                                            <th className="" scope="col">Status</th>
                                            <th className="" scope="col">Payment Status</th>
                                            <th className="" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        {/* onClick={onSelect} id={order.id} key={order.id} */}
                                        <td className="">{order.email}</td>
                                            <td className="">{order.productName}</td>
                                            <td className="">{order.color}</td>
                                            <td className="">{order.measurement}</td>
                                            <td className="">{order.quantity} pieces</td>
                                            <td className="">{order.totalAmount} Tk</td>
                                            <td className="">{(new Date(order.orderDate).toDateString("dd/MM/yyyy"))}</td>
                                            <td className="">{(new Date(order.deliveryDate).toDateString("dd/MM/yyyy"))}</td>
                                            <td className="">{order.status}</td>
                                            <td className="">{order.payment_status}</td>
                                            <td>
                                              {
                                               order.status==="Confirmed"?<></>: <button onClick={() => handleRejectBtn(order.id)} className="btn btn-info m-2">Reject</button>
                                              }
                                        
                                        <button onClick={() => handleConfirmBtn(order.id)} className="btn btn-success m-2">Confirm</button>
                                        <button onClick={() => handlePaymentBtn(order.id)} className="btn btn-danger m-2">Recieve Payment</button>
                                    </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            } )
                        }
                    </div>
                </div>
            </div>
        </section>
    //     <div>
    //         <h1>Time and Cost</h1>
    //         {/* <p>{JSON.stringify(samples)}</p> */}


    // {orders && orders.map((item)=>{
    //     return <img style={{ width:"100px", height:"100px",margin:"20px"}} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'}alt="" />
            
    // })}

    //     <button onClick={onSubmit}> submit</button>

    //     </div>
    );
};

export default OrderStatus;