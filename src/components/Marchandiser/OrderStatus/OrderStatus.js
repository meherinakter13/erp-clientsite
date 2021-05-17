import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const OrderStatus = () => {
    const [orders,setOrders]=useState()
    const [o_id,setid]=useState(-1)

    useEffect(()=>{
        const load=async()=>{
            const res=await axios.get('/order')
            setOrders(res.data)
        }
        load()
    },[])
    // const statusUpdated = () => {
    //     fetch('http://localhost:5000/status')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }
    
        // useEffect(()=>{
        //     const showStatus=async()=>{
        //         const res=await axios.get('/status')
        //         setOrders(res.data)
        //     }
        //     showStatus()
        // },[])
    
    
    
    const onSelect= (e)=>{
        const id=e.target.id
        setid(id)
    }

    const onSubmit=async()=>{
        const orderStatus={
            status: "confirm",
            order_id: o_id
        }

       const res= await axios.post('/addStatus',orderStatus)
       if(res.data){
           alert("Do you want to confirm?")
          
       }
       console.log(res.data)
    }
    return (
        <section className="fluid-container">
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
                                            <th className="" scope="col">Product Name</th>
                                            <th className="" scope="col">Color</th>
                                            <th className="" scope="col">Measurement</th>
                                            <th className="" scope="col">Quantity</th>
                                            <th className="" scope="col">Total Amount</th>
                                            <th className="" scope="col">Order Date</th>
                                            <th className="" scope="col">Delivery Date</th>
                                            <th className="" scope="col">Status</th>
                                            <th className="" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=""onClick={onSelect} id={order.id} key={order.id}>{order.productName}</td>
                                            <td className="">{order.color}</td>
                                            <td className="">{order.measurement}</td>
                                            <td className="">{order.quantity}</td>
                                            <td className="">{order.totalAmount}</td>
                                            <td className="">{order.orderDate}</td>
                                            <td className="">{order.deliveryDate}</td>
                                            <td className="">{order.status}</td>
                                            <button onClick={onSubmit}>Confirm</button>
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