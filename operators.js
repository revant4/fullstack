//1.ArthemeticOperators

let a= 9;
let b= 23;
console.log("Arthemetic operators:");
console.log("a:",a,",b: ",b);
console.log("sum:",a+b);
console.log("Difference:",a-b);
console.log("Product:",a*b);
console.log("Remainder:",a%b);
console.log("Division:",a/b);
console.log("Exponent of a:",a**b);

//2.Assiginment Operators

let x=10;
x +=5;
x -=3;
x *=2;
x /=2;
x %=3;
console.log("Assigiment operators:");
console.log("X after assiginment:",x);
console.log("\n");

//3.Comparition operators

let isEqual = (a == b);
let isStrictEqual = (a == b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a != b);
let isLessThan = (a<b);
let isGreaterThan = (a>b);
let isLessThanOrEqual = (a<=b);
let isGreaterThanOrEqual = (a>=b);
console.log("Comparison Operators");
console.log("is equal",isEqual);
console.log("isStrictEqual",isStrictEqual);
console.log("isLessthan",isLessThan);
console.log("isGreaterthan",isGreaterThan);
console.log("isLessOrEqual",isLessThanOrEqual);
console.log("isGreaterOrEqusl",isGreaterThanOrEqual);
console.log("isNotEqual",isNotEqual);
console.log("isStrictNotEqual",isStrictNotEqual);
console.log("\n");

//4.LogicalOperators

let andOperator = (a>0 && b>0);
let orOperator = (a>0 || b<0);
let notOperator = !(a<b);
console.log("LogicalOperators");
console.log("AND operator",andOperator);
console.log("OR operator",orOperator);
console.log("NOT operator",notOperator);
console.log("\n");

//5.BitwiseOperators

let bitwiseAnd = a&b;
let bitwiseOr = a|b;
let bitwiseXor = a^b;
let bitwiseNot = ~a;
let leftShift = a<<1;
let rightshift = a>>1;
console.log("BitwiseOpertors");
console.log("BitwiseAnd",bitwiseAnd);
console.log("BitwiseOr",bitwiseOr);
console.log("BitwiseXor",bitwiseXor);
console.log("BitwiseNot",bitwiseNot);
console.log("BitwiseLeft",leftShift);
console.log("BitwiseRight",rightshift);
console.log("\n");

//6.TernaryOperator(Condtion statements)

let age = 18;
let eligibility = (age >= 18) ? "Eligible to Vote" : "Not Eligible to Vote";
console.log("Ternary Operator");
console.log("Eligibility:",eligibility);
console.log("\n");

//7.TypeOf Operator

let variableType = typeof a;
console.log("Type of Operator");
console.log("Type of Variable 'a':",variableType);
console.log("\n");