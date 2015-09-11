describe("findReplace", function() {
  it("will take a string, a word to find within the original string, and a replacement string to replace the found word with within the first string, finally returning the altered original string", function() {
    expect(findReplace("i ate cheese", "ate", "can't eat")).to.equal("i can't eat cheese");
  });

  it("will handle a large text entries", function() {
    expect(findReplace("i ate cheese eight times as a champ of the ate life-style", "ate", "can't eat")).to.equal("i can't eat cheese eight times as a champ of the can't eat life-style");
  });
});
