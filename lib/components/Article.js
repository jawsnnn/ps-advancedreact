const React = require('react');

const Article = (props) => {
    // Assign props values to article, author vars
    const {article, articleActions} = props;
    const author = articleActions.lookupAuthor(article.authorId);
        return(
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <a href= {author.website}>
                <div>
                    {author.firstName} {author.lastName}
                </div>
            </a>
            <div>{article.body}</div>
        </div>
        );
};

module.exports = Article;