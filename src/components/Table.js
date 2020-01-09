import React, {Component} from "react";
import {connect} from "react-redux";
import Modal from "./Modal";
import {setLocalColumns, modalType, setTaskLocation, setLocalTasks, dragStart, SelectedColumn} from "../actions";
import {dropDrag, setSelectedTask} from "../thunks";
import uniqid from "uniqid";

class Table extends Component {

    componentDidMount() {
        const columns = JSON.parse(localStorage.getItem("columns"));
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (columns && tasks) {
            this.props.setLocalColumns(columns);
            this.props.setLocalTasks(tasks);
        }
    }

    redirectTask = (taskName) => {
        window.location.href = `/task/${taskName}`;
    };

    render() {

        const columns = this.props.columns.map((data) =>
            <th key={uniqid()}>{data.name}
                {/*delete*/}
                <i className="fas fa-trash-alt px-2" data-toggle="modal"
                   data-target="#exampleModal" onClick={() => {
                    this.props.modalType(null);
                    setTimeout(() => {
                        this.props.SelectedColumn(data.id, 6)
                    }, 10)
                }}> </i>
                {/*edit*/}
                <i className="fas fa-edit" data-toggle="modal"
                   data-target="#exampleModal" onClick={() => {
                    this.props.modalType(null);
                    setTimeout(() => {
                        this.props.SelectedColumn(data.id, 7)
                    }, 10)
                }}> </i>
            </th>
        );

        const taskName = (column, line) => {
            const index = this.props.tasks.findIndex(task => task.column === column && task.line === line);
            return this.props.tasks[index].name;
        };

        const taskId = (column, line) => {
            const index = this.props.tasks.findIndex(task => task.column === column && task.line === line);
            return this.props.tasks[index].id;
        };

        let linesTr = [];

        for (let i = 0; i <= this.props.lines; i++) {
            linesTr.push(<tr key={uniqid()}> {this.props.columns.map((data) => {
                return (<>
                    {this.props.tasks.find(task => task.column === data.id && task.line === i) ?
                        <td key={uniqid()}>
                            {/*Task exist*/}
                            <div className="bg-secondary rounded py-2 text-white" onDragStart={() => {
                                this.props.dragStart(data.id, i)
                            }} draggable="true">
                                {taskName(data.id, i)}
                                {/*redirect*/}
                                <i className="fas fa-external-link-alt mx-2" onClick={() => {
                                    this.redirectTask(taskId(data.id, i))
                                }}> </i>
                                {/*edit*/}
                                <i className="fas fa-edit" data-toggle="modal"
                                   data-target="#exampleModal" onClick={() => {
                                    this.props.modalType(null);
                                    setTimeout(() => {
                                        this.props.setSelectedTask(data.id, i, 4)
                                    }, 10)
                                }}> </i>
                                {/*delete*/}
                                <i className="fas fa-trash-alt px-2" data-toggle="modal"
                                   data-target="#exampleModal" onClick={() => {
                                    this.props.modalType(null);
                                    setTimeout(() => {
                                        this.props.setSelectedTask(data.id, i, 5)
                                    }, 10)
                                }}> </i>
                            </div>
                        </td> :
                        <td key={uniqid()} onDrop={() => {
                            this.props.dropDrag(data.id, i)
                        }} onDragOver={(e) => {
                            e.preventDefault()
                            e.target.style.backgroundColor = "#CCC"
                        }} onDragLeave={(e) => {
                            e.target.style.backgroundColor = "#FFFFFF"
                        }}>
                            {/*Task not exist*/}

                            <i className="fas fa-pen-square" data-toggle="modal"
                               data-target="#exampleModal" style={{fontSize: "30px"}} onClick={() => {
                                this.props.modalType(3);
                                this.props.setTaskLocation(data.id, i)
                            }}> </i>

                        </td>
                    }</>)
            })}
                {this.props.columns.length > 0 ? <td className="bg-light"> </td> : null}
            </tr>);
        }

        return (
            <div className="container mt-3">
                <Modal/>
                <table className="table table-bordered text-center">
                    <thead>

                    <tr key={uniqid()}>
                        {columns}
                        <th className="bg-light">
                            <i className="fas fa-plus-square" style={{fontSize: "20px"}}
                               data-toggle="modal"
                               data-target="#exampleModal" onClick={() => {
                                this.props.modalType(1)
                            }}> </i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {linesTr}
                    {this.props.columns.length > 0 ?
                        <tr key={uniqid()}>
                            <td className="bg-light" colSpan={this.props.columns.length + 1}>
                                <i className="fas fa-plus-square"
                                   style={{fontSize: "20px"}} data-toggle="modal"
                                   data-target="#exampleModal" onClick={() => {
                                    this.props.modalType(2)
                                }}> </i>
                            </td>
                        </tr> : null
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    columns: state.data.columns,
    lines: state.data.lines,
    tasks: state.data.tasks
});

const mapDispatchToProps = dispatch => ({
    setLocalColumns: (data) => dispatch(setLocalColumns(data)),
    setLocalTasks: (data) => dispatch(setLocalTasks(data)),
    modalType: (types) => dispatch(modalType(types)),
    setTaskLocation: (column, line) => dispatch(setTaskLocation(column, line)),
    dragStart: (column, line) => dispatch(dragStart(column, line)),
    dropDrag: (column, line) => dispatch(dropDrag(column, line)),
    setSelectedTask: (column, line, modal) => dispatch(setSelectedTask(column, line, modal)),
    SelectedColumn: (id, modal) => dispatch(SelectedColumn(id, modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
