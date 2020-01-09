import {
    setCreateColumn,
    setCreateNewTask,
    changeLocation,
    SelectedTask,
    setEdit,
    setDeleteTask,
    setDeleteColumn,
    setEditColumn
} from "./actions";

export const createNewColumn = columnName => (dispatch, getState) => {

    const state = getState();
    const columns = state.data.columns;

    let id;
    const idList = columns.map(task => task.id);

    if (idList.length < 1) {
        id = 0;
        console.log("sd")
    } else {
        id = Math.max(...idList);
        id += 1;
    }

    const newColumn = {id: id, name: columnName};

    dispatch(setCreateColumn(newColumn));
};

export const createNewTask = (taskName, description) => (dispatch, getState) => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const state = getState();

    let id;
    const idList = state.data.tasks.map(task => task.id);

    if (idList.length < 1) {
        id = 0;
        console.log("sd")
    } else {
        id = Math.max(...idList);
        id += 1;
    }

    const newTask = {
        id: id,
        name: taskName,
        description: description,
        column: state.data.taskLocation.column,
        line: state.data.taskLocation.line,
        created: dateTime,
        edited: null
    };

    dispatch(setCreateNewTask(newTask));
};

export const dropDrag = (column, line) => (dispatch, getState) => {

    const state = getState();
    const taskLocation = state.data.dragStart;

    let tasks = JSON.parse(JSON.stringify(state.data.tasks));

    const found = tasks.find(task => task.column === taskLocation.column && task.line === taskLocation.line);

    const findIndex = tasks.findIndex(task => task === found);

    tasks[findIndex].line = line;
    tasks[findIndex].column = column;

    dispatch(changeLocation(tasks));
};

export const setSelectedTask = (column, line, modal) => (dispatch, getState) => {

    const state = getState();
    const tasks = state.data.tasks;

    const found = tasks.find(task => task.column === column && task.line === line);

    dispatch(SelectedTask(found.id, modal));
};

export const submitEdit = (title, description) => (dispatch, getState) => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const state = getState();
    const tasks = JSON.parse(JSON.stringify(state.data.tasks));

    const foundIndex = tasks.findIndex(task => task.id === state.data.selectedTask);

    tasks[foundIndex].name =  title;
    tasks[foundIndex].description =  description;
    tasks[foundIndex].edited =  dateTime;

    dispatch(setEdit(tasks));
};

export const submitEditColumn = (title) => (dispatch, getState) => {

    const state = getState();
    const columns = JSON.parse(JSON.stringify(state.data.columns));

    console.log(title)

    const foundIndex = columns.findIndex(column => column.id === state.data.selectedColumn);

    columns[foundIndex].name = title;

    dispatch(setEditColumn(columns));
};

export const deleteTask = () => (dispatch, getState) => {

    const state = getState();
    const tasks = JSON.parse(JSON.stringify(state.data.tasks));

    const filtered = tasks.filter(task => task.id !== state.data.selectedTask);

    dispatch(setDeleteTask(filtered));
};

export const deleteColumn = (title, description) => (dispatch, getState) => {

    const state = getState();
    const columns = JSON.parse(JSON.stringify(state.data.columns));

    const filtered = columns.filter(column => column.id !== state.data.selectedColumn);

    dispatch(setDeleteColumn(filtered));
};

