import axios from 'axios';
import React, { useState } from 'react';
import { storage } from "../../firebase";
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';

const ProductionImg = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [data, setData] = useState({
        productname:"",
        color:"",
        quantity: "",
      measurement:"",
      img_url: ""
    })
  
    const onChangeData = (e) => {
      console.log(e.target.name, "----", e.target.value)
      setData({ ...data, [e.target.name]: e.target.value })
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
              setData({ ...data, 'img_url': url })
            });
        }
      );
    };
const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/addFProImg', data)
        console.log(res.data);
        if (res.data) {
          alert("Product info added successfully")
        }
      } catch (e) {
        console.log(e);
      }
    }
    return (
        <section className="container-fluid  " >
        <h1>Production Dashboard</h1>
        <div className="row">
          <div className="col-md-2">
            <ProductionSidebar></ProductionSidebar>
          </div>
          <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add Product</h5>
            
              <progress value={progress} max="100" />
              <br />
              <br />
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload}>Upload</button>
              <br />
              <br />
              <img style={{ height: "100px", width: "100px" }} src={data.img_url || "http://via.placeholder.com/300"} alt="firebase-image" />
              <br />
              <br />
              <label for="exampleInputName">Product Name</label>
                <input onChange={onChangeData} type="text" class="form-control" name="productname" placeholder=" product name" />
              <label for="exampleInputName">Measurement</label>
                <input onChange={onChangeData} type="text" class="form-control" name="measurement" placeholder=" product measurement" />
                <label for="exampleInputName">Color</label>
                <input onChange={onChangeData} type="text" class="form-control" name="color" placeholder=" product color" />
                <label for="exampleInputName">Quantity</label>
                <input onChange={onChangeData} type="text" class="form-control" name="quantity" placeholder=" product quantity" />
                <br/>
              <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
          </div>
        </div>
      </section>
    );
};

export default ProductionImg;