import React from "react"; 
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => { 
    return( 
        <div>
        <div className="sidenav">
            <Link to="/" className="links">Home</Link>
            <Link to="/gallery" className="links">Crewmate Gallery</Link> 
            <Link to="/create" className="links">Create a Crewmate!</Link> 
            <img src="./public/hide.png" className="single-crewmate"/> 
        </div>
        <div>
          <Outlet />
        </div>
  
      </div>
    )
} 

export default Dashboard