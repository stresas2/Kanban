import {combineReducers} from "redux";

const initialStateData = {
    columns: [],
    tasks: [],
    lines: 3,
    modal: 0,
    taskLocation: {},
    dragStart: {},
    selectedTask: null,
    selectedColumn: null
};

const data = (state = initialStateData, action) => {
    switch (action.type) {
        case "createNewColumnName":
            localStorage.setItem("columns", JSON.stringify([...state.columns, action.data]));
            return {...state, columns: [...state.columns, action.data]};
        case "addLine":
            return {...state, lines: action.number};
        case "modalType":
            return {...state, modal: action.types};
        case "setLocalColumns":
            return {...state, columns: action.data};
        case "setLocalTasks":
            return {...state, tasks: action.data};
        case "setTaskLocation":
            return {...state, taskLocation: {column: action.column, line: action.line}};
        case "createNewTask":
            localStorage.setItem("tasks", JSON.stringify([...state.tasks, action.data]));
            return {...state, tasks: [...state.tasks, action.data]};
        case "dragStart":
            return {...state, dragStart: {column: action.column, line: action.line}};
        case "changeLocation":
            localStorage.setItem("tasks", JSON.stringify(action.data));
            return {...state, tasks: action.data};
        case "SelectedTask":
            return {...state, selectedTask: action.id, modal: action.modal};
        case "SelectedColumn":
            return {...state, selectedColumn: action.id, modal: action.modal};
        case "setEdit":
            localStorage.setItem("tasks", JSON.stringify(action.tasks));
            return {...state, tasks: action.tasks};
        case "setEditColumn":
            localStorage.setItem("columns", JSON.stringify(action.columns));
            return {...state, columns: action.columns};
        case "setDeleteTask":
            localStorage.setItem("tasks", JSON.stringify(action.tasks));
            return {...state, tasks: action.tasks};
        case "setDeleteColumn":
            localStorage.setItem("columns", JSON.stringify(action.columns));
            return {...state, columns: action.columns};

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    data
});
