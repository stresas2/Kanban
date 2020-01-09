import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import "./index.css";
import {logger} from "redux-logger";
import Thunk from "redux-thunk";
import {rootReducer} from "./reducer";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
    rootReducer,
    applyMiddleware(logger, Thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
