const DataAPI = require('../DataAPI');
const { data } = require('../testData');
const jest = require('jest');
const api = new DataAPI(data);

describe('DataAPI', () => {
    it('describes articles as an object', () => {
        const articles = api.getArticles();
        const articleID=data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleID);
        expect(articles[articleID].title).toEqual(articleTitle);
    });
    it('describes authors as an object', () => {
        const authors = api.getAuthors();
        const authorID = data.authors[0].id;
        const authorFirstName = data.authors[0].firstName;

        expect(authors).toHaveProperty(authorID);
        expect(authors[authorID].firstName).toEqual(authorFirstName);
    });
});

