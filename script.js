
const guideName = "Quiet Hours";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// 1. Display guide name
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

// 2. Dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        "© " + currentYear + " " + guideName;
}

// 3. Count featured places
const places = [
    "Binondo Bridge",
    "Baluarte de San Diego",
    "Fort Santiago"
];

runningCount = places.length;

const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
    placeCountElement.textContent =
        "Places featured in this guide: " + runningCount;
}


// MISSION 8.4: PLACE GUIDE DECISIONS

// 1. Rating Label
const placeRating = 4.5;

const ratingScoreElement = document.getElementById("rating-score");

if (ratingScoreElement) {
    ratingScoreElement.textContent = placeRating + " / 5";
}

const ratingLabel = document.getElementById("rating-label");

if (ratingLabel) {
    if (placeRating >= 4) {
        ratingLabel.textContent = "Highly recommended";
    } else if (placeRating >= 2.5 && placeRating < 4) {
        ratingLabel.textContent = "Worth a visit";
    } else {
        ratingLabel.textContent = "Only if you're nearby";
    }
}


// 2. Budget Check
const priceLevel = 2;
const isPlaceOpen = true;

const isGoodOption =
    priceLevel <= 2 && isPlaceOpen === true;

const budgetStatus = isGoodOption
    ? "Good option right now"
    : "Maybe another time";

const budgetStatusElement =
    document.getElementById("budget-status");

if (budgetStatusElement) {
    budgetStatusElement.textContent = budgetStatus;
}


// 3. Distance Note
const isWithinWalkingDistance = true;

const distanceNote = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

const distanceNoteElement =
    document.getElementById("distance-note");

if (distanceNoteElement) {
    distanceNoteElement.textContent = distanceNote;
}


// CONSOLE LOGS
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Place Count:", runningCount);
console.log("Place Rating:", placeRating);
console.log("Good Budget Option:", isGoodOption);
console.log("Walking Distance:", isWithinWalkingDistance);


