Words= () => {
    let paragraph = "A dog has a strong power of smell. They are more liked by people because of their faithfulness.The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it. They are intelligent, they are watchfulness. The dogs have many colors such as grey, white, black, brown and red. They are of many kinds such as bloodhound, greyhound, german shepherd, Labrador, Rottweiler, bulldog poodle, etc.Usually, the dog eats fish, meat, milk, rice, bread, etc. Dogs are sometimes called canines. Dogs are sometimes referred to as man best friend because they are kept as domestic pets and are usually loyal and like being around humans. They are also helpful in reducing stress, anxiety, and depression, loneliness, encourage exercise and playfulness and even improve your cardiovascular health. A dog also provides valuable companionship for older adults.";
    text = paragraph.replace(/[, . ]/g, ' ').toLowerCase();
    const wordFrequency = paragraph.split(" ");
    const wordCount = {};
   const words=paragraph.match(/(\w+)/g).length;
   console.log(words);
    wordFrequency.forEach((item) => {
      if (wordCount[item] == null) wordCount[item] = 1;
      else {
        wordCount[item] += 1;
      }
      if (item === '') wordCount[item] = 0;
    });
    let Frequency = Object.entries(wordCount).sort(function (a, b) { return b[0] - a[0] });
  
    const Obj = Object.fromEntries(Frequency);
    return Obj;
  }
  console.log(Words());