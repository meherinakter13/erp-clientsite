import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FinalSample = () => {
    const [samples ,setSamples] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/sample')
        .then(res =>res.json())
        .then(data => setSamples(data))
    },[])
    
    return (
        <section className="container">
           <h1 className="text-center text-info">All Sample List</h1>
        <div className="row mx-0">
            <div className=''>
             
            </div>
            <div className="col-md-12 p-4 mx-auto">
           <table class="table table-primary col-md-12 col-sm-12">
            <thead>
                <tr>
                <th className="w-25" scope="col">Image</th>
                <th className="w-25" scope="col">Measurement</th>
                <th className="w-25" scope="col">Fabric</th>
                <th className="w-25" scope="col">Feedback</th>
                <th className="w-25" scope="col">View Final sample</th>

                </tr>
            </thead>
        </table>
     <div className="row">
        {
            samples.map(sample=><div className="col-md-12 col-sm-12">
                <table class="table table-primary">
                    <tbody>
                        <tr>
                        <td className="w-25"><img style={{width:"150px",height:"150px"}} src={sample.image} alt=""/></td>
                        <td className="w-25">{sample.measurement}</td>
                        <td className="w-25">{sample.fabric}</td>
                        <td className="w-25">{sample.feedback}</td>
                        <td className="w-25"><button className ="btn btn-danger mt-3"><Link to ={`/viewFiSample/${sample.id}`}className="text-white">view Final Sample</Link></button></td>
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
export default FinalSample;