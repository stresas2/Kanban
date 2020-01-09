import React, {useState} from 'react';
import {connect} from "react-redux";
import {createNewColumn} from "../../thunks";

const CreateColumn = (props) => {
    const [columnName, setColumnName] = useState('');

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Column</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Column Name:</label>
                    <input type="email" className="form-control" onKeyUp={(e) => setColumnName(e.target.value)}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                    props.createNewColumn(columnName)
                }}>Create
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createNewColumn: (name) => dispatch(createNewColumn(name))
});

export default connect(null, mapDispatchToProps)(CreateColumn);