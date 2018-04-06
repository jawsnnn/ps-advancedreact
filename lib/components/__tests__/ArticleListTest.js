const React = require("react");
const renderer = require("react-test-renderer");
const ArticleList = require("../ArticleList");

describe("Article list tests", () => {

    const testProps = {
        articles: {
            a: {id: 1},
            b: {id: 2}
        },
        articleActions: {
            lookupAuthor: jest.fn(()=>({}))
        }
    };

    it("renders correctly", () => { 
        const tree = renderer.create(
            <ArticleList 
                {...testProps}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(2);
    });
});