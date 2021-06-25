import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CADSidebar from '../CADSidebar/CADSidebar';

const UpdateQnty = () => {
       let { id } = useParams();
    //    const [samples, setSamples] = useState({});
       const [qnty_fabric, setQ] = useState("")
    //    const [s_id, setid] = useState(setQ.sample_id)
         // supplier--------------
   
        useEffect(() => {
            fetch(`http://localhost:5000/qntyFab/${id}`)
                .then(res => res.json())
                .then(data => {
                    setQ(data[0].qnty_fabric)
                    console.log(data[0])
                   
                })
              
        }, [])
        const updateQnt = () => {
            fetch(`http://localhost:5000/qntyFab/${id}`)
                .then(res => res.json())
                .then(data => {
                    setQ(data[0].qnty_fabric)
                })
        }
        
  
          const handleQnty = async(e) => {
            e.preventDefault();
            const updatedFeedback = {
                qnty_fabric: qnty_fabric
            };
            // e.preventDefault()
            try {
                const res= await axios.put(`/updateSaQnty/${id}`,updatedFeedback)
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
            <h1>CAD Dashboard</h1>
            </div>
            <div className="row">
            <div className="col-md-3">
                <CADSidebar></CADSidebar>
            </div>
            <div className="col-md-9 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4>Update Quantity of fabric for Sample</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}
<form onSubmit={handleQnty}>

                {/* {samples && samples.map((item) => {
                    //item.image
                    return <img style={{ width: "100px", height: "100px", margin: "20px" }} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} alt="" />

                })} */}

                <br /><br />
                <label htmlFor="">Quantity of fabric</label>
                <br />
                <input type="number"defaultValue={qnty_fabric}  min ="1" onChange={(e) => setQ(e.target.value)}required/>

                <br /><br />
                {/* <button onClick={handleQnty} class="btn btn-primary"  type="submit" value="Add Supplier">Update</button> */}

                <input type="submit" class="btn btn-danger"value="Update"/> 
                </form>
            </div>
            </div>
        </section>
    );
};

export default UpdateQnty;