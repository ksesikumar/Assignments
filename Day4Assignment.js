//Scenario1 : Functions and Expressions
//You are developing a system to manage and analyze election data for the 2024 elections

// Difine The Function And Expression
const calculateVotes = function (candidateName, votes, region) {
    return `Candidate ${candidateName} received ${votes} votes in the ${region} region.`;
};


console.log(calculateVotes("YS Jagan Anna", 500000, "Pulivendula"));
console.log(calculateVotes("Kodali Nani", 400000, "Gudivada"));
console.log(calculateVotes("Sesi", 300000, "Guntur"));


//Scenario2 : Recursive Functions
//To ensure the election data is accurate, you need to verify the votes from multiple sources

function verifyVotes(voteCounts, index = 0) {
    // if the index reaches the length of the array, return 0
    if (index >= voteCounts.length) {
        return 0;
    }

    // add the current element to the result of the function
    return voteCounts[index] + verifyVotes(voteCounts, index + 1);
}

const votesArray = [1200, 3400, 5600, 2300];
console.log(verifyVotes(votesArray)); // Output: 12500


//Scenario3 : Rest Parameters
// Sometimes, you receive votes from an unknown number of regions

function totalVotes(...votes) {
    return votes.reduce((total, currentVote) => total + currentVote, 0);
}

console.log(totalVotes(1200, 3400, 5600, 2300)); // Output: 12500
console.log(totalVotes(1500, 2200));            // Output: 3700

//Scenario4 : Arrow Functions
//You need to quickly filter and analyze the election data using modern ES6 features.

const filterCandidates = (candidates, threshold) => {
    return candidates
        .filter(candidate => candidate.votes > threshold)
        .map(candidate => candidate.name); // Using Map Function
};

const candidates = [
    { name: "Kodali Nani", votes: 250000 },
    { name: "Vamsi", votes: 200000 },
    { name: "Sesi", votes: 210000 },
    { name: "YS Jagan Anna", votes: 680000 }
];

const threshold = 200000;
console.log(filterCandidates(candidates, threshold)); //['Kodali Nani', 'Sesi', 'YS Jagan Anna']


//Scenario5 : Combining Concepts 
//For a comprehensive analysis, you need to write a function that integrates all the concepts mentioned above

const analyzeElection = (threshold, ...candidates) => {
    // Arrow function to filter candidates based on the threshold
    const filteredCandidates = candidates.filter(candidate => candidate.votes > threshold);

    // Recursive function to calculate the total votes of the filtered candidates
    const calculateTotalVotes = (voteCounts, index = 0) => {
        if (index >= voteCounts.length) {
            return 0;
        }
        return voteCounts[index] + calculateTotalVotes(voteCounts, index + 1);
    };

    // Extract the names of the filtered candidates
    const filteredNames = filteredCandidates.map(candidate => candidate.name);

    // Extract the votes of the filtered candidates
    const filteredVotes = filteredCandidates.map(candidate => candidate.votes);

    // Calculate the total votes of the filtered candidates
    const totalFilteredVotes = calculateTotalVotes(filteredVotes);

    // Return an object with the filtered candidates' names and the total votes
    return {
        filteredNames,
        totalVotes: totalFilteredVotes
    };
};

const candidates1 = [
    { name: "Kodali Nani", votes: 250000 },
    { name: "Vamsi", votes: 200000 },
    { name: "Sesi", votes: 210000 },
    { name: "YS Jagan Anna", votes: 680000 }
];

const threshold1 = 200000;
console.log(analyzeElection(threshold1, ...candidates1));
// Output: { filteredNames: ['Kodali Nani', 'Sesi', 'YS Jagan Anna'], totalVotes: 16500 }
