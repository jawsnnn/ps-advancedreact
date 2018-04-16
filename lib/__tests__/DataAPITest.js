const StateAPI = require('state-api');
const { data } = require('testData');
const jest = require('jest');
const api = new StateAPI(data);

describe('DataAPI test', () => {
    it('describes articles as an object', () => {
        const articles = api.getState().articles;
        const articleID=data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleID);
        expect(articles[articleID].title).toEqual(articleTitle);
    });
    it('describes authors as an object', () => {
        const authors = api.getState().authors;
        const authorID = data.authors[0].id;
        const authorFirstName = data.authors[0].firstName;

        expect(authors).toHaveProperty(authorID);
        expect(authors[authorID].firstName).toEqual(authorFirstName);
    });
});

