const letter = document.getElementById("letter"); // Get references for elements
const header = document.getElementById("mainHeader"); //^^
let counter = 0;


document.addEventListener('keydown', function (e) {
    letter.textContent = e.key; // Set the letter element's text content to be the key that was pressed
    let letterAngle = letter.style.transform.replace('rotate(',''); // Get the raw degree value out of the rotate(xdeg) string
    letterAngle = letterAngle.replace('deg)',''); // ^^
    letterAngle++; // Increment the angle 
    letter.style.transform = `rotate(${letterAngle}deg)`; // Wrap the angle back in the rotate(xdeg) string and apply it to the letter element
    let randomHex = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
    // ^^ generate 3 random integers to create a random hex color code
    header.style.color = randomHex; // Set the header to that color
    letter.style.color = randomHex; // Set the letter to that color
    console.log(letter.style.transform); // For me to check
    checkAlert(letterAngle); // Run function to detect if alert should send
});

document.addEventListener('mousemove', function (e) {
    if (e.type === "mousemove") {
        ++counter;
        header.style.fontSize = `${32 + (0.5 * Math.sin(counter*2))}pt`;
        // Create a counter to increase every time the mouse moves
        // Multiply that counter by sine so that as it increases, we get an output that oscillates around 0
        // Add that oscillator to the font size
        // Font size oscillates as the mouse moves
    }
})

function checkAlert(letterAngle) {
    for (let i = 1;
        i === 1 && // Only send alert when i is 1, then immediately make i 0 so that it only runs once
        Math.floor(letterAngle/90) === letterAngle/90 && // Only send if angle is evenly divisible by 90
        letterAngle !== 0; // Don't send if angle is 0 >:(
        i--) {
        alert("Sounds to me like someone's coding...\nVery impressive...");
        console.log('It ran!\nYay!');
    }
}