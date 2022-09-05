
var screenNum;
document.getElementById("input-num").addEventListener("keyup", () => {
    screenNum = document.getElementById("input-num").value;
});

var savedNum;
var operation = "no";

document.getElementById("add-button").addEventListener("click", () => savedOp("+"))
document.getElementById("sub-button").addEventListener("click", () => savedOp("-"))
document.getElementById("mul-button").addEventListener("click", () => savedOp("*"))
document.getElementById("div-button").addEventListener("click", () => savedOp("/"))

function savedOp(s) {
    if (operation == "no") {
        savedNum = screenNum,
            operation = s,
            document.getElementById("partial").innerText = savedNum + operation;
    } else {
        var r = savedNum + operation + screenNum;
        var sol = eval(r);
        operation = s;
        document.getElementById("input-num").value = sol;
        screenNum = document.getElementById("input-num").value;
        savedNum = document.getElementById("input-num").value;
        document.getElementById("partial").innerText = savedNum + operation;
    };
};

document.getElementById("equal-button").addEventListener("click", () => {
    if (operation == "no") {
        document.getElementById("result").innerText = "Error";
        document.getElementById("partial").innerHTML = "Error";
    } else {
        var r = savedNum + operation + screenNum;
        document.getElementById("partial").innerText = r;
        var sol = eval(r);
        document.getElementById("result").innerText = sol;
        document.getElementById("input-num").value = sol;
        screenNum = document.getElementById("input-num").value;
        savedNum = document.getElementById("input-num").value;
        operation = "no"
    }
});