import React, { useState } from "react";   
import Read from './crud/Read' 
import { Outlet, Link } from "react-router-dom";


const Gallery = () => { 
    return ( 
        <div>
            <h1>Your Crewmate Gallery!</h1> 
            <Read /> 
         </div>
    )
} 

export default Gallery 