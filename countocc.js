// function  countword(str)
// {

//     str.map((element)=>
//     {

    
//     console.log(str.count(element));
//     })
     

// }
//  let str=["this is my bag this bag "];
// countword(str);
//     console.log(count("this"));
function countWordOccurrences(string) {
    const wordsArray = string.split(/\b/);
    const wordCount = {};
  
    wordsArray.map((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
      });
  
    return wordCount;
  }
  
  // Example usage
  const sentence = 'This is a sample sentence. Sentence is repeated to test the occurrence count';
  const wordOccurrences = countWordOccurrences(sentence);
  console.log(wordOccurrences);
  