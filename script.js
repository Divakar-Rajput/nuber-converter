

function calculate(){
  let selectinput = document.getElementById("inputtext").value;
  let selectoutput = document.getElementById("output").value;
  let number = document.getElementById("myinput").value;
  let value = number;
  let text = document.getElementById("outputText");
  if(selectinput == "decimal" ){
      value = parseInt(number, 10);        
  }
  else if(selectinput == "binary"){
      value = parseInt(number, 2);          
  }
  else if(selectinput == "octal"){
      value = parseInt(number, 8);  
   }
  else if(selectinput == "hexadecimal"){
      value = parseInt(number, 16);  
  }


  if(selectoutput == "decimal" ){
      decimal = parseInt(value);
      let result = decimal.toString(10)
      text.innerText = result;
      if(result == "NaN"){
        text.innerText = "Invalid Input";
        text.classList.add("error-msg");
      }
      else{
        text.classList.remove("error-msg");
      }       
  }
  else if(selectoutput == "binary"){ 
      decimal = parseInt(value);
      let result = decimal.toString(2)
      text.innerText = result; 
      if(result == "NaN"){
        text.innerText = "Invalid Input";
        text.classList.add("error-msg");
      }
      else{
        text.classList.remove("error-msg");
      }    
  }
  else if(selectoutput == "octal"){
      decimal = parseInt(value);
      let result = decimal.toString(8)
      text.innerText = result;
      if(result == "NaN"){
        text.innerText = "Invalid Input";
        text.classList.add("error-msg");
      }
      else{
        text.classList.remove("error-msg");
      }
   }
  else if(selectoutput == "hexadecimal"){
      decimal = parseInt(value);
      let result = decimal.toString(16)
      text.innerText = result; 
      if(result == "NaN"){
        text.innerText = "Invalid Input";
        text.classList.add("error-msg");
      }
      else{
        text.classList.remove("error-msg");
      }
  }
}