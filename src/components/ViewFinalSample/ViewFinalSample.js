import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ViewFinalSample = () => {
    let {id} = useParams();
    const [finaSamples, setFinaSamples] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/get_all_smaples/${id}`)
            .then(res => res.json())
            .then(data => setFinaSamples(data))
    }, [])
    return (
        <section className="fluid-container">
        <div className="row mx-0 text-center">
            {/* <div className='col-md-2 p-0'>
             
            </div> */}
             <h1 className="m-auto text-info">Final Sample</h1>
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
                                        {/* <th className="" scope="col">Feedback</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=""><img style={{width:"150px",height:"150px"}} src={sample.image} alt=""/></td>
                                        <td className="">{sample.measurement}</td>
                                        <td className="">{sample.qnty_fabric} meter</td>
                                        <td className="">{sample.timing} days</td>
                                        <td className="">{sample.costing} Tk</td>
                                        {/* <td className=""><button className ="btn btn-danger mt-3"><Link to ={`/feedback/${sample.s_id}`}className="text-white">Feedback</Link></button></td> */}

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