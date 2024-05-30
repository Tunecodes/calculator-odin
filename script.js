const button = document.querySelectorAll("button");
const dis = document.getElementById("display");
let a = null;
let b = null;
let c = null;
let opp = null;
dis.textContent = null;
button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      if (c != null) {
        dis.textContent = null;
        c = null;
      }
      dis.textContent += button.value;
    } else if (button.classList.contains("operator")) {
      if (opp == null) {
        let num = dis.textContent;
        let operator = button.value;
        a = num;
        opp = operator;
        console.log(a);
        console.log(opp);
        dis.textContent = null;
      }
    } else if (button.classList.contains("equal")) {
      b = dis.textContent;
      console.log(b);
      console.log(operator(a, b, opp));
      dis.textContent = operator(a, b, opp);
      a = dis.textContent;
      c = dis.textContent;
      b = null;
      opp = null;
    } else if (button.classList.contains("sign")) {
      sign();
    } else if (button.classList.contains("decimal")) {
      if (!dis.textContent.includes(".")) {
        dis.textContent += button.value;
      }
    } else if (button.classList.contains("percent")) {
      if (dis.textContent != null) {
        dis.textContent = parseFloat(dis.textContent) / 100;
      }
    } else if (button.classList.contains("clear")) {
      dis.textContent = null;
    }
  });
});

function operator(a, b, opp) {
  switch (opp) {
    case "+":
      return parseFloat(a) + parseFloat(b);
    case "-":
      return parseFloat(a) - parseFloat(b);
    case "*":
      return parseFloat(a) * parseFloat(b);
    case "/":
      return parseFloat(a) / parseFloat(b);
  }
}

function sign() {
  if (dis.textContent[0] != "-") dis.textContent = "-" + dis.textContent;
  else if (dis.textContent == null) {
    dis.textContent = "-";
  } else if (dis.textContent[0] == "-") {
    dis.textContent = dis.textContent.slice(1);
  }
}

function updateNum(num, operator) {
  if (a == null) {
    a = num;
  } else {
    b = num;
  }
  opp = operator;
}
