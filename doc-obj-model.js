const username = 'Panda';
document.title = 'hey'; // changes title
document.body.style.backgroundColor = 'black';
document.getElementById("welcome-msg").style.color = 'white';
document.getElementById("welcome-msg").textContent += username=== ""?"Guest":username;
