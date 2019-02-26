import React from 'react';
import { browserHistory } from "react-router";



export class Pokemon extends React.Component{

    constructor(props) {
        super();
        this.state = {
            data: [],
        };

    }
    
    componentDidMount() {
        const{url} = this.props.location.state;
        
        this.setState({ isLoading: true });
        fetch(url)
            .then(response => response.json())
            .then(data =>  console.log(data,));
        console.log("Component did mount!");
        
    }
    
    onNavigateHome(){
        browserHistory.push("/home");
    }
    render(){
        const{name} = this.props.location.state;
        const { data } = this.state;
        return(
            <div className="module1">             
                <div className="mainmodule">
                    <div className="gridContainer">
                    <div className="grid-1" >                             
                            <p id="tracks">Name: {name}</p>   
                     </div>
                    </div>
                </div>                
            </div>
        );
    }
}
//.then(data =>  this.setState({ data: data}));