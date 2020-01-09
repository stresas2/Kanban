import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTask} from "../../thunks";

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ""};
    }

    componentDidMount() {
        const id = this.props.selectedTask;
        const found = this.props.tasks.find(task => task.id === id);
        this.setState({title: found.name });
    }

    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure want delete Task: <b>{this.state.title}</b></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                        this.props.deleteTask()
                    }}>Yes
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.data.tasks,
    selectedTask: state.data.selectedTask
});

const mapDispatchToProps = dispatch => ({
    deleteTask: () => dispatch(deleteTask())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);