import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        // <div clasName="container text-center mt-5 " style={{textDecoration:'none'}}>
        //     <button className= "btn btn-danger mt-5 "><Link to ="/addUser" className="text-white">SignUp</Link> </button>
        //     <br/>
        //     <button className= "btn btn-success mt-5"><Link to ="/login" className="text-white">Login</Link></button>
        // </div>
        <section className="fluid-container">
        <h1> Dashboard</h1>
        <div className="row mx-0">
            <div className="col-md-2 p-0">
                <Sidebar></Sidebar>
            </div>
        </div>
    </section>
    );
};

export default Home;