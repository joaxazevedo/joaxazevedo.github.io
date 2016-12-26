var controle_input = true;
var Modal = $("#abrirFiltro");

$("#abrirFiltro").on('show.bs.modal', function (e) {
	var estado 			= $('#estado').val();
	var cidade 			= $('#cidade').val();
	var cardgame 		= $('#cardgame').val();
	var status 			= $('#status').val();
	
	if ($.trim(estado) !== "0" || $.trim(cidade) !== "0" || $.trim(cardgame) !== "0" || $.trim(status) !== "0" ||
		$.trim(estado) !== "" || $.trim(cidade) !== "" || $.trim(cardgame) !== "" || $.trim(status) !== "") {
		$('#input-estado').removeClass('has-error');
		$('#input-cidade').removeClass('has-error');
		$('#input-cardgame').removeClass('has-error');
		$('#input-status').removeClass('has-error');
		
		$('#input-estado').removeClass('has-success');
		$('#input-cidade').removeClass('has-success');
		$('#input-cardgame').removeClass('has-success');
		$('#input-status').removeClass('has-success');
	}	
});

$('#AtualizaFiltro').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#AtualizaFiltro').hide();
});

$('#AlertSaiu').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#AlertSaiu').hide();
});

$('#AlertEntrou').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#AlertEntrou').hide();
});

$('#AlertCancelado').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#AlertCancelado').hide();
});

$('#AlertEncerrado').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#AlertEncerrado').hide();
});

$('#formAlertErro').on('close.bs.alert', function (e) {
	e.preventDefault();
	$('#formAlertErro').hide();
});

$("#saiutorneio").click(function (e){
	$('#AlertSaiu').fadeIn();
	setTimeout(function(){
		$('#AlertSaiu').fadeOut();
	},4000);
});

$("#entroutorneio").click(function (e){
	$('#AlertEntrou').fadeIn();
	setTimeout(function(){
		$('#AlertEntrou').fadeOut();
	},4000);
});

$("#cidade").change(function () {
	if($(this).val() == "0") {
		
	} else {
	document.getElementById("cidade").style.color = "black";
	}
});

$("#estado").change(function () {
	if($(this).val() == "0") {
		
	} else {
	document.getElementById("estado").style.color = "black";
	}
});

$("#cardgame").change(function () {
	if($(this).val() == "0") {
		
	} else {
	document.getElementById("cardgame").style.color = "black";
	}
});

$("#status").change(function () {
	if($(this).val() == "") {
		
	} else {
	document.getElementById("status").style.color = "black";
	}
});

function Contato()
{
	controle_input = true;
	
	var nomecompleto = $('#nomecompleto').val();
	var telefone = $('#telefone').val();
	var email = $('#email').val();
	var textArea = $('#textArea').val();
	if ($.trim(nomecompleto) === "" || ($.trim(telefone) === "") || ($.trim(email) === "") || ($.trim(textArea) === "")) {
			ValidaInput();
			$('#formAlertErro').fadeIn();
			setTimeout(function(){
				$('#formAlertErro').fadeOut();
			},4000);
			controle_input = false;
	} else {
			$('#formAlertOk').fadeIn();
			setTimeout(function(){
				$('#formAlertOk').fadeOut();
				window.location.replace("main.html");
			},4000);
	}
}

function LoginAcesso()
{
	var username = $('#username').val();
	var password = $('#password').val();
	
	if (($.trim(username) === "") || ($.trim(password) === ""))
	{
		ValidaInput();
	} else {
		window.location.replace("main.html");
	}
}

function ValidaInput()
{	
	var username		= $('#username').val();
	var password 		= $('#password').val();
	var nomecompleto 	= $('#nomecompleto').val();
	var estado 			= $('#estado').val();
	var cidade 			= $('#cidade').val();
	var datanascimento 	= $('#datanascimento').val();
	var email 			= $('#email').val();
	var telefone 		= $('#telefone').val();
	var cardgame 		= $('#cardgame').val();
	var textArea 		= $('#textArea').val();
	var status 			= $('#status').val();
	
	if ($.trim(username) === "") {
		$('#input-username').addClass('has-error');
		$('#input-username').removeClass('has-success');
	} else {
		$('#input-username').addClass('has-success');
		$('#input-username').removeClass('has-error');
	}
	if ($.trim(password) === "") {
		$('#input-password').addClass('has-error');
		$('#input-password').removeClass('has-success');
	} else {
		$('#input-password').addClass('has-success');
		$('#input-password').removeClass('has-error');
	}
	if ($.trim(nomecompleto) === "") {
		$('#input-nomecompleto').addClass('has-error');
		$('#input-nomecompleto').removeClass('has-success');
	} else {
		$('#input-nomecompleto').addClass('has-success');
		$('#input-nomecompleto').removeClass('has-error');
	}
	if ($.trim(estado) === "0" || $.trim(estado) === "") {
		$('#input-estado').addClass('has-error');
		$('#input-estado').removeClass('has-success');
	} else {
		$('#input-estado').addClass('has-success');
		$('#input-estado').removeClass('has-error');
	}
	if ($.trim(cidade) === "0" || $.trim(cidade) === "") {
		$('#input-cidade').addClass('has-error');
		$('#input-cidade').removeClass('has-success');
	} else {
		$('#input-cidade').addClass('has-success');
		$('#input-cidade').removeClass('has-error');
	}
	if ($.trim(datanascimento) === "") {
		$('#input-datanascimento').addClass('has-error');
		$('#input-datanascimento').removeClass('has-success');
	} else {
		$('#input-datanascimento').addClass('has-success');
		$('#input-datanascimento').removeClass('has-error');
	}
	if ($.trim(email) === "") {
		$('#input-email').addClass('has-error');
		$('#input-email').removeClass('has-success');
	} else {
		$('#input-email').addClass('has-success');
		$('#input-email').removeClass('has-error');
	}
	if ($.trim(telefone) === "") {
		$('#input-telefone').addClass('has-error');
		$('#input-telefone').removeClass('has-success');
	} else {
		$('#input-telefone').addClass('has-success');
		$('#input-telefone').removeClass('has-error');
	}
	if ($.trim(cardgame) === "0" || $.trim(cardgame) === "") {
		$('#input-cardgame').addClass('has-error');
		$('#input-cardgame').removeClass('has-success');
	} else {
		$('#input-cardgame').addClass('has-success');
		$('#input-cardgame').removeClass('has-error');
	}
	if ($.trim(textArea) === "") {
		$('#input-textArea').addClass('has-error');
		$('#input-textArea').removeClass('has-success');
	} else {
		$('#input-textArea').addClass('has-success');
		$('#input-textArea').removeClass('has-error');
	}
	if ($.trim(status) === "0" || $.trim(status) === "") {
		$('#input-status').addClass('has-error');
		$('#input-status').removeClass('has-success');
	} else {
		$('#input-status').addClass('has-success');
		$('#input-status').removeClass('has-error');
	}
}

function AtualizarUsuario()
{
	controle_input = true;
	
	var nomecompleto 	= $('#nomecompleto').val();
	var estado 			= $('#estado').val();
	var cidade 			= $('#cidade').val();
	var datanascimento 	= $('#datanascimento').val();
	var email 			= $('#email').val();
	var telefone 		= $('#telefone').val();
	var cardgame 		= $('#cardgame').val();
	var username 		= $('#username').val();
	var password 		= $('#password').val();
	
	if ($.trim(nomecompleto) 		=== "" 			|| 
		$.trim(estado) 				=== "0"			||
		$.trim(cidade) 				=== "0" 		||
		$.trim(datanascimento) 		=== "" 			||	
		$.trim(email)				=== "" 			||
		$.trim(telefone)			=== ""			||
		$.trim(cardgame)			=== "0"			||	
		$.trim(username) 			=== "" 			||
		$.trim(password) 			=== ""			||
		$.trim(estado) 				=== ""			||
		$.trim(cidade) 				=== "" 			||
		$.trim(cardgame)			=== "") {
			ValidaInput();
			$('#formAlertErro').fadeIn();
			setTimeout(function(){
				$('#formAlertErro').fadeOut();
			},4000);
			controle_input = false;
	} else {
			$('#formAlertOk').fadeIn();
			setTimeout(function(){
				$('#formAlertOk').fadeOut();
				window.location.replace("main.html");
			},4000);
	}
}

function NovoUsuario()
{
	controle_input = true;
	
	var nomecompleto 	= $('#nomecompleto').val();
	var estado 			= $('#estado').val();
	var cidade 			= $('#cidade').val();
	var datanascimento 	= $('#datanascimento').val();
	var email 			= $('#email').val();
	var telefone 		= $('#telefone').val();
	var cardgame 		= $('#cardgame').val();
	var username 		= $('#username').val();
	var password 		= $('#password').val();
	
	if ($.trim(nomecompleto) 		=== "" 			|| 
		$.trim(estado) 				=== "0"			||
		$.trim(cidade) 				=== "0" 		||
		$.trim(datanascimento) 		=== "" 			||	
		$.trim(email)				=== "" 			||
		$.trim(telefone)			=== ""			||
		$.trim(cardgame)			=== "0"			||	
		$.trim(username) 			=== "" 			||
		$.trim(password) 			=== ""			||
		$.trim(estado) 				=== ""		||
		$.trim(cidade) 				=== "" 		||
		$.trim(cardgame)			=== "")		{
			ValidaInput();
			$('#formAlertNUErro').fadeIn();
			setTimeout(function(){
				$('#formAlertNUErro').fadeOut();
			},4000);
			controle_input = false;
	} else {
			$('#formAlertNUOk').fadeIn();
			setTimeout(function(){
				$('#formAlertNUOk').fadeOut();
				window.location.replace("index.html");
			},4000);
	}
}

function RecuperarSenha()
{
	controle_input = true;
	
	var email = $('#email').val();
	if ($.trim(email) === "") {
			ValidaInput();
			$('#formAlertErro').fadeIn();
			setTimeout(function(){
				$('#formAlertErro').fadeOut();
			},4000);
			controle_input = false;
	} else {
			$('#formAlertOk').fadeIn();
			setTimeout(function(){
				$('#formAlertOk').fadeOut();
				window.location.replace("index.html");
			},4000);
	}
}

$("#btnFiltro").click(function () {
	Modal.modal("show");
});

function ValidaFiltro()
{
	var estado 			= $('#estado').val();
	var cidade 			= $('#cidade').val();
	var cardgame 		= $('#cardgame').val();
	var status 			= $('#status').val();
	
	if ($.trim(estado) 				=== "0"			||
		$.trim(cidade) 				=== "0" 		||
		$.trim(cardgame)			=== "0"			||
		$.trim(status) 				=== "0"			||
		$.trim(estado) 				=== ""		||
		$.trim(cidade) 				=== "" 		||
		$.trim(cardgame)			=== ""		||
		$.trim(status) 				=== "") {
			ValidaInput();
			$('#formAlertErro').fadeIn();
			setTimeout(function(){
				$('#formAlertErro').fadeOut();
			},4000);
			controle_input = false;
	} else {
			Modal.modal("hide");
			$('#AtualizaFiltro').fadeIn();
			setTimeout(function(){
				$('#AtualizaFiltro').fadeOut();
			},4000);
	}
}
