import React from 'react';

import { Header } from "./Header";

import { Home } from "./Home";

export class Root extends React.Component{
    constructor(){
        super();
        this.state = {
            homeMounted: true
        };
    }
    render() {
        let homeCmp="";
        if(this.state.homeMounted){
            homeCmp= (
            <Home/>
            );
        }
        return(
            <div>       
                    <div> 
                        <Header/>                    
                    <div>
                    {this.props.children}  
                    </div>
                </div>
            </div>
        );
    }
}