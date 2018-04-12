// This will render server side components
const React = require("react");
const ReactDomServer = require("react-dom/server");
const App = require("components/App");
const axios = require("axios");
const DataAPI = require("state-api");
const config = require("config");
const serverRender = async () => {
    // For some reason local url will not work here but will work on client side. Use full url
    const rawData = await axios.get(`http://${config.host}:${config.port}/data`);
    const api = new DataAPI(rawData.data);
    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors(),
    };
    return ReactDomServer.renderToString(<App initialData={initialData}/>);
};

module.exports = serverRender;