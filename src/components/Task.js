import React, {Component} from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { data: "", column: "" };
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const columns = JSON.parse(localStorage.getItem("columns"));

        if (!tasks.find(task => task.id === id)) {
            window.location.href = '/';
        }
        const taskIndex = tasks.findIndex(task => task.id === id );

        const columnIndex = columns.findIndex(column => column.id === tasks[taskIndex].column );

        this.setState({data: tasks[taskIndex], column: columns[columnIndex]["name"]})



    }

    deleteTask = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const filtered = tasks.filter(task => task.id !== this.state.data.id);
        localStorage.setItem("tasks", JSON.stringify(filtered));
        window.location.href = '/'
    };

    render() {
        console.log(this.state);
        return (
            <div className="container mt-3 bg-light p-4">
                <p><b>Column:</b> {this.state.column}</p>
                <p><b>Title:</b> {this.state.data.name}</p>
                <p><b>Description:</b> {this.state.data.description}</p>
                <p><b>Created:</b> {this.state.data.created}</p>
                <p><b>Edited:</b> {this.state.data.edited ? this.state.data.edited : null}</p>
                <button className="btn btn-danger mr-2" onClick={this.deleteTask}>Delete</button>
                <button className="btn btn-primary" onClick={() => {window.location.href = '/'}}>Back</button>
            </div>
        );
    }
}

export default Task;
