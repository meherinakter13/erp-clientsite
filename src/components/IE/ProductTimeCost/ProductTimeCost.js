import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductTimeCost = () => {
    const [products,setSProducts]=useState()
    const [time,setTime]=useState(0)
    const [cost,setCost]=useState(0)
    const [p_id,setid]=useState(-1)

    useEffect(()=>{
        const load=async()=>{
            const res=await axios.get('/fProduct')
            setSProducts(res.data)
        }
        load()
    },[])

    const onSelect= (e)=>{
        const id=e.target.id
        setid(id)
    }

    const onSubmit=async()=>{
        const IE={
            timing:time,
            costing:cost,
            smaple_id:-1,
            production_id:p_id
        }

       const res= await axios.post('/addFProTime',IE)
       if(res.data){
           alert("added time and cost")
       }
       console.log(res.data)
    }
    return (
        <div>
            <h1>Time and Cost</h1>
            {/* <p>{JSON.stringify(samples)}</p> */}


    {products && products.map((item)=>{
        return <img style={{ width:"100px", height:"100px",margin:"20px"}} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'}alt="" />
            
    })}

        <input type="text" onChange={(e)=>setTime(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" onChange={(e)=>setCost(e.target.value)}/>

        <button onClick={onSubmit}> submit</button>

        </div>
    );
};

export default ProductTimeCost;