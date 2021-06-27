import React from 'react'
import {Link} from "react-router-dom";


function Navigation(props){

    return(
        <div style={{marginTop:'150px'}}>
           <Link to="/" >Home</Link>
            <Link to="/admin" >Admin</Link>
            <Link to="/super-admin" >Super Admin</Link>
            <Link to="/teacher" >Teacher</Link>
            <Link to="/home" >Student</Link>
            <Link to="/test" >Test</Link>
        </div>
    )
}export default Navigation;
