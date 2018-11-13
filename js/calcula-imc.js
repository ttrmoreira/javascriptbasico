
var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i]

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		console.log("Peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		console.log("Peso inválido");
		alturaEhValida = false;
		tdImc.textContent = "Altura Inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValida && pesoEhValido){
		tdImc.textContent = calculaImc(peso,altura);	
	}

}

function calculaImc (peso, altura){	
		var imc = 0;
		imc = peso / (altura * altura);
		return imc.toFixed(2);	
}


function validaPeso(peso){
	if(peso < 0 || peso > 1000){
		return false;
	}
	return true;
}

function validaAltura(altura){
	if(altura < 0 || altura > 3.0){
		return false;
	}
	return true;
}
