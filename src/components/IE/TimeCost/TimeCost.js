import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IESidebar from '../IESidebar/IESidebar';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

const TimeCost = () => {
    const [samples, setSamples] = useState()
    const [time, setTime] = useState(0)
    const [cost, setCost] = useState(0)
    const [s_id, setid] = useState(-1)

    let { id } = useParams();
    // const history = useHistory();
    // const [sampleImg ,setSampleImg] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/fSample')
    //     .then(res =>res.json())
    //     .then(data => {
    //         setSampleImg(data)
    //         if(data.filter(item=>item.id==id).length>0){
    //             alert("You have already added the final sample.")
    //             history.push('/showSample')
    //             //you have already added the sample
    //           }
    //         //   console.log(id)
    //           console.log(data)
    //         console.log("==",data)
    //     })
    // },[])

    useEffect(() => {
        const load = async () => {
            const res = await axios.get('/fSample')
            setSamples(res.data)
        }
        load()
    }, [])

    const onSelect =async (e) => {
            //ck already added or not
            ///check-img/ie/29

            const id = e.target.id
            
            const res = await axios.get('/check-imgie/'+id)
            console.log("click=",res.data)
            if(!res.data.added){
                setid(id)
            }else{
                alert("already added.")
            }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const IE = {
            timing: time,
            costing: cost,
            smaple_id: s_id,
            production_id: -1
        }

        //console.log(q)
        const res = await axios.post('/addFSampleTime', IE)
        if (res.data) {
            e.target.reset();
            alert("added time and cost")
        }
        console.log(res.data)
    }

    return (
        <section className="fluid-container  " >
        <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>IE Dashboard</h1>
            </div>
            <div className="row">
            <div className="col-md-3">
                <IESidebar></IESidebar>
            </div>
            <div className="col-md-9 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4>Add Sample Time and Cost</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}

            <form onSubmit={handleSubmit}>
                {samples && samples.map((item) => {
                    //item.image
                    return <img style={{ width: "100px", height: "100px", margin: "20px" }} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} alt="" />

                })}

                <br />
                <br />
                <label htmlFor="">Add time</label>
                <br />

                <input type="number" placeholder="enter time" min ="1" onChange={(e) => setTime(e.target.value)} required />
                <br />
                <br />
                <label htmlFor="">Add Cost</label><br />
                <input type="number" placeholder="enter cost" min ="1" onChange={(e) => setCost(e.target.value)} required />
                <br />
                <br />
                <input type="submit" className="btn btn-danger"value="submit"/>
                </form>
            </div>
            </div>
        </section>
    );
};

export default TimeCost;