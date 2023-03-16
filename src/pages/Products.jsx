
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import './Products.css'
export default function Products() {
    const params = useParams()
    console.log(params.id)
    const[productDetails,setProductDetails] = useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(data => { 
                        setProductDetails(data)}
            )
    },[])
    console.log(productDetails)
    return(

        <div className="product-details">
           <img src={productDetails.image} className="product-details-image"/>
           <div>
            <p>{productDetails.category}</p>
           <h1 className="product-details-title">{productDetails.title}</h1>
           <div className="product-details-rating">
           {/* <p>{productDetails.rating}<i class="fa-regular fa-star"></i></p>  */}
           {/* <p>{productDetails.rating.count} Ratings</p> */}
           </div>
           <p className="product-details-title">{productDetails.description}</p>
           <h3>Price:  ${productDetails.price}</h3>
           </div>
           
        </div>
        
    )
}
