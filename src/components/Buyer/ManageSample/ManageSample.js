import React, { useEffect, useState } from 'react';

const ManageSample = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/sample')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    // const deleteProduct  = () =>{
    //     fetch(`https://gentle-fjord-82903.herokuapp.com/services`)
    //     .then(res =>res.json())
    //     .then(data => setServices(data))
    //    }
    return (
        <div className="fluid-container">
        
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
             
            </div>
            <div className="col-md-10 p-4 mx-auto">
           <table class="table table-primary col-md-12 col-sm-12">
            <thead>
                <tr>
                <th className="w-25" scope="col">Service Name</th>
                <th className="w-25" scope="col">Description</th>
                <th className="w-25" scope="col">Price</th>
                <th className="w-25" scope="col">Image</th>
                <th className="w-25" scope="col">Action</th>
                </tr>
            </thead>
        </table>
     <div className="row">
        {
            services.map(service=><div className="col-md-12 col-sm-12">
                <table class="table table-primary">
                    <tbody>
                        <tr>
                        <td className="w-25">{service.measurement}</td>
                        <td className="w-25">{service.fabric}</td>
                        <td className="w-25"> {
                            service.image ? <img style={{ height: '100px', width: '100px', marginTop: '10px' }} src={`${service.image}`} alt="" />
                                :
                                <img style={{ height: '120px', width: '120px' }} className="img-fluid mb-3" src={`http://localhost:5000/${service.img}`} alt="" />
                            }</td>
                        {/* <td className="w-25"><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(service._id)}>Delete</button></td> */}
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

export default ManageSample;