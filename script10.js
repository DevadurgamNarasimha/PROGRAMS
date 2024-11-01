//Question-1
function uniqueString(strings) {
  let counts = {};
  for (let i = 0; i < strings.length; i++){
    let str = strings[i]
    if (counts[str]) {
      counts[str]+=1
    }
    else {
      counts[str] = 1;
    }
  }
  return counts;
}
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
let resb = uniqueString(strings);
console.log(resb);


//Question-2;
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
function sum(numbers){
  return numbers.reduce((sum, num)=>{
    if (num % 3 === 0 || num % 5 === 0) {
      return sum+num
    }
    return sum
  },0)
}
let resa = sum(numbers);
console.log(resa)

//Question-3;
const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
function checkingPalindrome(words) {
  return words.filter(word => {
    return word=== word.split('').reverse().join('');
  });
}
let rese= checkingPalindrome(words);
console.log(rese)


//Question-4;
function filterImgPaths(paths) {
  return paths.filter(path => {
    return path.endsWith(".png") || path.endsWith(".jpg")
  });
}
const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];
let ress = filterImgPaths(filePaths);
console.log(ress)


//Question-5;
function swapStrings(arr) {
  return arr.map(str => {
    if (str.length <= 1) {
      return str;
    }
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    return lastChar + str.slice(1, -1) + firstChar;
  });

}

const stringsSwap = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
let res = swapStrings(stringsSwap);
console.log(res);


//Question-6
function longWords(sentences) {
  sentences.forEach((sentence, index) => {
    const wordCount = sentence.trim().split(/\s+/).length;
    console.log( wordCount)
  })
}
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];
 longWords(sentences);


//Question-7
function oddSquares(numbers) {
  return numbers.filter(num => num % 2 === 1)
    .map(num => num * num)
    .reduce((sum, squares) => sum + squares, 0);
}
let number = [1, 2, 3, 4, 5, 7];
let results = oddSquares(number);
console.log(results);


//Question-8;
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];

let newObj = {};
students.forEach(student => {
  let studentName = student.name;
  let subjectName = subjectsHash[student.subjectID];
  if (!newObj[studentName]) {
    newObj[studentName] = [];
  }
  newObj[studentName].push(subjectName);
});
console.log(newObj);


//Question-9;
let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
function transformData(data) {
  return data.map(student => {
    let marks = [];
    for (let i = 1; i <= 5; i++) {
      let subject = student.subject;
      let score = student[marks];
      if (subject && score !== null) {
        marks.push({ subject, score });
      }
    }
    return { name: student.name, marks };
  });
}

let result = transformData(allStudentsMarksData);
console.log(result);


//Question-10;
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function categorizeVoters(voters) {
  let result = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numYoungVotesPeople: 0,
    numMindsPeople: 0,
    numOldVotesPeople: 0,
    numOldPeople: 0,
  };
  voters.forEach((voter) => {
    if (voter.age <= 20) {
      result.numYoungPeople++;
      if (voter.voted) result.numYoungVotes++;
    } else if (voter.age > 20 && voter.age <= 45) {
      result.numMindsPeople++;
      if (voter.voted) result.numYoungVotesPeople++;
    } else if (voter.age > 45) {
      result.numOldPeople++;
      if (voter.voted) result.numOldVotesPeople++;
    }
  });
  return result;
}
let output = categorizeVoters(voters);
console.log(output);


//Question-11;
const data = [
    {
      name: "Superman",
      favoriteIceCreams: [
        "Strawberry",
        "Vanilla",
        "Chocolate",
        "Cookies & Cream",
      ],
    },
    {
      name: "Batman",
      favoriteIceCreams: [
        "Cookies & Cream",
        "Mint Chocolate Chip",
        "Chocolate",
        "Vanilla",
      ],
    },
    {
      name: "Flash",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
      name: "Aquaman",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
      name: "Green Lantern",
      favoriteIceCreams: [
        "Vanilla",
        "French Vanilla",
        "Vanilla Bean",
        "Strawberry",
      ],
    },
    {
      name: "Robin",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
  ];
  
  function countFavoriteIceCreams(heroes) {
    const iceCreamsCounts = {};
    heroes.forEach(hero => {
      hero.favoriteIceCreams.forEach(flavor => {
        iceCreamsCounts[flavor] = (iceCreamsCounts[flavor] || 0) + 1;
      });
    });
    return iceCreamsCounts
  }
  let outputs = countFavoriteIceCreams(data);
  console.log(outputs)