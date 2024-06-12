
  var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/scale_1200.jpg") {
        myImage.setAttribute("src", "images/image.png");
    } else {
        myImage.setAttribute("src", "images/scale_1200.jpg")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("H1");

function setUserName() {
    var myName = prompt("Введите Ваше имя.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Новый Год это круто, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name")
    myHeading.textContent = "Новый Год это круто, " + storedName; 
}
myButton.onclick = function() {
setUserName();
  };