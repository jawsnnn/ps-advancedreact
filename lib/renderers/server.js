// This will render server side components
const React = require("react");
const ReactDomServer = require("react-dom/server");
const App = require("components/App");
const axios = require("axios");
const StateAPI = require("state-api");
const config = require("config");
const serverRender = async () => {
    // For some reason local url will not work here but will work on client side. Use full url
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
    const dataStore = new StateAPI(rawData.data);
    // const initialData = api.getState();
    return ({
        initialMarkup: ReactDomServer.renderToString(<App dataStore={dataStore}/>),
        initialData: rawData.data
    });
};

module.exports = serverRender;