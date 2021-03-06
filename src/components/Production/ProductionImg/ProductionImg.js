import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from "../../firebase";
import ProductionSidebar from '../ProductionSidebar/ProductionSidebar';
import { useHistory } from 'react-router';

const ProductionImg = () => {
  let { id } = useParams();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    productname: "",
    color: "",
    quantity: "",
    measurement: "",
    img_url: ""
  })
  const history = useHistory();
  const [products ,setProducts] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/get_all_product_img')
      .then(res =>res.json())
      .then(data => {
        setProducts(data)
        if(data.filter(item=>item.p_id==id).length>0){
          alert("You have already added the final Product.")
          history.push('/showOrder')
          //you have already added the sample
        }
        console.log(id)
        console.log(data)
      })
  },[])

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
      if(products.filter(item=>item.p_id==id).length>0){
        //alert("fgvjhv")
        //you have already added the sample
      }else{
        const res = await axios.post(`/addFProImg/${id}`, data)
      console.log(res.data);
      if (res.data) {
        e.target.reset();
        alert("Product info added successfully")
      }

      }
      
    } catch (e) {
      console.log(e);
    }
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
          <h5 className="text-brand">Add Product</h5>
          <form onSubmit={handleSubmit}>
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} required />
            <button className="btn btn-info"onClick={handleUpload}>Upload</button>
            <br />
            <br />
            <img style={{ height: "100px", width: "100px" }} src={data.img_url || "http://via.placeholder.com/300"} alt="firebase-image" />
            <br />
            <br />
            <label for="exampleInputName">Product Name</label>
            <input onChange={onChangeData} type="text" class="form-control" name="productname" placeholder=" product name" required />
            <label for="exampleInputName">Measurement</label>
            <input onChange={onChangeData} type="text" class="form-control" name="measurement" placeholder=" product measurement" required />
            <label for="exampleInputName">Color</label>
            <input onChange={onChangeData} type="text" class="form-control" name="color" placeholder=" product color" required />
            <br />
            <input type="submit" className="btn btn-danger" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductionImg;