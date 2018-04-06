const React = require("react");
const ReactDomServer = require("react-dom/server");
const App = require("./components/App");

const serverRender = () => {
    return ReactDomServer.renderToString(<App />);
};

module.exports = serverRender;