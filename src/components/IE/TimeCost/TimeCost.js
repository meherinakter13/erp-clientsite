import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TimeCost = () => {
    const [samples,setSamples]=useState()
    const [time,setTime]=useState(0)
    const [cost,setCost]=useState(0)
    const [s_id,setid]=useState(-1)

    useEffect(()=>{
        const load=async()=>{
            const res=await axios.get('/fSample')
            setSamples(res.data)
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
            smaple_id:s_id,
            production_id:-1
        }

        //console.log(q)
       const res= await axios.post('/addFSampleTime',IE)
       if(res.data){
           alert("added time and cost")
       }
       console.log(res.data)
    }

    return (
        <div>
            <h1>qnty fabric</h1>
            {/* <p>{JSON.stringify(samples)}</p> */}


    {samples && samples.map((item)=>{
        //item.image
        return <img style={{ width:"100px", height:"100px",margin:"20px"}} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} />
            
    })}

        <input type="text" onChange={(e)=>setTime(e.target.value)}/>
        <br/>
        <br/>
        <input type="text" onChange={(e)=>setCost(e.target.value)}/>

        <button onClick={onSubmit}> submit</button>

        </div>
    );
};

export default TimeCost;