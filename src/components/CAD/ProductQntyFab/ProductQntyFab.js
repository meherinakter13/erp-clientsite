import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CADSidebar from '../CADSidebar/CADSidebar';

const ProductQntyFab = () => {
    const [products, setProducts] = useState()
    const [q, setQ] = useState(0)
    const [p_id, setid] = useState(-1)

    useEffect(() => {
        const load = async () => {
            const res = await axios.get('/fProduct')
            setProducts(res.data)
        }
        load()
    }, [])

    const onSelect = (e) => {
        const id = e.target.id
        setid(id)
    }

    const handleSubmit = async () => {
        const cad = {
            qnty_fabric: q,
            sample_id: -1,
            production_id: p_id
        }

        //console.log(q)
        const res = await axios.post('/addFProQnty', cad)
        if (res.data) {
            alert("added")
        }
        console.log(res.data)
    }
    return (
        <section className="fluid-container row " >
            <div className="col-md-3">
                 <div style={{ border: "3px solid #076270" }} className="text-center">
            <h1>CAD Dashboard</h1>
            </div>
                <CADSidebar></CADSidebar>
            </div>
            <div className="col-md-9 mt-5 pt-5 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h4>Add Quantity of fabric for Products</h4>
                {/* <p>{JSON.stringify(samples)}</p> */}
            <form onSubmit={handleSubmit}>

                {products && products.map((item) => {
                    //item.image
                    return <img style={{ width: "100px", height: "100px", margin: "20px" }} onClick={onSelect} id={item.id} key={item.id} src={item.image || 'https://www.w3schools.com/sql/img_innerjoin.gif'} alt="" />

                })}
                <br /><br />
                <label htmlFor="">Quantity of fabric</label>
                <br />
                <input type="number" min="1" onChange={(e) => setQ(e.target.value)} required/>
                <br /><br />
                <input type="submit" className="btn btn-danger" value="Submit"/>
                </form>
            </div>
        </section>
    );
};

export default ProductQntyFab;