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

        function calculateTrig(func) {
            try {
                const angle = eval(display.value);
                const radians = angle * (Math.PI / 180); // Convert degrees to radians
                switch (func) {
                    case 'sin':
                        display.value = Math.sin(radians);
                        break;
                    case 'cos':
                        display.value = Math.cos(radians);
                        break;
                    case 'tan':
                        display.value = Math.tan(radians);
                        break;
                }
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
        function calacuateFactorial() {
            var display = document.getElementById
            
        const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

        }
         function calculateLn(value) {
            var display = document.getElementById('display')
            display.value += value;
        }
    
            function calculate() {
                var display = document.getElementById('display');
                try {
                    var Number = display.value;
                    Number = Number.replace('Math.log(');
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