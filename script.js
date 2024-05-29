const button = document.querySelectorAll("button");
const dis = document.getElementById("display");
let a = null;
let b = null;
let opp = null;
dis.textContent = null;
button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {


    


      dis.textContent += button.value;
    } else if (button.classList.contains("operator")) {
      let num = dis.textContent;
      let operator = button.value;
      a = num;
      opp = operator;
      console.log(a);
      console.log(opp);
      dis.textContent = null;
    } else if (button.classList.contains("equal")) {
        b = dis.textContent;
        console.log(b);
        console.log(operator(a,b,opp));
        dis.textContent = operator(a,b,opp);
        a = dis.textContent;
        b = null;



    }
  });
});

function operator(a,b,opp) {
    if (opp === "+")
    return parseInt(a) + parseInt(b);
}

function updateNum (num, operator) {
    if (a == null) {
        a = num;
    } else {
        b = num;
    }
    opp = operator;
}

function display(button) {}

function add(a, b) {}

function subtract(a, b) {}

function multiply() {}

function divide() {}


