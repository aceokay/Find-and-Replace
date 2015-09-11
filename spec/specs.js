describe("findReplace", function() {
  it("will take a string, a word to find within the original string, and a replacement string to replace the found word with within the first string, finally returning the altered original string", function() {
    expect(findReplace("i ate cheese", "ate", "can't eat")).to.equal("i can't eat cheese");
  });
});
