import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IESidebar from '../IESidebar/IESidebar';


const UpdatePTime = () => {
    let { id } = useParams();
       const [timing, setTime] = useState("")
       const [costing, setCost] = useState("")

   
        useEffect(() => {
            fetch(`http://localhost:5000/timeCost/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTime(data[0].timing)
                    setCost(data[0].costing)
                    console.log(data[0])
                   
                })
              
        }, [])
        const updateQnt = () => {
            fetch(`http://localhost:5000/timeCost/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTime(data[0].timing)
                    setCost(data[0].costing)
                })
        }
        
  
          const handleQnty = async(e) => {
            e.preventDefault();
            const updatedFeedback = {
                timing: timing,
                costing: costing
            };
            // e.preventDefault()
            try {
                const res= await axios.put(`/updateSaTime/${id}`,updatedFeedback)
              console.log(res.data);
              if (res.data) {
                alert("Do you want to confirm your feedback?")
                updateQnt();
              }
            } catch (e) {
              console.log(e);
            }
          }
        //   const handleFeedbackSubmit = (e) => {
        //     e.preventDefault();
        // } 
    return (
        <section className="fluid-container row " >
            <div className="col-md-3">
                 <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>IE Dashboard</h1>
            </div>
                <IESidebar></IESidebar>
            </div>
            <div className="col-md-9 mt-5 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4>Update Quantity of fabric for Product</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}
<form onSubmit={handleQnty}>

                {/* {samples && samples.map((item) => {
                    //item.image
                    return <img style={{ width: "100px", height: "100px", margin: "20px" }} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} alt="" />

                })} */}

                <br /><br />
                <label htmlFor="">Quantity of fabric</label>
                <br />
                <input type="number"defaultValue={timing}  min ="1" onChange={(e) => setTime(e.target.value)}required/>

                <br /><br />
                
                <br /><br />
                <label htmlFor="">Quantity of fabric</label>
                <br />
                <input type="number"defaultValue={costing}  min ="1" onChange={(e) => setCost(e.target.value)}required/>

                <br /><br />
                {/* <button onClick={handleQnty} class="btn btn-primary"  type="submit" value="Add Supplier">Update</button> */}

                <input type="submit" class="btn btn-danger"value="Update"/> 
                </form>
            </div>
        </section>
    );
};

export default UpdatePTime;