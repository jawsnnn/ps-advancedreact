const React = require('react');
const { data } = require('../testData');
const DataAPI = require('../DataAPI');
const ArticleList = require('./ArticleList');

const api = new DataAPI(data);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            articles : api.getArticles(),
            authors : api.getAuthors()
        };
    };
    // List of actions to pass down the tree
    articleActions = {
        // Lookup author object given its id
        lookupAuthor: (authorID) => this.state.authors[authorID],
    };
    render() {
        return (
            <ArticleList 
                articles = {this.state.articles}
                articleActions = {this.articleActions}
            />
        );
    };
};

module.exports = App;