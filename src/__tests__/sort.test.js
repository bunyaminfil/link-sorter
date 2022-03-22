const { sort } = require("../Utils/sort.util");
const testArray = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com",
    voteCount: 4,
  },
  {
    title: "Stackoverflow",
    link: "https://www.stackoverflow.com",
    voteCount: 9,
  },
  {
    title: "Github",
    link: "https://www.github.com",
    voteCount: 2,
  },
];

describe("Sort function", () => {
  test("it should sort by most votes", () => {
    expect(sort("most", testArray)[0].voteCount).toBe(9);
  });
  test("it should sort by least votes", () => {
    expect(sort("least", testArray)[0].voteCount).toBe(2);
  });
});
