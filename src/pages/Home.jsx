import React from "react";
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div className="Home-page">
            <div className="home">
                <h2>Welcome to <strong>Nile!</strong> </h2>
                <Link to="/shop" >Explore our products</Link>
            </div>
        </div>
        
    )
}