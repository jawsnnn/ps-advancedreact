const React = require('react');
const DataAPI = require('state-api');
const ArticleList = require('./ArticleList');
const axios = require("axios");

// const { data } = require('../testData');
// const api = new DataAPI(data);

class App extends React.Component {
    // THis is used by server side rendering?? (how?)
    state = {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors,
    };
    // Client side rendering. Asynchronously load data from api
    async componentDidMount() {
        const rawData = await axios.get("/data");
        const api = new DataAPI(rawData["data"]);

        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }))};
    // List of actions to pass down the tree
    articleActions = {
        // Lookup author object given its id
        lookupAuthor: (authorID) => this.state.authors[authorID],
    };
    render() {
        debugger;
        return (
            <ArticleList 
                articles = {this.state.articles}
                articleActions = {this.articleActions}
            />
        );
    };
};

module.exports = App;