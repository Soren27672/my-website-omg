const letter = document.getElementById("letter");
const header = document.getElementById("mainHeader");
let counter = 0;


document.addEventListener('keydown', function (e) {
    letter.textContent = e.key;
    let letterAngle = letter.style.transform.replace('rotate(','');
    letterAngle = letterAngle.replace('deg)','');
    letterAngle++;
    letter.style.transform = `rotate(${letterAngle}deg)`;
    let randomHex = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
    header.style.color = randomHex;
    letter.style.color = randomHex;
});

document.addEventListener('mousemove', function (e) {
    if (e.type === "mousemove") {
        ++counter;
        header.style.fontSize = `${32 + (0.5 * Math.sin(counter*2))}pt`;
    }
})