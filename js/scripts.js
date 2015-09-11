var findReplace = function(sentence, remove, replace) {
  var sentenceArray = sentence.split(" ");

  for(var word_index = 0; word_index < sentenceArray.length; word_index++){
    if (sentenceArray[word_index] === remove) {
      sentenceArray[word_index] = replace;
    }
  };

  return sentenceArray.join(" ");
};
