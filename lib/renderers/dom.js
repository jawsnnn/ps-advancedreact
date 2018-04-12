// This will be the starting point of client-side component

const React = require('react');
const ReactDOM = require('react-dom');

const App = require('components/App');
// Empty data object to enable client side rendering with initialData object
const initialData={
    articles: {},
    authors: {},
};

ReactDOM.render(< App initialData={initialData}/>,document.getElementById("root"));