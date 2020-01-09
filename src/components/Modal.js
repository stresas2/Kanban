import React from 'react';
import {connect} from "react-redux";
import CreateColumn from "./modal/CreateColumn";
import AddLine from "./modal/AddLine";
import NewTask from "./modal/NewTask";
import EditTask from "./modal/EditTask";
import DeleteTask from "./modal/DeleteTask";
import DeleteColumn from "./modal/DeleteColumn";
import EditColumn from "./modal/EditColumn";

const Modal = (props) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                {props.modal === 1 ?
                    <CreateColumn/> :
                    props.modal === 2 ? <AddLine/> :
                        props.modal === 3 ? <NewTask/> :
                            props.modal === 4 ? <EditTask/> :
                                props.modal === 5 ? <DeleteTask/> :
                                    props.modal === 6 ? <DeleteColumn/> :
                                        props.modal === 7 ? <EditColumn/> : null}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    modal: state.data.modal
});

export default connect(mapStateToProps, null)(Modal);