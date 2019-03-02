import React from "react";
import { browserHistory } from "react-router";
import { Link } from "react-router";

const API = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data1: [],
            isLoading: false
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ data1: data.results, isLoading: false }));
        console.log("Component did mount!");
    }
    render() {
        const { data1, isLoading } = this.state;
        if (isLoading) {
            return <div className="module1">
                <div className="mainmodule">
                    <div className="gridContainer">
                        <div className="grid-1" >
                            <img src={require('../Images/loading.gif')} />
                        </div>
                    </div>
                </div>
            </div>;}
        return (
            <div className="mainmodule">
                <div id="gameboytop">
                </div>
                <div id="middlerow">
                    <div id="gameboyleft">   
                    </div>
                    <div className="grid-1" >
                        <ul >
                            {data1.map(poke =>
                                <li className="list" key={poke.url}>
                                    
                                    <Link to={{
                                        pathname: "/Pokemon",
                                        state: {
                                            url: poke.url,
                                            name: poke.name
                                        }
                                    }}
                                        activeClassName="active" className="detailslink" ><p id="pokelistnames">{poke.name}</p></Link>
                                </li>
                            )}
                        </ul>
                    </div>
                <div id="gameboyright">
                    </div>
                    </div>
                <div id="gameboybottom">  
                </div>
            </div>
        );
    }
}

/*
state:{
                                        trackviewURL: track.trackViewUrl,
                                        artworkURL: track.artworkUrl30,
                                        trackName: track.trackName,
                                        artistName: track.artistName,
                                        trackPrice: track.trackPrice,
                                        durationTime: track.trackTimeMillis,
                                        releaseDate: track.releaseDate,
                                    }
                                    */