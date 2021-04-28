import React, { useEffect, useState } from 'react';

const ViewFinalSample = () => {
    const [finaSamples, setFinaSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get_all_smaples')
            .then(res => res.json())
            .then(data => setFinaSamples(data))
    }, [])
    return (
        <section className="fluid-container">
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
              
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        finaSamples.map(sample => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                        <th className="w-25" scope="col">Image</th>
                                        <th className="w-25" scope="col">Measurement</th>
                                        <th className="w-25" scope="col">Quantity of Fabric</th>
                                        <th className="" scope="col">Time</th>
                                        <th className="" scope="col">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=""><img style={{width:"150px",height:"150px"}} src={sample.image} alt=""/></td>
                                        <td className="">{sample.measurement}</td>
                                        <td className="">{sample.qnty_fabric}</td>
                                        <td className="">{sample.timing}</td>
                                        <td className="">{sample.costing}</td>
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

export default ViewFinalSample;