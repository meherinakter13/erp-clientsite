import axios from 'axios';
import React, { useEffect,useState } from 'react';

const QntyFabric = () => {
    //insert into CAD
    //step 1: get all the sample
    //step 2: select the sample id
    //insert using that sample id

    const [samples,setSamples]=useState()
    const [q,setQ]=useState(0)
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
        const cad={
            qnty_fabric:q,
            sample_id:s_id,
            production_id:-1
        }

        //console.log(q)
            //koi tui???
       const res= await axios.post('/addFSampleqnty',cad)
       if(res.data){
           alert("added")
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
          





        <input type="text" onChange={(e)=>setQ(e.target.value)}/>



        <button onClick={onSubmit}> submit</button>

        </div>
    );
};

export default QntyFabric;