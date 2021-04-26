import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div clasName="container text-center mt-5 " style={{textDecoration:'none'}}>
            <button className= "btn btn-danger mt-5 "><Link to ="/addUser" className="text-white">SignUp</Link> </button>
            <br/>
            <button className= "btn btn-success mt-5"><Link to ="/login" className="text-white">Login</Link></button>
        </div>
    );
};

export default Home;