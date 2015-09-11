describe("findReplace", function() {
  it("will take a string, a word to find within the original string, and a replacement string to replace the found word with within the first string, finally returning the altered original string", function() {
    expect(findReplace("i ate cheese", "ate", "can't eat")).to.equal("i can't eat cheese");
  });

  it("will handle a large text entries", function() {
    expect(findReplace("i ate cheese eight times as a champ of the ate life-style", "ate", "can't eat")).to.equal("i can't eat cheese eight times as a champ of the can't eat life-style");
  });

  it("will handle words with capitalization issues within inputs through normalization", function() {
    expect(findReplace("FootBall Season Is Upon uS and I love footBalL", "fOOTball", "SHOUTING")).to.equal("shouting season is upon us and i love shouting");
  });

  it("will handle a sentence with simple punctuation and still find removal words and replace them", function() {
    expect(findReplace("I think real chimps, as animals, are the best chimps. chimps? Chimps!", "chimps", "lava-rocks")).to.equal("i think real lava-rocks, as animals, are the best lava-rocks. lava-rocks? lava-rocks!");
  });
});
