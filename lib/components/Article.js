const React = require('react');
const PropTypes = require('prop-types');

const dateDisplay = (dateString) => {
    return new Date(dateString).toDateString();
};

const Article = (props) => {
    // Assign props values to article, author vars
    const {article, dataStore} = props;
    const author = dataStore.lookupAuthor(article.authorId);
        return(
        <div>
            <div>{article.title}</div>
            <div>{dateDisplay(article.date)}</div>
            <a href= {author.website}>
                <div>
                    {author.firstName} {author.lastName}
                </div>
            </a>
            <div>{article.body}</div>
        </div>
        );
};

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

module.exports = Article;