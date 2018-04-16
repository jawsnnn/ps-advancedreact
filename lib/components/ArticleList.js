const React = require('react');
const Article = require('./Article');

const ArticleList = (props) => {
    const {articles, dataStore} = props;
    return (
        <div>
            {Object.values(articles).map(article => 
                <Article
                    key={article.id}
                    article={article}
                    dataStore = {dataStore}
                />
            )}
        </div>
    );
};

module.exports = ArticleList;