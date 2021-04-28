import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';

const ManageProImg = () => {
    const [products ,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/fProduct')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])

    const deleteProduct = () => {
        fetch(`http://localhost:5000/fProduct`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteProImg/${id}`, products)
            console.log(res.data);

            if (res.data) {
                alert("Product info deleted successfully")
                deleteProduct();
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="fluid-container">
        <h1>Production Dashboard</h1>
     <div className="row mx-0">
         <div className='col-md-2 p-0'>
           <ProductionSidebar></ProductionSidebar>
         </div>
         <div className="col-md-10 p-4 mx-auto">
        <table class="table table-primary col-md-12 col-sm-12">
         <thead>
             <tr>
             <th className="w-25" scope="col">Product Name</th>
             <th className="w-25" scope="col">Image</th>
             <th className="w-25" scope="col">Measurement</th>
             <th className="w-25" scope="col">Color</th>
             <th className="w-25" scope="col">Quantity</th>
             <th className="w-50" scope="col">Action</th>
             </tr>
         </thead>
     </table>
  <div className="row">
     {
         products.map(product=><div className="col-md-12 col-sm-12">
             <table class="table table-primary">
                 <tbody>
                     <tr>
                     <td className="w-25">{product.productname}</td>
                     <td className="w-25"><img style={{width:"150px",height:"150px"}} src={product.image} alt=""/></td>
                     <td className="w-25">{product.measurement}</td>
                     <td className="w-25">{product.color}</td>
                     <td className="w-25">{product.quantity}</td>
                     <td className="w-25"><button className ="btn btn-danger mt-3">Edit</button></td>
                     <td className="w-25"><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(product.id)}>Delete</button></td>
                     </tr>
                 </tbody>
             </table>
             </div>)
     }
 </div>
 </div>
 </div>
 </div>

    );
};

export default ManageProImg;