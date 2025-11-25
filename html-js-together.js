const newh1 = document.createElement("h1");
newh1.textContent = 'i like javascript';
document.body.append(newh1);
// document.body.prepend(newh1);
newh1.id = 'myH1';
newh1.style.color = 'teal';
newh1.style.textAlign = 'center'
document.getElementById("box1").prepend(newh1);
// document.getElementById("box2").prepend(newh1);
// const box2 = document.getElementById("box4");
// document.body.insertBefore(newh1,box2);
// const boxes = document.querySelectorAll("box");
// document.body.insertBefore(newh1,boxes[3]);
document.getElementById("box1").removeChild(newh1); 