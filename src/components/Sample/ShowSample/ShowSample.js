import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SampleSidebar from '../SampleSidebar/SampleSidebar';

const ShowSample = () => {
    const [samples, setSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sample')
            .then(res => res.json())
            .then(data => setSamples(data))
    }, [])
    return (
        <section className="fluid-container">
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Sample Dashboard</h1>
            </div>
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
              <SampleSidebar></SampleSidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        samples.map(sample => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                    <th className="w-25" scope="col">Image</th>
                                        <th className="w-25" scope="col">Measurement</th>
                                        <th className="w-25" scope="col">Fabric</th>
                                        <th className="w-25" scope="col">Feedback</th>
                                        <th className="w-25" scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className=""><img style={{width:"150px",height:"150px"}} src={sample.image} alt=""/></td>
                                        <td className="">{sample.measurement}</td>
                                        <td className="">{sample.fabric}</td>
                                        <td className="">{sample.feedback}</td>
                                        <td><button className="m-5  btn btn-danger"><Link to ={`/addFSampleImg/${sample.id}`} className = "text-white">Add Image</Link> </button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default ShowSample;