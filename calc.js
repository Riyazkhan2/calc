let display =document.getElementById("display")

function input(value) {
    if (display.innertex ==="0"){
        display.innerText= value;
    } else {
        display.innerText +=value;
    }
}

function clearDisplay() {
    display,innerText ="0";
}

function deletelast() {
    display,innerText=display.innerText.slice(0. -1) ||"0";
}

function calculate() {
    try {
        display,innerText=eval(display,innerText.replace("x,:*").replace("÷","/"));
    } catch {
        display.innerText="Error";
    }
}