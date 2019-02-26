import React from "react";
import {Link} from "react-router";

export const Sidebar = (props) =>{

let listStyle={width:'100%'}

        return(
            <ul className="main-nav">
                    <li><Link to={"/home"} activeClassName="active"><img className="spinner" style ={listStyle} src={require('../Images/icon_1.png')} alt="Track"/></Link></li>

            </ul>
        );
};