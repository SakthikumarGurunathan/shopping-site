import React,{useState,useEffect}from "react";
import './Shop.css'
import {Link} from 'react-router-dom'
import Products from "./Products";

export default function Shop(){
    const[products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {setProducts(data) 
                           console.log(data)} )
    },[])
    const newProductsArr = products.map((each)=>{
        return <div key={each.id} aria-label={`${each.title}`}>
        <Link to={`/shop/${each.id}`} className="products">
                
               <h2 className="product-title">{(each.title)}</h2>
                <img src={each.image} alt="" className="productImage"/>
                <div className="product-price-rating">
                    <h4><strong>Price:${each.price}</strong></h4>
                    <p><strong>Rating:<i class="fa-regular fa-star"></i>{each.rating.rate}</strong></p>
                </div>
                {/* <Link  className="buy-now">Buy now</Link>  */}
                </Link>
                 </div>
    })
    return (
        <div className="products-container">
            {newProductsArr}
        </div>
        
    )
}
