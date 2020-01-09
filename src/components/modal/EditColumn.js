import React, {Component} from 'react';
import {connect} from "react-redux";
import {submitEditColumn} from "../../thunks";
import {modalType} from "../../actions";

class EditColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", id: this.props.selectedColumn};
    }

    componentDidMount() {
        console.log("mounted")
        const id = this.props.selectedColumn;
        const found = this.props.columns.find(column => column.id === id);
        this.setState({title: found.name });
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Column</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Column Name:</label>
                        <input type="email" value={this.state.title} className="form-control"
                               onChange={(e) => this.setState({title: e.target.value})}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => {
                        this.props.submitEditColumn(this.state.title)
                    }}>Edit
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
    submitEditColumn: (title) => dispatch(submitEditColumn(title)),
    modalType: (types) => dispatch(modalType(types))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditColumn);