import React from "react";
import { Link } from "react-router-dom"
export default function Header(){
    return(
    <nav>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/shop'>Our products</Link></li>
        </ul>
      </nav>
    )
}