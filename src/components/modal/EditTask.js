import React, {Component} from 'react';
import {connect} from "react-redux";
import {submitEdit} from "../../thunks";

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", description: ""};
    }

    componentDidMount() {
        const id = this.props.selectedTask;
        const found = this.props.tasks.find(task => task.id === id);
        this.setState({title: found.name, description: found.description});
    }

    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task Name:</label>
                        <input value={this.state.title} className="form-control"
                               onChange={(e) => this.setState({title: e.target.value})}/>
                        <label htmlFor="exampleInputEmail1">Description:</label>
                        <input value={this.state.description} className="form-control"
                               onChange={(e) => this.setState({description: e.target.value})}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                        this.props.submitEdit(this.state.title, this.state.description)
                    }}>Edit
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
    submitEdit: (title, description) => dispatch(submitEdit(title, description))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);