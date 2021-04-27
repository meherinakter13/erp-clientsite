
import React, { useState } from 'react';

import { storage } from "../../firebase";
import axios from 'axios';

const SampleInfo = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [data,setData]=useState({
      measurement:"",
      fabric:"",
      img_url:""
    })

  const onChangeData=(e)=>{
      console.log(e.target.name,"----",e.target.value)
      setData({...data,[e.target.name]:e.target.value})
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
            setData({...data,'img_url':url})
          });
      }
    );
  };

    const handleSubmit =async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('/upload', data)
            console.log(res.data);
            if (res.data) {
                alert("Sample info added successfully")
            }
        } catch (e) {
            console.log(e);
        }
        }
   
    return (
        <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        <br />
        <img style={{height:"100px",width:"100px"}} src={data.img_url || "http://via.placeholder.com/300"} alt="firebase-image" />
        <label for="exampleInputName">Name</label>
                        <input onChange ={onChangeData} type="text" class="form-control" name="measurement" placeholder=" Service name" />
                        <label for="exampleInputEmail1">fabric</label>
                       <input onChange ={onChangeData} type="text" class="form-control" name="fabric" placeholder="Enter description" />
                       <button onClick={handleSubmit}>Add</button>   
      </div>
        // <section className="container-fluid row " >
        //     <div className="col-md-2">
                
        //     </div>
        //     <div className="col-md-10 p-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
        //         <h5 className="text-brand">Add Services</h5>
        //         <form >
        //             <div class="form-group">
        //                 <label for="exampleInputName">Name</label>
        //                 <input onBlur ={handleBlur} type="text" class="form-control" name="measurement" placeholder=" Service name" />
        //             </div>
        //             <div class="form-group">
        //                 <label for="exampleInputEmail1">fabric</label>
        //                 <input onBlur ={handleBlur} type="text" class="form-control" name="fabric" placeholder="Enter description" />
        //             </div>
        //             <div class="form-group">
        //                 <label for="exampleInputFile">Upload a image</label>
        //                 <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputFile" placeholder="Picture" />
        //             </div>
        //             <br/>
        //             <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
        //         </form>
        //     </div>
        // </section>
    );
};

export default SampleInfo;