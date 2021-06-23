import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'
import Define from '../../Define';

const UpdateSupplier = () => {
    let { id } = useParams();
    const [orders, setOrders] = useState([])
    const [supplier, setSupplier] = useState({})
    const [companyName,setCompanyName]=useState(supplier.companyName)
    const [name,setName]=useState(supplier.name)
    const [email,setEmail]=useState(supplier.email)
    const [materialName,setMaterialName]=useState(supplier.materialName)
    const [quantity,setQuantity]=useState(supplier.quantity)
    const [totalAmount,setTotalAmount]=useState(supplier.totalAmount)
    const [orderDate,setOrderDate]=useState(moment(supplier.orderDate).format(Define.SQL_DATE_FORMAT))
    const [deliveryDate,setDeliveryDate]=useState(moment(supplier.deliveryDate).format(Define.SQL_DATE_FORMAT))

        // order-------------------------
       
        useEffect(() => {
            fetch('http://localhost:5000/get_all_orders')
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
   
        useEffect(() => {
            fetch(`http://localhost:5000/supplier/${id}`)
                .then(res => res.json())
                .then(data => {
                    setSupplier(data[0])
                    console.log("here=",data[0].orderDate)
                    console.log((moment(data[0].orderDate).format(Define.SQL_DATE_FORMAT)))
                   setOrderDate(moment(data[0].orderDate).format(Define.SQL_DATE_FORMAT))
                   setDeliveryDate(moment(data[0].deliveryDate).format(Define.SQL_DATE_FORMAT))
                })
              
        }, [])
        const updateSupplier = () => {
            fetch(`http://localhost:5000/supplier/${id}`)
                .then(res => res.json())
                .then(data => {
                    data.map(data => setSupplier(data[0]))
                })
        }
        let totalSpendAmount = 0;
        for (let i = 0; i < supplier.length; i++) {
            const element = parseFloat(supplier[i].totalAmount);
            totalSpendAmount = totalSpendAmount + element;
        }
        console.log(totalSpendAmount)
    
        // remaining Amount
        let remainingAmount = 0;
    
        remainingAmount = totalOrderCost - totalSpendAmount;
    

    const onChangecompany = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setCompanyName(e.target.value)
      }
      const onChangename = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setName(e.target.value)
      }
       const onChangeemail = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setEmail(e.target.value)
      }
      const onChangematerial = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setMaterialName(e.target.value)
      }
      const onChangeqnty = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setQuantity(e.target.value)
      }
      const onChangeamount = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setTotalAmount(e.target.value)
      }


      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let date = new Date().getDate();
      let today = `${year}-0${month}-${date}`
      console.log(today)
  
      const handleOrderDate = (e) => {
       // console.log(e.target.value)

       

        setOrderDate(moment(e.target.value).format(Define.SQL_DATE_FORMAT))
        
        //   const newDates = { orderDate }
  
        //   newDates.orderDate = date;
  
        //   setOrderDate(newDates);
  
      };
      const handleDeliveryDate = (e) => {
  
        setDeliveryDate(moment(e.target.value).format(Define.SQL_DATE_FORMAT))
  
  
      };

      const handleSupplier = async(e) => {
        e.preventDefault();
        const updatedSupplier = {
            companyName: companyName || supplier.companyName,
            name: name || supplier.name,
            email: email || supplier.email,
            materialName: materialName ||supplier.materialName,
            quantity: quantity || supplier.quantity,
            totalAmount: totalAmount || supplier.totalAmount,
            orderDate: orderDate || supplier.orderDate,
            deliveryDate: deliveryDate || supplier.deliveryDate
        };
        // e.preventDefault()
        try {
            const res= await axios.put(`/updateSupplier/${id}`,updatedSupplier)
          console.log(res.data);
          if (res.data) {
            alert("Your material Info has been updated")
            updateSupplier();
          }
        } catch (e) {
          console.log(e);
        }
      }
      const handleSupplierSubmit = (e) => {
        e.preventDefault();
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
                <h5 className="text-brand">Add Supplier Info</h5>
                <form onSubmit={handleSupplierSubmit}>
                    <div class="form-group">
                        <label for="exampleInputName">Company Name</label>
                        <input onChange={onChangecompany} type="text" class="form-control" defaultValue={supplier.companyName} name="companyName" placeholder="Enter companyName" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input onChange={onChangename} type="text" class="form-control"defaultValue={supplier.name}name="name" placeholder="Enter name"required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onChange={onChangeemail} type="email" class="form-control"defaultValue={supplier.email} name="email" placeholder="Enter email"required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Material Name</label>
                        <input onChange={onChangematerial} type="text" class="form-control"defaultValue={supplier.materialName} name="materialName" placeholder="Enter materialName"required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Quantity</label>
                        <input onChange={onChangeqnty} type="number" min="1" class="form-control" defaultValue={supplier.quantity}name="quantity" placeholder="Enter quantity"required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Total Amount</label>
                        <input onChange={onChangeamount} type="number"defaultValue={supplier.totalAmount} min="1" max={remainingAmount} class="form-control" name="totalAmount" placeholder="Enter totalAmount"required />
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <Grid container justify="space-around">
                        {/* 2014-02-09 */}

                        <input type="date" name="orderDate" value={orderDate} minDate={today} onChange={handleOrderDate}  />
                        <input type="date" name="deliveryDate" value={deliveryDate} minDate={today} onChange={handleDeliveryDate}  />
                            {/* <KeyboardDatePicker

                                margin="normal"
                                minDate={today}
                                id="date-picker-dialog"

                                name="orderDate"
                                label="Order Date"

                                format="dd/MM/yyyy"
                                defaultValue={orderDate}
                               
                                value={orderDate}

                                onChange={handleOrderDate}

                                KeyboardButtonProps={{

                                    'aria-label': 'change date',

                                }}

                            /> */}

                            {/* <KeyboardDatePicker

                                margin="normal"

                                id="date-picker-dialog"
                                minDate={today}
                                name="deliveryDate"
                                label="Delivary Date"

                                format="dd/MM/yyyy"
                                defaultValue={deliveryDate}
                                value={deliveryDate}

                                onChange={handleDeliveryDate}

                                KeyboardButtonProps={{

                                    'aria-label': 'change date',

                                }}

                            /> */}

                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br />
                    <button onClick={handleSupplier} class="btn btn-primary" type="submit" value="Add Supplier">Update</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default UpdateSupplier;