import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IESidebar from '../IESidebar/IESidebar';
import { useParams } from 'react-router-dom';

const ProductTimeCost = () => {
    const [products, setSProducts] = useState()
    const [time, setTime] = useState(0)
    const [cost, setCost] = useState(0)
    const [p_id, setid] = useState(-1)
    let { id } = useParams();
    useEffect(() => {
        const load = async () => {
            const res = await axios.get('/fProduct')
            setSProducts(res.data)
        }
        load()
    }, [])

    const onSelect =async (e) => {
        //ck already added or not
        ///check-img/ie/29

        const id = e.target.id
        
        const res = await axios.get('/check-img/ie/'+id)
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
            smaple_id: -1,
            production_id: p_id
        }

        const res = await axios.post('/addFProTime', IE)
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
                <h4>Add product Time and Cost</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}
                <form onSubmit={handleSubmit}>

                    {products && products.map((item) => {
                        return <img style={{ width: "100px", height: "100px", margin: "20px" }} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} alt="" />

                    })}
                    <br />
                    <br />
                    <label htmlFor="">Add time</label>
                    <br />
                    <input type="number" min="1" placeholder="enter time" onChange={(e) => setTime(e.target.value)} required/>
                    <br />
                    <br />
                    <label htmlFor="">Add Cost</label><br />
                    <input type="number" min="1" placeholder="enter cost" onChange={(e) => setCost(e.target.value)} required/>
                    <br /><br />
                    <input type="submit" class="btn btn-danger" value="Submit" />
                </form>
            </div>
            </div>
        </section>
    );
};

export default ProductTimeCost;