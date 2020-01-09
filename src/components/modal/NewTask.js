import React, {useState} from 'react';
import {connect} from "react-redux";
import {createNewTask} from "../../thunks";

const NewTask = (props) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const createTask = (taskName, description) =>{
        props.createNewTask(taskName, description)
    };

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Task Name:</label>
                    <input type="email" className="form-control" onKeyUp={(e) => setTaskName(e.target.value)}/>
                    <label htmlFor="exampleInputEmail1">Description:</label>
                    <input type="email" className="form-control" onKeyUp={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                    createTask(taskName, description)
                }}>Create
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createNewTask: (taskName, description) => dispatch(createNewTask(taskName, description))
});

export default connect(null, mapDispatchToProps)(NewTask);