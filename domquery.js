
document.title="Dom in JS"
document.body.style.backgroundColor="lightblue";
document.getElementById("head1").innerHTML="Hello World!";
document.getElementById("para1").innerHTML="Welcome to DOM Manuplator";
document.getElementsByTagName("h2")[1].style.color="blue";
document.getElementsByClassName("ds")[0].style.color="red";
document.getElementsByClassName("ds")[1].style.color="blue";
document.getElementsByClassName("ds")[2].style.color="yellow";
document.getElementsByClassName("ds")[3].style.color="green";
document.getElementsByTagName("h2")[2].style.color="blue";
let revanth=document.getElementsByClassName("em");
revanth[0].style.color = "Red";
revanth[1].style.color="green";
revanth[2].style.color="grey";
document.querySelector(".dsa").style.color="red";
let depts=document.querySelectorAll(".eb");
depts[0].style.color = "lightgreen";
depts[1].style.color="grey";
depts[2].style.color="yellow";

function changeBackground(){
    document.body.style.backgroundColor="red";
    alert("Your background colour changed");
}
function changeBackground(){
    if(document.body.style.backgroundColor==="red"){
        document.body.style.backgroundColor="blue";

    }
    else{
        document.body.style.backgroundColor="red";
    }
}
function changetext(){
    document.getElementById("clg").innerHTML = "VIT,IIT-HYDERABAD";
    document.getElementById("clg").style.backgroundColor = "coral";
    document.getElementById("clg").style.color = "white";
    document.getElementById("clg").style.fontSize = "30px";
    document.getElementById("clg").style.textALign = "center"
}
