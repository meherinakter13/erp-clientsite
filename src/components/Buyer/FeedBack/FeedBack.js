import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';

const FeedBack = () => {
    let { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const[samples,setSamples] = useState({})
  const [feedback,setFeedback]=useState("")

    useEffect(() => {
      fetch(`http://localhost:5000/sample/${id}`)
          .then(res => res.json())
          .then(data => setSamples(data[0]))
  }, [])

  const updatefeedback = () => {
    fetch(`http://localhost:5000/sample/${id}`)
        .then(res => res.json())
        .then(data => setSamples(data[0]))
}

    const onChangeValue = (e) => {
        console.log(e.target.name, "----", e.target.value)
        setFeedback(e.target.value)
      }
// console.log(samples)
      const handleFeedback = async(e) => {
        e.preventDefault();
        const updatedFeedback = {
            feedback: feedback || samples.feedback
        };
        // e.preventDefault()
        try {
            const res= await axios.put(`/updatefeedback/${id}`,updatedFeedback)
          console.log(res.data);
          if (res.data) {
            alert("Feedback added successfully.")
            updatefeedback();
          }
        } catch (e) {
          console.log(e);
        }
      }
    //   const handleFeedbackSubmit = (e) => {
    //     e.preventDefault();
    // } 
    return (
        <section>
             <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Buyer Dashboard</h1>
            </div>
            <div className="fluid-container row ">
            <div className="col-md-2">
                <BuyerSidebar></BuyerSidebar>
            </div>
            <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Feedback</h5>
                <form onSubmit={handleFeedback} >
                    <div class="form-group">
                        <label for="exampleInputName">FeedBack</label>
                        <textarea onChange={onChangeValue} defaultValue={samples.feedback} rows="5" type="text" class="form-control" name="feedback" placeholder=" Enter your feedback" />
                    </div>
                    <br />
                    <input class="btn btn-primary" type="submit" value="Add feedback"/>
                </form>
            </div>
            </div>
        </section>
    );
};

export default FeedBack;