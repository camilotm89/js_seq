document.getElementById("intento").focus();

function operacion(){
	var respuesta="654";
	var op= document.getElementById("intento").value.toString;
}

var respuesta = new Array();
respuesta="aaa";
for(i=0; i<=2; i++){
	var digito=Math.floor((Math.random()*9)).toString();

	while(respuesta.includes(digito.toString())){
		digito=Math.floor((Math.random()*9)).toString();

	}

	respuesta= respuesta.replace(respuesta[i],digito);
	
	console.log(respuesta[1]);
	}


console.log(respuesta);

function intentar(){

	var intento1 = document.getElementById("intento").value;


	var op= intento1.toString();
	var cor=0;
	var pos=0;
	if (respuesta==op){
		alert("correcto");
	}
	for(i=0; i<respuesta.length ;i++){
		if(respuesta.includes(op[i])){
			cor+=1;
		}
		if(respuesta[i]==op[i]){
			pos+=1;
		}
	}


	var historial = document.createElement("div");
	var newcontent = document.createTextNode(intento1);
	var t = document.createTextNode(cor+" acierto(s), "+ pos +" bien posicionado(s)");
	var observacion = document.createElement("p") ;
	observacion.appendChild(t);
	historial.appendChild(newcontent);


	historial.setAttribute("class", "option");

	var divPadre = document.getElementById("opciones");
	//document.body.insertBefore(historial, divPadre);
	divPadre.appendChild(historial);
	divPadre.appendChild(observacion);



	document.getElementById("intento").value = "";
	document.getElementById("intento").focus();
}
