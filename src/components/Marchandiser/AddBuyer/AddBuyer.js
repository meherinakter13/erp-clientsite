import axios from 'axios';
import React, { useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const AddBuyer = () => {
    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/addUser', user)
            console.log(res.data);

            if (res.data) {

                alert("Buyer added successfully")

            }
            if (res.data.email) {
                alert("buyer added successfully")
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (

        <section>
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Marchandiser Dashboard</h1>
            </div>
            <div className="fluid-container row ">
                <div className="col-md-2">
                    <MarchanSidebar></MarchanSidebar>
                </div>
                <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Buyer</h5>
                    <form onSubmit= {handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input onChange={onChange} type="text" class="form-control" name="name" placeholder="Enter Buyer Name" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Designation</label>
                            <input onChange={onChange} type="text" class="form-control" name="designation" placeholder="Enter buyer designation" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Role</label>
                            <input onChange={onChange} type="text" class="form-control" name="department" placeholder="Enter role" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input onChange={onChange} type="email" class="form-control" name="email" placeholder="Enter buyer email" required/>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input onChange={onChange} type="password" class="form-control" name="password" placeholder="Enter buyer password" required/>
                        </div>
                        <br />
                        <input class="btn btn-primary" type="submit" value="Add Buyer"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBuyer;