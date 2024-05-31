//Day-1 Assignment
//Scenario1.js

let currentTemperature = 20; // Initial temperature

// Function to update the temperature
function updateTemperature(newTemperature) {
    currentTemperature = newTemperature;
    console.log(`The updated temperature is ${currentTemperature}°C`);
}

// Simulating temperature changes throughout the day
updateTemperature(25); // Temperature rises to 25°C
updateTemperature(30); // Temperature rises to 30°C
updateTemperature(22); // Temperature drops to 22°C

//Scenario2.js

// Initial declaration with a typo
const daysOfWeek = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Notice A Mistake In Spelling On One Day i.e Tuesday Firstly We Declare The Tusday
const daysOfWeekCorrected = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(daysOfWeekCorrected);

//Scenario3.js

function calculateSum(a, b) {
    let sum = a + b;  // sum is only accessible within this function block
    return sum;
}

console.log(calculateSum(5, 3));  // Outputs: 8
// console.log(sum);  // This would cause an error because sum is not accessible here

//Scenario4.js

const PI = 3.14159;

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
    return 2 * PI * radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    return PI * radius * radius;
}

console.log(calculateCircumference(5));  // Outputs: 31.4159
console.log(calculateArea(5));           // Outputs: 78.53975

// Attempting to reassign PI will result in an error
// PI = 3.14;  // Uncommenting this line would cause a TypeError

//Scenario5.js

const array = [1, 2, 3, 4, 5];

//can use let to declare an index variable in a for loop

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//The variable i declared with let is only accessible within the for loop
// console.log(i); // This will cause a ReferenceError because i is not accessible here

//Scenario6.js

const userProfile = {
    name: "Sesi Kumar",
    dateOfBirth: "1998-11-07"
};

// Freeze the immutable properties
Object.freeze(userProfile.dateOfBirth); // We Can Use The writeble Attribute we can't use The object.freeze attribute

// Adding mutable properties
userProfile.email = "ksesikumar7@gmail.com";
userProfile.address = "123 Guntur";

// Attempting to change immutable properties will have no effect
userProfile.dateOfBirth = "1996-07-25"; // This will not change the dateOfBirth

// Changing mutable properties
userProfile.email = "New.ksesikumar7@gmail.com";
userProfile.address = "New 123 Guntur";

console.log(userProfile);

// Day-2 Assignment
//Scenario1.js

// To Find The Top Scorer Of The Team
const players = [
    { name: 'Gopi', team: 'RR', runs: 350 },
    { name: 'Mahesh', team: 'SRH', runs: 420 },
    { name: 'Vinod', team: 'RCB', runs: 310 },
    { name: 'Anil Sir', team: 'KKR', runs: 470 },
    { name: 'Naveen', team: 'Panjab', runs: 390 },
    { name: 'Venky', team: 'Gujarath', runs: 280 },
    { name: 'Sesi', team: 'CSK', runs: 450 },
    { name: 'Chintu', team: 'MI', runs: 290 },
    { name: 'Suresh', team: 'Delhi', runs: 330 }
];
// Write The Function
function getTopScorers(players) {
    // Sort the players array by runs in descending order
    players.sort((highScore, lowScore) => lowScore.runs - highScore.runs);

    const topScorers = players.slice(0, 2);// Select the top 2 players By Using Slice Method

    return topScorers;
}

const topScorers = getTopScorers(players);
console.log(topScorers);

//Scenario2.js

const teamWins = {
    "MI": 5,
    "CSK": 5,
    "SRH": 2,
    "KKR": 3,
    "RCB": 0,
    "Gujarath": 1,
    "Delhi": 0,
    "RR": 2
};

//We will parse this JSON object, iterate through its properties

function teamWithMaxWins(wins) {
    let maxWins = -1;
    let maxWinsTeam = '';

    for (const team in wins) {
        if (wins[team] > maxWins) {
            maxWins = wins[team];
            maxWinsTeam = team;
        }
    }

    return maxWinsTeam;
}

const topTeam = teamWithMaxWins(teamWins);
console.log(`The Team With The Maximum Wins Is: ${topTeam}`);

//Scenario3.js

// We Can Use The Data For Taken In The Scenario1

//function will accept a team name as a parameter
function getPlayersByTeam(players, teamName) {
    return players.filter(player => player.team === teamName);
}

const teamName = 'CSK';  // Example team name to search for
const teamPlayers = getPlayersByTeam(players, teamName);
console.log(`Players in team ${teamName}:`, teamPlayers);
