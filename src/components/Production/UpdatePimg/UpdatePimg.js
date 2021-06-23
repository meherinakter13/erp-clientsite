import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';
import { storage } from "../../firebase";

const UpdatePimg = () => {
    let { id } = useParams();
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0);
    const [measurement, setMeasurement] = useState("")
    const [color, setColor] = useState("")
    const [quantity, setQuantity] = useState("")
    const [productname, setProductname] = useState("")


     useEffect(() => {
         fetch(`http://localhost:5000/fProducts/${id}`)
             .then(res => res.json())
             .then(data => {
                setUrl(data[0].image)
                setMeasurement(data[0].measurement)
                setColor(data[0].color)
                setQuantity(data[0].quantity)
                setProductname(data[0].productname)
                 console.log(data[0])
                
             })
           
     }, [])
     const updateQnt = () => {
         fetch(`http://localhost:5000/fProducts/${id}`)
             .then(res => res.json())
             .then(data => {
                setUrl(data[0].image)
                setMeasurement(data[0].measurement)
                setColor(data[0].color)
                setQuantity(data[0].quantity)
                setProductname(data[0].productname)
             })
     }
     const handleChange = e => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setUrl(url)
              });
          }
        );
      };
     

       const handleQnty = async(e) => {
         e.preventDefault();
         const updatedFeedback = {
            image: url,
            measurement: measurement,
            color: color,
            quantity: quantity,
            productname:productname
         };
         // e.preventDefault()
         try {
             const res= await axios.put(`/updateFProductImg/${id}`,updatedFeedback)
           console.log(res.data);
           if (res.data) {
             alert("Do you want to confirm your feedback?")
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
        <section className="fluid-container  " >
        <div style={{ border: "3px solid #076270" }} className="text-center">
             <h1>Production Dashboard</h1>
             </div>
       <div className="row">
         <div className="col-md-2">
           <ProductionSidebar></ProductionSidebar>
         </div>
         <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
           <h5 className="text-brand">Update Product</h5>
           <form onSubmit={handleFeedbackSubmit}>
             <progress value={progress} max="100" />
             <br />
             <br />
             <input type="file" onChange={handleChange} required />
             <button onClick={handleUpload}>Upload</button>
             <br />
             <br />
             <img style={{ height: "100px", width: "100px" }} src={url} alt="firebase-image" />
             <br />
             <br />
             <label for="exampleInputName">Product Name</label>
             <input onChange={(e) => setProductname(e.target.value)}defaultValue={productname}  type="text" class="form-control" name="productname" placeholder=" product name" required />
             <label for="exampleInputName">Measurement</label>
             <input onChange={(e) => setMeasurement(e.target.value)}defaultValue={measurement}  type="text" class="form-control" name="measurement" placeholder=" product measurement" required />
             <label for="exampleInputName">Color</label>
             <input onChange={(e) => setColor(e.target.value)}defaultValue={color}  type="text" class="form-control" name="color" placeholder=" product color" required />
             <label for="exampleInputName">Quantity</label>
             <br />
             <button onClick={handleQnty} class="btn btn-primary"  type="submit" value="Add Supplier">Update</button>
           </form>
         </div>
       </div>
     </section>
    );
};

export default UpdatePimg;