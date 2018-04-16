const React = require('react');
const DataAPI = require('state-api');
const ArticleList = require('./ArticleList');

class App extends React.Component {
    // THis is used by server side rendering?? (how?)
    state = this.props.dataStore.getState();

    render() {
        return (
            <ArticleList 
                articles = {this.state.articles}
                dataStore = {this.props.dataStore}
            />
        );
    };
};

module.exports = App;