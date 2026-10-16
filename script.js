
const guideName = "Quiet Hours";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display guide name
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

// Dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        "© " + currentYear + " " + guideName;
}

// Count the places reviewed
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

// Three labelled console messages
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Place Count:", runningCount);
