let display = document.getElementById('display');
        
function appendToDisplay(value) {
            display.value += value;
        }

function clearDisplay() {
            var display = document.getElementById('display');
            display.value = '';
        }

function deleteLastChar() {
            var display = document.getElementById('display');
            var currentValue = display.value;
            display.value = currentValue.substring(0, currentValue.length - 1);
        }
function percentageDisplay() {
    var display = document.getElementById('display')
    var currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
       display.value = (currentValue / 100).toString(); 
    }
}

 function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

    function calculateTrig(value) {
        var display = document.getElementById('display')
        display.value += value;
    }

        function calculate() {
            var display = document.getElementById('display');
            try {
                var expression = display.value;
                expression = expression.replace(/sin\(/g, 'Math.sin(Math.PI)(');
                expression = expression.replace(/cos\(/g, 'Math.cos(Math.PI)(');
                expression = expression.replace(/tan\(/g, 'Math.tan(Math.PI)(');
                expression = expression.replace(/asin\(/g, 'Math.asin(');
                expression = expression.replace(/acos\(/g, 'Math.acos(');
                
                display.value = eval(expression);
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculatePi() {
            var display = document.getElementById('display');
            try {
                const value= eval(display.value);
                display.value = Math.PI;
            } catch (error) {
                display.value = 'Error';
            }
        }

        function calculateSqrt() {
            try {
                const value = eval(display.value);
                display.value = Math.sqrt(value);
            } catch (error) {
                display.value = 'Error';
            }
        }
      function calculateFactorial() {
         var display = getElementById('display')
         var currentValue = parseFloat(current.Value)
         if (!isNaN(currentValue)) {
            display.value = (n == 0 || n == 1).toString();
        }
            
         else if(n > 1){
            for(var i = n; i >= 1; i--){
                answer =  answer * i;
            }

            } 
         }
         function calculateLn(value) {
            var display = document.getElementById('display')
            display.value += value;
        }
    
            function calculate() {
                var display = document.getElementById('display');
                try {
                    var Number = display.value;
                    Number = Number.replace(/ln\(/g, 'Math.log(');
                    display.value = eval(Number);
                } catch (error) {
                    display.value = 'Error';
         }
        }
         function calculateLog(value) {
            var display = document.getElementById('display')
            display.value += value;
        }
    
            function calculate() {
                var display = document.getElementById('display');
                try {
                    var Number = display.value;
                    Number = Number.replace(/log\(/g, 'Math.log10(');
                    display.value = eval(Number);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            function calculateExp() {
                try {
                    const value = eval(display.value);
                    display.value = Math.exp(value);
                } catch (error) {
                    display.value = 'Error';
            }
        }
        function calculatePow() {
            try {
                const value = eval(display.value);
                display.value = Math.pow(value,Number);
            } catch (error) {
                display.value = 'Error';
        }
    }