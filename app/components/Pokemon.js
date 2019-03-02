import React from 'react';
import { browserHistory } from "react-router";



export class Pokemon extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data2: {},
        };

    }
    componentWillMount() {
        console.log("Component will mount");
    }
    componentDidMount() {
        const { url } = this.props.location.state;

        this.setState({ isLoading: true });
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data2: data, isLoading: false }));
        console.log("Component did mount!");

    }
    componentWillReceiveProps(nextProps) {
        console.log("Componnent will receive props", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        //if(nextState.status ===1){
        //    return false;
        //}
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }


    onNavigateHome() {
        browserHistory.push("/home");
    }
    render() {

        const { data2, isLoading } = this.state;
        console.log(data2);
        if (isLoading) {
            return <div className="mainmodule">
                <div id="gameboytop">
                </div>
                <div id="gameboyleft">
                </div>
                <div className="grid-1" >
                    <img className="load" src={require('../Images/loading.gif')} />
                </div>
                <div id="gameboyright">
                </div>
                <div id="gameboybottom">
                </div>
            </div>
                ;
        }
        return (
            <div className="mainmodule">
                <div id="gameboytop">
                </div>
                <div id="gameboyleft">
                </div>
                <div className="grid-1" >
                    <div className="pokeheader">
                        <div className="pokeinfoheader">
                            <p>Pokemon Info</p>
                        </div>
                    </div>
                    <div className="pokecontent">
                        <div className="pokedetails">
                            <div className="pokenameheader">
                                <p className="poketitlename">{data2 && data2.name}</p>
                            </div>
                            <div className="pokeimgcontainer">
                                <img className ="pokemonimage" src={data2 && data2.sprites && data2.sprites.front_default}></img>
                            </div>
                        </div>
                        <div className="pokeinfo">
                            <p>Type {data2 && data2.types && data2.types[0].type && data2.types[0].type.name} </p>
                            <p>Weight {data2 && data2.weight}</p>
                            <p>Height {data2 && data2.height}</p>
                        </div>
                    </div>
                </div>
                <div id="gameboyright">
                </div>
                <div id="gameboybottom">
                </div>
            </div>
        );
    }
}
//.then(data =>  this.setState({ data: data}));

/*This displays the name from the first fetch;
const{name} = this.props.location.state;*/


/*Try this in the render method;
let data2 = this.props.myData || {} 
*/

/*Display all of the json ;
<pre>{JSON.stringify(data2, null, 4)}</pre>
*/
