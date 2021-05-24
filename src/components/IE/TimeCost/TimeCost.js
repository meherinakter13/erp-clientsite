import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IESidebar from '../IESidebar/IESidebar';

const TimeCost = () => {
    const [samples, setSamples] = useState()
    const [time, setTime] = useState(0)
    const [cost, setCost] = useState(0)
    const [s_id, setid] = useState(-1)

    useEffect(() => {
        const load = async () => {
            const res = await axios.get('/fSample')
            setSamples(res.data)
        }
        load()
    }, [])

    const onSelect = (e) => {
        const id = e.target.id
        setid(id)
    }

    const handleSubmit = async () => {
        const IE = {
            timing: time,
            costing: cost,
            smaple_id: s_id,
            production_id: -1
        }

        //console.log(q)
        const res = await axios.post('/addFSampleTime', IE)
        if (res.data) {
            alert("added time and cost")
        }
        console.log(res.data)
    }

    return (
        <section className="container-fluid row " >
            <div className="col-md-3">
                <h1>IE Dashboard</h1>
                <IESidebar></IESidebar>
            </div>
            <div className="col-md-9 mt-5 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
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
        </section>
    );
};

export default TimeCost;