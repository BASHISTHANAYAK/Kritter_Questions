// ***************************
// question -1

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

// ******************************************************
// question -2

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

// ******************************************************
// question -3
let collegeArr = [
  { Name: "College A", Location: "New York", Fees: 20000, Ranking: 1 },
  { Name: "College B", Location: "California", Fees: 15000, Ranking: 2 },
  { Name: "College C", Location: "New York", Fees: 25000, Ranking: 3 },
  { Name: "College D", Location: "New York", Fees: 10000, Ranking: 4 },
];

// The formula to calculate the score for a college is as follows:
// Score=(Ranking × rankingWeight) + (Fees / maxFees × feesWeight)

let preferredLocation = "New York";
let maxFees = 20000;
let rankingWeight = 2;
let feesWeight = 1;

let filteredColleges = collegeArr
  .filter((obj) => obj.Location == preferredLocation && obj.Fees <= maxFees)
  .map((obj) => {
    let { Fees, Ranking } = obj;
    let Score = Ranking * rankingWeight + (Fees / maxFees) * feesWeight;
    return { ...obj, Score: Score };
  })
  .sort((a, b) => a.Score - b.Score);


// Name: College A, Location: New York, Fees: 20000, Ranking: 1, Score: 4.00
filteredColleges.forEach((obj) => {
  console.log(
    `Name:${obj.Name},Location: ${obj.Location}, Fees: ${obj.Fees}, Ranking: ${obj.Ranking}, Score: ${obj.Score} `
  );
});
