import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IESidebar from '../IESidebar/IESidebar';


const UpdateSTime = () => {
    let { id } = useParams();
    //    const [samples, setSamples] = useState({});
       const [timing, setTime] = useState("")
       const [costing, setCost] = useState("")
    //    const [s_id, setid] = useState(setQ.sample_id)
         // supplier--------------///get_all_smaples/:id
   
        useEffect(() => {
            fetch(`http://localhost:5000/timeCost/${id}`)
                .then(res => res.json())
                .then(data => {
                    if(data.length>0){
                        setTime(data[0].timing)
                        setCost(data[0].costing)
                    }
                   
                    console.log(data)
                   
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
                alert("Updated successfully")
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
        <section className="fluid-container  " >
        <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>IE Dashboard</h1>
            </div>
            <div className="row">
            <div className="col-md-3">
                <IESidebar></IESidebar>
            </div>
            <div className="col-md-9 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4>Update Time And Cost for Final Sample</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}
<form onSubmit={handleQnty}>


                <br /><br />
                <label htmlFor="">Time</label>
                <br />
                <input type="number"defaultValue={timing}  min ="1" onChange={(e) => setTime(e.target.value)}required/>

                <br /><br />
                <br /><br />
                <label htmlFor="">Cost</label>
                <br />
                <input type="number"defaultValue={costing}  min ="1" onChange={(e) => setCost(e.target.value)}required/>

                <br /><br />
                {/* <button onClick={handleQnty} class="btn btn-primary"  type="submit" value="Add Supplier">Update</button> */}

                <input type="submit" class="btn btn-danger"value="Update"/> 
                </form>
            </div>
            </div>
        </section>
    );
};

export default UpdateSTime;