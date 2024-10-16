# Coding Solutions

This repository contains solutions to three coding problems. Each solution has its own section, with instructions on how to run them.

## Instructions to Run:

Copy the code into a JavaScript file (e.g., normalize.js).
Open a terminal and run the file using Node.js:

```
node index.js
```

## Question 1: Normalize and Clean Input String

### Problem:

Given a string, remove special characters, trim extra spaces, and convert the cleaned string to title case (capitalize the first letter of each word).

### Solution:

```javascript
let input = " Hello!   World@ this is a Test!. ";
let afterTrim = input.trim();

function onlyAllowedCh() {
  let allowedCh = "";
  for (let i = 0; i < afterTrim.length; i++) {
    if (/[a-zA-Z0-9 ]/.test(afterTrim[i])) {
      if (afterTrim[i] == " " && afterTrim[i - 1] == " ") {
        continue;
      }
      allowedCh += afterTrim[i];
    }
  }
  return allowedCh;
}

console.log(
  onlyAllowedCh()
    .split(" ")
    .map((WORD) => WORD[0].toLocaleUpperCase() + WORD.slice(1))
    .join(" ")
);
```

## Question 2: Find Matching Question and Answer

Problem:
Given a predefined list of questions and answers, match a user’s input with a question from the list and return the corresponding answer. If no match is found, return a default response.

```
let preDefinedQn = [
  {
    question: "What is your name?",
    answer: "My name is Chatbot.",
  },
  {
    question: "How can I help you?",
    answer: "I can assist you with your queries",
  },
  {
    question: "What is the weather today?",
    answer: "The weather is sunny",
  },
];

let userQn = "today weather";
let matchedQn = preDefinedQn.filter((obj) =>
  userQn
    .split(" ")
    .find((word) => obj.question.toLowerCase().includes(word.toLowerCase()))
);

if (matchedQn.length > 0) {
  console.log(matchedQn[0].answer);
} else {
  console.log("Sorry, I don't have an answer to that.");
}

```

### Question 3: Rank Colleges by User Preferences

Problem:
Rank colleges based on user preferences for location, fees, and ranking. The score for each college is calculated based on a formula, and the colleges are sorted by the score in non-decreasing order (lower scores are better).

```
let collegeArr = [
  { Name: "College A", Location: "New York", Fees: 20000, Ranking: 1 },
  { Name: "College B", Location: "California", Fees: 15000, Ranking: 2 },
  { Name: "College C", Location: "New York", Fees: 25000, Ranking: 3 },
  { Name: "College D", Location: "New York", Fees: 10000, Ranking: 4 },
];

let preferredLocation = "New York";
let maxFees = 20000;
let rankingWeight = 2;
let feesWeight = 1;

let filteredColleges = collegeArr
  .filter((obj) => obj.Location === preferredLocation && obj.Fees <= maxFees)
  .map((obj) => {
    let { Fees, Ranking } = obj;
    let Score = Ranking * rankingWeight + (Fees / maxFees) * feesWeight;
    return { ...obj, Score: Score };
  })
  .sort((a, b) => a.Score - b.Score);

filteredColleges.forEach((obj) => {
  console.log(
    `Name: ${obj.Name}, Location: ${obj.Location}, Fees: ${obj.Fees}, Ranking: ${obj.Ranking}, Score: ${obj.Score}`
  );
});

```
