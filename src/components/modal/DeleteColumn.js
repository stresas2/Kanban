import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteColumn} from "../../thunks";

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ""};
    }

    componentDidMount() {
        const id = this.props.selectedColumn;
        console.log(this.props.columns)
        const found = this.props.columns.find(column => column.id === id);
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
                        this.props.deleteColumn()
                    }}>Yes
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    columns: state.data.columns,
    selectedColumn: state.data.selectedColumn
});

const mapDispatchToProps = dispatch => ({
    deleteColumn: () => dispatch(deleteColumn())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);