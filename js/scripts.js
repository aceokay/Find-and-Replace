var findReplace = function(sentence, remove, replace) {
  sentence = sentence.toLowerCase();
  remove = remove.toLowerCase();
  replace = replace.toLowerCase();

  var sentenceArray = sentence.split(" ");

  for (var word_index = 0; word_index < sentenceArray.length; word_index++){
    var punctuationLocation = sentenceArray[word_index].match(/[.,!?;:]/g);
    if (punctuationLocation === null) {
      if (sentenceArray[word_index] === remove) {
        sentenceArray[word_index] = replace;
      }
    } else {
      var comparison = sentenceArray[word_index];
      if (comparison.replace(/[.,!?;:]/g, "") === remove) {
        sentenceArray[word_index] = replace.concat(punctuationLocation);
      }
    }
  };

  return sentenceArray.join(" ");
};
