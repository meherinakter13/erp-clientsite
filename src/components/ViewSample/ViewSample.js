import React, { useEffect, useState } from 'react';


const ViewSample = () => {
    const [samples, setSamples] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sample')
            .then(res => res.json())
            .then(data => setSamples(data))
    }, [])
    return (
        <section className="fluid-container">
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
              
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        samples.map(sample => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                        <th className="w-25" scope="col">Measurement</th>
                                        <th className="w-25" scope="col">Fabric</th>
                                        <th className="w-25" scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="">{sample.measurement}</td>
                                        <td className="">{sample.fabric}</td>
                                        <td className=""><img style={{width:"150px",height:"150px"}} src={sample.image} alt=""/></td>
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

export default ViewSample;