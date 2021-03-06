import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CADSidebar from '../CADSidebar/CADSidebar';
import { Link } from 'react-router-dom';

const ManageQntyFab = () => {
    const [samples, setSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_smaple')
            .then(res => res.json())
            .then(data => setSamples(data))
    }, [])

    const deleteProduct = () => {
        fetch(`http://localhost:5000/get_all_smaple`)
            .then(res => res.json())
            .then(data => setSamples(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteQntyFab/${id}`, samples)
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
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>CAD Dashboard</h1>
            </div>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <CADSidebar></CADSidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <table class="table table-primary col-md-12 col-sm-12">
                        <thead>
                            <tr>
                                <th className="w-50" scope="col">Quantity of fabric</th>
                                <th className="w-50" scope="col">Action</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="row">
                        {
                            samples.map(sample => <div className="col-md-12 col-sm-12">
                                <table class="table table-primary">
                                    <tbody>
                                        <tr>
                                            <td className="w-55">{sample.qnty_fabric} meter</td>
                                            <td className="w-50">
                                            <button className="btn btn-danger mt-3 mr-2"><Link to ={`/editSaQnty/${sample.id}`}className="text-white">Edit</Link></button>
                                                <button className="btn btn-danger mt-3" onClick={() => handleDelete(sample.id)}>Delete</button></td>
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

export default ManageQntyFab;