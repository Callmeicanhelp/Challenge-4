const obj = '{"name":"", "score":TimeLeft}';
const myObj = JSON.parse(myJSON);
document.getElementById("highscores").innerHTML = myObj.name;