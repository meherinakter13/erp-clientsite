import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../images/logo.PNG'

const Home = () => {
    return (
        // <div clasName="container text-center mt-5 " style={{textDecoration:'none'}}>
        //     <button className= "btn btn-danger mt-5 "><Link to ="/addUser" className="text-white">SignUp</Link> </button>
        //     <br/>
        //     <button className= "btn btn-success mt-5"><Link to ="/login" className="text-white">Login</Link></button>
        // </div>
        <section className="fluid-container">
            <div style={{ border: "3px solid #076270" }} className="text-center">
                <img style={{ height: "80px", width: "280px" }} src={logo} alt="" />
            </div>
            <div className="row mx-0">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 p-5">
                    <div className="pl-5 text-center">
                        <h2 style={{ color: "#076270",borderBottom:"3px solid #076270" }} >About Us</h2>
                        <p>Al-Muslim Group, a Bangladeshi apparel manufacturer,
                            is a driving provider of readymade garments and denim products in the world. We are one of the top readymade garment manufacturing organizations in Bangladesh. The organization creates the most trendy and fashionable readymade garments and denim products and possesses the most complete and updated manu facturing system and machineries in Bangladesh.
                        </p>
                    </div>
                    <div className="pl-5 text-center mt-5 pt-5">
                        <h2 style={{ color: "#076270", borderBottom:"3px solid #076270"}} >Contact Us</h2>
                        <h5 style={{ color: "#076270" }}>Managing Director:</h5>
                        <p>md@pacificbluejeans.com</p>
                        <h5 style={{ color: "#076270" }}>Executive Director:</h5>
                        <p>kausar@pacificbluejeans.com</p>
                        <h5 style={{ color: "#076270" }}>Asst. General Manager (HR and Compliance)</h5>
                        <p>rasel-hr@pacificbluejeans.com</p>
                        <h5 style={{ color: "#076270" }}>Head Office and Factory:</h5>
                        <p>Address: 14, Gedda, Ulail, Savar, Dhaka –1340</p>
                        <p>+88 09 666 777 879</p>
                        <p>(FAX) (880-2)7742824</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;