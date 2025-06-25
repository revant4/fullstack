let age =18;
if (age<18){
    console.log("You are a Minor.");
}
else if (age>=18 && age<65){
    console.log("You are Adult");
}
else{
    console.log("Youare senior Citizen");
}
console.log("\n");

//Switch case

let day=7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        
        break;
}

//For Loop Example

for (let i = 0; i< 5; i++) { 
    console.log("Iteration",i);    
}
console.log("\n");

//While Loop Example

let j=0;
while (j<5) {
    console.log("While Loop Iteration",j);
    j++;
}
console.log("\n");

//Dowhile Loop Example

let k=0;
do {
    console.log("Do while Iteration",k);
    k++;
} while (k<5);
console.log("\n");