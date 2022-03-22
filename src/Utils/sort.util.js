module.exports = {
  sort: (sortValue, links) => {
    switch (sortValue) {
      case "most":
        return [...links.sort((a, b) => b.voteCount - a.voteCount)];
      case "least":
        return [...links.sort((a, b) => a.voteCount - b.voteCount)];

      default:
        return [...links.reverse()];
    }
  },
};
