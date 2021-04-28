import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IESidebar from '../IESidebar/IESidebar';

const ManageTimeCost = () => {
    const [samples ,setSamples] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/timeCost')
        .then(res =>res.json())
        .then(data => setSamples(data))
    },[])

    const deleteProduct = () => {
        fetch(`http://localhost:5000/timeCost`)
            .then(res => res.json())
            .then(data => setSamples(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteTimeCost/${id}`, samples)
            console.log(res.data);

            if (res.data) {
                alert("Time Cost deleted successfully")
                deleteProduct();
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="fluid-container">
        <h1>IE Dashboard</h1>
     <div className="row mx-0">
         <div className='col-md-2 p-0'>
           <IESidebar></IESidebar>
         </div>
         <div className="col-md-10 p-4 mx-auto">
        <table class="table table-primary col-md-12 col-sm-12">
         <thead>
             <tr>
             <th className="w-25" scope="col">Time</th>
             <th className="w-50" scope="col">Cost</th>
             <th className="w-25" scope="col">Action</th>
             </tr>
         </thead>
     </table>
  <div className="row">
     {
         samples.map(sample=><div className="col-md-12 col-sm-12">
             <table class="table table-primary">
                 <tbody>
                     <tr>
                     <td className="w-25">{sample.timing}</td>
                     <td className="w-25">{sample.costing}</td>
                     <td className=""><button className ="btn btn-danger mt-3">Edit</button></td>
                     <td className=""><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(sample.id)}>Delete</button></td>
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

export default ManageTimeCost;