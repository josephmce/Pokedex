import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Pokemon } from "./components/Pokemon";


class App extends React.Component {
    render(){
        return(
            <Router history ={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"Pokemon"} component={Pokemon}/>
                    <Route path={"home"} component={Home}/>
                </Route>
                <Route path={"home"} component={Home}/>
            </Router>
        );
    }
}
render(<App />, window.document.getElementById('app'));