import React from "react";
import {Sidebar} from "../components/Sidebar/Sidebar";
import './MainLayout.css'

const  MainLayout = () => {
return(
    <div className={'main-container'}>
        <Sidebar/>
    </div>
)
}

export {MainLayout};