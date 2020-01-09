import React from "react";
import {Route, Switch} from "react-router-dom";
import Table from "./Table";
import Task from "./Task";

class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Table} />
                <Route exact path="/task/:id" component={Task} />
            </Switch>);
    }
}

export default App;
