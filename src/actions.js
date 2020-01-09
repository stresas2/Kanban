export const setCreateColumn = data => ({
    type: "createNewColumnName",
    data
});

export const setLocalColumns = data => ({
    type: "setLocalColumns",
    data
});

export const setLocalTasks = data => ({
    type: "setLocalTasks",
    data
});

export const addLine = number => ({
    type: "addLine",
    number
});

export const modalType = types => ({
    type: "modalType",
    types
});

export const setTaskLocation = (column, line) => ({
    type: "setTaskLocation",
    column,
    line
});

export const setCreateNewTask = (data) => ({
    type: "createNewTask",
    data
});

export const dragStart = (column, line) => ({
    type: "dragStart",
    column,
    line
});

export const changeLocation = (data) => ({
    type: "changeLocation",
    data
});

export const deleteOldTask = (data) => ({
    type: "deleteOldTask",
    data
});

export const SelectedTask = (id, modal) => ({
    type: "SelectedTask",
    id,
    modal
});

export const SelectedColumn = (id, modal) => ({
    type: "SelectedColumn",
    id,
    modal
});

export const setEdit = (tasks) => ({
    type: "setEdit",
    tasks
});

export const setEditColumn = (columns) => ({
    type: "setEditColumn",
    columns
});

export const setDeleteTask = (tasks, modal) => ({
    type: "setDeleteTask",
    tasks
});

export const setDeleteColumn = (columns) => ({
    type: "setDeleteColumn",
    columns
});




