let calciContainer = document.createElement("div");
calciContainer.style.backgroundColor = "#f5f5f5";
calciContainer.style.width = "300px";
calciContainer.style.margin = "20px auto";
calciContainer.style.padding = "20px 15px";
let h1ele = document.createElement("h1");
h1ele.setAttribute("id", "title");
h1ele.textContent = "Calculator";
let pele = document.createElement("p");
pele.setAttribute("id", "description");
pele.textContent = "Calculation of Numbers";
let input = document.createElement("input");
input.setAttribute("placeholder", "0");
// input.setAttribute("type", "number");
input.setAttribute("id", "result");
input.className = "form-control";
// input.setAttribute("placeholder", "0");

input.style.textAlign = "right";

let numberButton = function (value) {
  let ele = document.createElement("button");
  ele.className = "btn rounded-circle text-white bg-dark my-4";
  ele.textContent = value;
  ele.style.width = "40px";
  ele.style.height = "40px";
  return ele;
};

let operationButton = function (value) {
  let ele = document.createElement("button");
  ele.className = "btn rounded-circle text-dark bg-warning my-4";
  ele.textContent = value;
  ele.style.width = "40px";
  ele.style.height = "40px";
  return ele;
};

let cButton = function (value) {
  let ele = document.createElement("button");
  ele.className = "btn rounded-circle text-light bg-danger my-4";
  ele.textContent = value;
  ele.style.width = "40px";
  ele.style.height = "40px";
  return ele;
};

let assignButton = function (value) {
  let ele = document.createElement("button");
  ele.className = "btn rounded-circle text-light bg-success my-4";
  ele.textContent = value;
  ele.style.width = "40px";
  ele.style.height = "40px";
  return ele;
};

let row = document.createElement("div");
row.className = "row justify-content-between text-center";

let colspans = document.createElement("div");
colspans.className = "col-md-3";

let colspans1 = document.createElement("div");
colspans1.className = "col-md-3";

let colspans2 = document.createElement("div");
colspans2.className = "col-md-3";

let colspans3 = document.createElement("div");
colspans3.className = "col-md-3";

document.body.append(h1ele, pele, calciContainer);
calciContainer.append(input, row);
row.append(colspans, colspans1, colspans2, colspans3);
let [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9] = [
  numberButton(0),
  numberButton(1),
  numberButton(2),
  numberButton(3),
  numberButton(4),
  numberButton(5),
  numberButton(6),
  numberButton(7),
  numberButton(8),
  numberButton(9),
];
let [add, subtract, multiply, divide] = [
  operationButton("+"),
  operationButton("-"),
  operationButton("x"),
  operationButton("/"),
];
let cancelButton = cButton("C");
cancelButton.setAttribute("id", "clear");
let assign = assignButton("=");
assign.setAttribute("id", "equal");
add.setAttribute("id", "add");
subtract.setAttribute("id", "subtract");
num1.setAttribute("id", "1");
num2.setAttribute("id", "2");
num3.setAttribute("id", "3");
num4.setAttribute("id", "4");
num5.setAttribute("id", "5");
num6.setAttribute("id", "6");
num7.setAttribute("id", "7");
num8.setAttribute("id", "8");
num9.setAttribute("id", "9");
num0.setAttribute("id", "0");

let [back, madd, msub, mc, mr] = [
  numberButton("<--"),
  numberButton("M+"),
  numberButton("M-"),
  numberButton("MC"),
  assignButton("MR"),
];

colspans.append(num7, num4, num3, cancelButton, mc);
colspans1.append(num8, num5, num2, num0, madd);
colspans2.append(num9, num6, num1, assign, msub);
colspans3.append(add, subtract, multiply, divide, mr);
let num = "";
back.addEventListener("click", function () {
  num = num.toString().split("").slice(0, -1).join("");
  input.value = num;
});
let mArr = [];
madd.addEventListener("click", function () {
  mArr.push(" + ", `(${num})`);
  num = "";
  input.value = num;
  localStorage.setItem("calcMemory", mArr.join(" "));
});
msub.addEventListener("click", function () {
  mArr.push(" - ", `(${num})`);
  num = "";
  input.value = num;
  localStorage.setItem("calcMemory", mArr.join(" "));
});
mr.addEventListener("click", function () {
  mArr.shift();
  for (let i = 0; i < mArr.length; i++) num = eval(mArr.join(" "));
  mArr = [num];
  input.value = num;
  localStorage.setItem("calcMemory", num);
  num = "";
});
mc.addEventListener("click", function () {
  mArr = [];
  localStorage.clear();
});
cancelButton.addEventListener("click", function () {
  num = "";
  input.value = num;
});
num0.addEventListener("click", function () {
  num += "0";
  input.value = num;
});
num7.addEventListener("click", function () {
  num += "7";
  input.value = num;
});

num1.addEventListener("click", function () {
  num += "1";
  input.value = num;
});
num2.addEventListener("click", function () {
  num += "2";
  input.value = num;
});
num3.addEventListener("click", function () {
  num += "3";
  input.value = num;
});
num4.addEventListener("click", function () {
  num += "4";
  input.value = num;
});

num5.addEventListener("click", function () {
  num += "5";
  input.value = num;
});
num6.addEventListener("click", function () {
  num += "6";
  input.value = num;
});
num8.addEventListener("click", function () {
  num += "8";
  input.value = num;
});
num9.addEventListener("click", function () {
  num += "9";
  input.value = num;
});

add.addEventListener("click", function () {
  num += " + ";
  input.value = num;
});
subtract.addEventListener("click", function () {
  num += " - ";
  input.value = num;
});
multiply.addEventListener("click", function () {
  num += " * ";
  input.value = num;
});
divide.addEventListener("click", function () {
  num += " / ";
  input.value = num;
});

assign.addEventListener("click", function () {
  let arr = input.value.split(" ");
  for (let i = 0; i < arr.length; i++) num = eval(arr.join(" "));
  input.value = num;
  num = "";
});
