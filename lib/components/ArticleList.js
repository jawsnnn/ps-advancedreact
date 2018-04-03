const React = require('react');
const Article = require('./Article');

const ArticleList = (props) => {
    const {articles, articleActions} = props;
    return (
        <div>
            {Object.values(articles).map(article => 
                <Article
                    key={article.id}
                    article={article}
                    articleActions = {articleActions}
                />
            )}
        </div>
    );
};

module.exports = ArticleList;