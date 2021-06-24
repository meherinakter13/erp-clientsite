import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from "../../firebase";
import SampleSidebar from '../SampleSidebar/SampleSidebar';

const SampleImg = () => {
  let { id } = useParams();
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [data, setData] = useState({
      measurement:"",
      img_url: "",
      feedbackk:""
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
        const res = await axios.post(`/addFSampleImg/${id}`, data)
        console.log(res.data);
        if (res.data) {
          e.target.reset();
          alert("Sample info added successfully")
        }
      } catch (e) {
        console.log(e);
      }
    }
    return (
        <section className="fluid-container  " >
         <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Sample Dashboard</h1>
            </div>
        <div className="row">
          <div className="col-md-2">
            <SampleSidebar></SampleSidebar>
          </div>
          <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add Sample</h5>
            <form onSubmit={handleSubmit}>
              <progress value={progress} max="100" />
              <br />
              <br />
              <input type="file" onChange={handleChange} required/>
              <button onClick={handleUpload}>Upload</button>
              <br />
              <br />
              <img style={{ height: "100px", width: "100px" }} src={data.img_url || "http://via.placeholder.com/300"} alt="firebase-image" />
              <br />
              <br />
              <label for="exampleInputName">Measurement</label>
            <input onChange={onChangeData} type="text" class="form-control" name="measurement" placeholder=" sample measurement" required/>
            <br />
              <input  class="btn btn-danger" type="submit" value="Submit"/>
              </form>
          </div>
        </div>
      </section>
    );
};

export default SampleImg;