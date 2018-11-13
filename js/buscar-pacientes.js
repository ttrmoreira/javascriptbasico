console.log("Buscarei o paciente");

var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function(){
	console.log("Buscando pacientes...");

	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax");	
		if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
			var pacientes = JSON.parse(xhr.responseText);
			pacientes.forEach(function(paciente){
				adicionaPacienteTabela(paciente);
			});
		}else{

			erroAjax.classList.remove("invisivel");
		}


	});
	xhr.send();
	

});