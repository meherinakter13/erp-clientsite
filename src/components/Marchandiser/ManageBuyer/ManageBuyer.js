import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const ManageBuyer = () => {
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/buyers`)
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [])

    const deleteBuyer = () => {
        fetch(`http://localhost:5000/buyers`)
            .then(res => res.json())
            .then(data => setBuyers(data))
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/deleteBuyer/${id}`, buyers)
            console.log(res.data);

            if (res.data) {
                alert("Buyer deleted successfully")
                deleteBuyer();
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <section className="fluid-container">
        <h1>Marchandiser Dashboard</h1>
        <div className="row mx-0">
            <div className='col-md-2 p-0'>
                <MarchanSidebar></MarchanSidebar>
            </div>
            <div className="col-md-10 p-4 mx-auto">
                <div className="row">
                    {
                        buyers.map(buyer => <div className="col-md-12 col-sm-12">
                            <table class="table table-primary table-bordered">
                                <thead>
                                    <tr>
                                        <th className="" scope="col">Name</th>
                                        <th className="" scope="col">Designation</th>
                                        <th className="" scope="col">Role</th>
                                        <th className="" scope="col">Email</th>
                                        <th className="" scope="col">Password</th>
                                        <th className="" scope="col">Acton</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="">{buyer.name}</td>
                                        <td className="">{buyer.designation}</td>
                                        <td className="">{buyer.department}</td>
                                        <td className="">{buyer.email}</td>
                                        <td className="">{buyer.password}</td>
                                        <td className=""><button className="btn btn-danger mt-3 mr-2">Edit</button>
                                            <button className="btn btn-danger mt-3" onClick={() => handleDelete(buyer.id)}>Delete</button></td>
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

export default ManageBuyer;