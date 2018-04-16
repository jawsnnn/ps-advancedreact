// This will be the starting point of client-side component

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('components/App');
const StateAPI = require("state-api");

const dataStore = new StateAPI(window.initialData);

ReactDOM.render(<App dataStore={dataStore}/>,document.getElementById("root"));