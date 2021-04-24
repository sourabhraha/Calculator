var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i< buttons.length; i++)
{
    buttons[i].addEventListener("click",function(){


        var value = this.getAttribute("data-value");
    

        if(value == "+")
        {
         
            operator = "+";
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";
      
        }

        else if(value == "-")
        {
            operator = "-";
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }

        else if(value == "*")
        {
            operator = "*";
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";
        }

        else if(value == "/")
        {
            operator = "/";
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }

        else if(value == ".")
        {
            display.innerHTML+=".";
        }

        else if(value == "del")
        {

            operand1 = display.textContent;

            var str = operand1.toString();
            var res = str.slice(0,str.length-1);

            display.innerText = res;
           

            
          
        }

        else if(value == "+/-")
        {
           
        
          var x;
          x = parseFloat(display.textContent);
          display.innerText = -x;


        }

        else if(value == "^")
        {
            operator = "**";
            operand1 = parseFloat(display.textContent);
            display.innerHTML = "";

        }

        else if(value == "=")
        {

            operand2 = parseFloat(display.textContent);
            display.innerHTML = "";

            var result = eval(operand1 + " " + operator + " " + operand2 );

            display.innerHTML+=result.toFixed(2);
        }

        else if(value == "AC")
        {
            display.innerHTML = ""
        }

        else
        {
            display.innerHTML +=  value;
        }




    })
}