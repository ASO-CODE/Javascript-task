function convertFahrToCelsius(fahrenheit)
 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) / 1.8;
  var finalAnswer = fToCel.toFixed(4);
  var message = fTemp+'\xB0F is ' + finalAnswer + '\xB0C.';
    console.log(message);
}