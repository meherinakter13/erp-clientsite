import React, { useContext, useState } from 'react';
import { storage } from "../../firebase";
import axios from 'axios';
import BuyerSidebar from '../BuyerSidebar/BuyerSidebar';
import { UserContext } from '../../../App';

const SampleInfo = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    measurement: "",
    fabric: "",
    img_url: "",
    email:loggedInUser.email
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
      const res = await axios.post('/upload', data)
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
    <section className="fluid-container" >
       <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>Buyer Dashboard</h1>
            </div>
      <div className="row">
        <div className="col-md-2">
          <BuyerSidebar></BuyerSidebar>
        </div>
        <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
          <h5 className="text-brand">Add Sample</h5>
          <form action="" onSubmit ={handleSubmit}>
          
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} required />
            <button className="btn btn-success" onClick={handleUpload}>Upload</button>
            <br />
            <br />
            <img style={{ height: "100px", width: "100px" }} src={data.img_url || "http://via.placeholder.com/300"} alt="" />
            <br />
            <br />
            <label for="exampleInputName">Measurement</label>
            <input onChange={onChangeData} type="text" class="form-control" name="measurement" placeholder=" sample measurement" required />
            <label for="exampleInputEmail1">Fabric Type</label>
            <input onChange={onChangeData} type="text" class="form-control" name="fabric" placeholder="Enter fabric type" required />
            <br/>
            <input class="btn btn-primary" type="submit" value="Submit"/>
            </form>
        </div>
      </div>
    </section>
  );
};

export default SampleInfo;