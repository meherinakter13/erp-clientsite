import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';
import { useParams } from 'react-router-dom';

const ManageSample = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { id } = useParams();
    const [finaSamples, setFinaSamples] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/get_all_smaples/${id}`)
            .then(res => res.json())
            .then(data =>{
                data.map(data => setFinaSamples(data[0]))
            })
               
    }, [])
    const [samples, setSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/samples?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setSamples(data))
    }, [])


    return (
        <div className="fluid-container">
            <div style={{ border: "3px solid #076270" }} className="text-center">
                <h1>Buyer Dashboard</h1>
            </div>
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <BuyerSidebar></BuyerSidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <table class="table table-primary col-md-12 col-sm-12">
                        <thead>
                            <tr>
                                <th className="w-25" scope="col">Measurement</th>
                                <th className="w-25" scope="col">Fabric</th>
                                <th className="w-25" scope="col">Image</th>
                                {/* <th className="w-25" scope="col">Action</th> */}
                                <th className="w-25" scope="col">Feedback</th>
                                <th className="w-25" scope="col">View Final sample</th>

                            </tr>
                        </thead>
                    </table>
                    <div className="row">
                        {
                            samples.map(sample => <div className="col-md-12 col-sm-12">
                                <table class="table table-primary">
                                    <tbody>
                                        <tr>
                                            <td className="w-25">{sample.measurement}</td>
                                            <td className="w-25">{sample.fabric}</td>
                                            <td className="w-25"><img style={{ width: "150px", height: "150px" }} src={sample.image} alt="" /></td>
                                            {/* <td className="w-25"><button className ="btn btn-danger mt-3" onClick = {()=>handleDelete(sample.id)}>Delete</button></td> */}
                                            <td className="w-25">

                                                {
                                                    finaSamples ? <button className="btn btn-danger mt-3"><Link to={`/feedback/${sample.id}`} className="text-white">Feedback</Link></button> : <></>
                                                }
                                            </td>

                                            <td className="w-25"><button className="btn btn-danger mt-3"><Link to={`/viewFiSample/${sample.id}`} className="text-white">view Final Sample</Link></button></td>
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