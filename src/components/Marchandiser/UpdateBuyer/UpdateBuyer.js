import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarchanSidebar from '../MarchanSidebar/MarchanSidebar';


const UpdateBuyer = () => {
    let { id } = useParams();
       const [name, setName] = useState("")
       const [designation, setDesignation] = useState("")
       const [department, setDepartment] = useState("")
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")

   
        useEffect(() => {
            fetch(`http://localhost:5000/buyer/${id}`)
                .then(res => res.json())
                .then(data => {
                    setName(data[0].name)
                    setDesignation(data[0].designation)
                    setDepartment(data[0].department)
                    setEmail(data[0].email)
                    setPassword(data[0].password)
                    console.log(data[0])
                   
                })
              
        }, [])
        const updateQnt = () => {
            fetch(`http://localhost:5000/buyer/${id}`)
                .then(res => res.json())
                .then(data => {
                    setName(data[0].name)
                    setDesignation(data[0].designation)
                    setDepartment(data[0].department)
                    setEmail(data[0].email)
                    setPassword(data[0].password)
                })
        }
        
  
          const handleQnty = async(e) => {
            e.preventDefault();
            const updatedFeedback = {
                name: name,
                designation: designation,
                department: department,
                email: email,
                password: password

            };
            // e.preventDefault()
            try {
                const res= await axios.put(`/updatebuyer/${id}`,updatedFeedback)
              console.log(res.data);
              if (res.data) {
                alert("Buyer updated successfully")
                updateQnt();
              }
            } catch (e) {
              console.log(e);
            }
          }
          const handleFeedbackSubmit = (e) => {
            e.preventDefault();
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
               <h5 className="text-brand">Update Buyer</h5>
               <form onSubmit= {handleQnty}>
                   <div class="form-group">
                       <label for="exampleInputName">Name</label>
                       <input onChange={(e) => setName(e.target.value)} defaultValue={name} type="text" class="form-control" name="name" placeholder="Enter Buyer Name" required/>
                   </div>
                   <div class="form-group">
                       <label for="exampleInputEmail1">Designation</label>
                       <input onChange={(e) => setDesignation(e.target.value)} defaultValue={designation} type="text" class="form-control" name="designation" placeholder="Enter buyer designation" required/>
                   </div>
                   <div class="form-group">
                       <label for="exampleInputEmail1">Role</label>
                       <input onChange={(e) => setDepartment(e.target.value)} defaultValue={department} type="text" class="form-control" name="department" placeholder="Enter role" required/>
                   </div>
                   <div class="form-group">
                       <label for="exampleInputEmail1">Email</label>
                       <input onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="email" class="form-control" name="email" placeholder="Enter buyer email" required/>
                   </div>

                   <div class="form-group">
                       <label for="exampleInputEmail1">Password</label>
                       <input onChange={(e) => setPassword(e.target.value)} defaultValue={password} type="password" class="form-control" name="password" placeholder="Enter buyer password" required/>
                   </div>
                   <br />
                   <input class="btn btn-primary" type="submit" value="Update Buyer"/>
               </form>
           </div>
       </div>
   </section>
    );
};

export default UpdateBuyer;