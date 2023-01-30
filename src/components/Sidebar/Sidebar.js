import React from "react";
import './Sidebar.css'
import {NavLink} from "react-router-dom";
const Sidebar = () => {
    return(
        <div className='sideBar'>
            <NavLink to={''}>Home </NavLink>
            <NavLink to={'Todos'}>Todos </NavLink>
            <NavLink to={'Albums'}> Albums</NavLink>
            <NavLink to={'Comments'}> Comments</NavLink>
        </div>
    )
}

export {Sidebar};