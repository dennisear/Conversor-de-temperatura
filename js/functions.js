function cargarEscalaUno(){ //Arreglo que carga los signos de la primera lista
    let escalaUno=['Celsius', 'Fanherenheit', 'Kelvin']
    for (var i in escalaUno){
      document.getElementById('selectEscala1').innerHTML += "<option value='"+escalaUno[i]+"'>"+escalaUno[i]+"</option>";
    } 
}

function cargarEscalaDos(){ //Arreglo que carga los signos de la primera lista
    let escalaDos=['Celsius', 'Fanherenheit', 'Kelvin']
    for (var i in escalaDos){
      document.getElementById('selectEscala2').innerHTML += "<option value='"+escalaDos[i]+"'>"+escalaDos[i]+"</option>";
    } 
}
  
function conversionTem(){ //Función que selecciona los elementos a comparar 
    let escalaA=document.getElementById('selectEscala1'); //Selecciona un elemento del documento por medio del valor del atributo id 
    let escalaC = escalaA.options[escalaA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada
    
    let escalaDosA=document.getElementById('selectEscala2'); //Selecciona un elemento del documento por medio del valor del atributo id 
    let escalaDosC = escalaDosA.options[escalaDosA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada
  
        numero = parseInt(document.getElementById("num1").value);

        if (escalaC==escalaDosC){
           document.getElementById("result").innerHTML = "¡No comprendo lo que quiere convertir! Por favor, seleccione diferentes opciones." 
        } else if(escalaC=="Celsius" &&  escalaDosC=="Fanherenheit"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + ((numero*1.8)+32).toFixed(2) + "°"+ " Fanherenheit";
        } else if (escalaC=="Fanherenheit" &&  escalaDosC=="Celsius"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + ((numero-32)*5/9).toFixed(2) + "°"+ " Celcius";
        } else if (escalaC=="Celsius" &&  escalaDosC=="Kelvin"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + (numero+273.15).toFixed(2) + " Kelvin";
        } else if (escalaC=="Kelvin" &&  escalaDosC=="Celsius"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + (numero-273.15).toFixed(2) + "°"+ " Celcius";
        } else if (escalaC=="Fanherenheit" &&  escalaDosC=="Kelvin"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + ((numero-32)*5/9+273.15).toFixed(2)  + " Kelvin";
        } else if (escalaC=="Kelvin" &&  escalaDosC=="Fanherenheit"){
            return document.getElementById("result").innerHTML = "Su temperatura es de " + (1.8(numero-273.15)+32).toFixed(2)
        } else{ // Espacio vacío cuando no se haya seleccionado ninguna escala
            document.getElementById("result").innerHTML = "";
        }
    }
  
  cargarEscalaUno(); //Función que carga el arreglo #1
  cargarEscalaDos(); //Función que carga el arreglo #2