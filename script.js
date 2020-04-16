console.log("Hello World!");
window.onload = function(){
    var calcArea = document.getElementById("calculatorInput"); //set variable to calc display (globally)
    var elements=document.getElementsByClassName("inputElements"); //Create an array of inputElements
    for(var i =0; i < elements.length; i++) {
        elements[i].onclick = function() { //when one of the buttons are pressed
            calcArea.value += this.value; //write out
          };
        }
    var allclear=document.getElementById("clear"); //Set the all-clear variable to ac button
    allclear.onclick = function func() {
      calcArea.value = ""; //set display to empty value
    };
    var equals=document.getElementById("evaluate"); //set variable to evaluate key
    equals.onclick = function equal() { //when attempting to evaluate expression
        try {//try for a successful evaluation
          eval(calcArea.value);
          calcArea.value=eval(calcArea.value);//if successful write out
        }
        catch {//if error
          calcArea.value="Invalid Input!";//Say invalid input!
          setTimeout(() => { calcArea.value=""; }, 3000);//clear screen after 3 seconds
        }
      };
    };
