import axios from 'axios';
import React, { useState } from 'react';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';

const AddBuyer = () => {
    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
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
        // <div>
        //     <input onChange={onChange} name="name" placeholder="name" />
        //     <input onChange={onChange} name="designation" placeholder="designation" />
        //     <input onChange={onChange} name="department" placeholder="department" />
        //     <input onChange={onChange} name="email" placeholder="email" />
        //     <input onChange={onChange} name="password" placeholder="password" />
        //     <button onClick={onSubmit}>Sign UP</button>
        // </div>
    <section className="container-fluid row " >

    <div className="col-md-2">
        <MarchanSidebar></MarchanSidebar>
    </div>
    <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
        <h5 className="text-brand">Add Buyer</h5>
        <form>
            <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input onChange={onChange} type="text" class="form-control" name="name" placeholder="Enter Buyer Name" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Designation</label>
                <input onChange={onChange} type="text" class="form-control" name="designation" placeholder="Enter buyer designation" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Role</label>
                <input onChange={onChange} type="text" class="form-control" name="department" placeholder="Enter role" />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input onChange={onChange} type="email" class="form-control" name="email" placeholder="Enter buyer email" />
            </div>
        
            <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input onChange={onChange} type="password" class="form-control" name="password" placeholder="Enter buyer password" />
            </div>
            <br />
            <button onClick={onSubmit} class="btn btn-primary">Add Buyer</button>
        </form>
    </div>
</section>
);
};

export default AddBuyer;