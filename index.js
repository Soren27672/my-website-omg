const letter = document.getElementById("letter");
const header = document.getElementById("mainHeader");


document.addEventListener('keydown', function (e) {
    letter.textContent = e.key;
    let letterAngle = letter.style.transform.replace('rotate(','');
    letterAngle = letterAngle.replace('deg)','');
    letterAngle++;
    letter.style.transform = `rotate(${letterAngle}deg)`;
    header.style.color = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
});

