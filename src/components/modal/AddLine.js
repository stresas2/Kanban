import React from 'react';
import {connect} from "react-redux";
import {addLine} from "../../actions";

const AddLine = (props) => {

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Column</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Add one more line?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                    props.addLine(props.lines + 1)
                }}>Yes
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    lines: state.data.lines
});

const mapDispatchToProps = dispatch => ({
    addLine: (number) => dispatch(addLine(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLine);