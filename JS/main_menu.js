$(document).ready(function(){
	MontaMenu();
	ShowDropDown(); 
});

function ShowDropDown () {
	$(".dropdown-menu > li").click(function(e){
		var selText = $(this).text();
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');       
	});
}

function MontaMenu() {
	
	var menuHtml =
	"<nav class='navbar navbar-inverse'>"+ 
	"		  <div class='container-fluid'>"+
	"			<div class='navbar-header'>"+
	"			  <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-2'>"+
	"				<span class='sr-only'>Toggle navigation</span>"+
	"				<span class='icon-bar'></span>"+
	"				<span class='icon-bar'></span>"+
	"				<span class='icon-bar'></span>"+
	"			  </button>"+
	"			  <a class='navbar-brand' href='#'><span class='glyphicon glyphicon-tower' aria-hidden='true' style='margin-right: 2px;'></span>Tournament Manager</a>"+
	"			</div>"+
	"			<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-2'>"+
	"			  <ul class='nav navbar-nav'>"+
	"				<li>"+
	"				  <a href='main.html'> <span class='glyphicon glyphicon-home' aria-hidden='true' style='margin-right: 2px;'></span> Início</a>"+
	"				</li>"+
	"				<li class='dropdown'>"+
//	"				  <a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'> <span class='glyphicon glyphicon-blackboard' aria-hidden='true' style='margin-right: 2px;'></span>Torneios<span class='caret'></span></a>"+
	"				  <ul class='dropdown-menu' role='menu'>"+
	"				  	<li><a href='buscar_torneio.html'> <span class='glyphicon glyphicon-search' aria-hidden='true' style='margin-right: 2px;'></span> Pesquisar Torneio</a></li>						"+
	"					<li class='divider'></li>"+
	"					<li><a href='nova_partida.html'> <span class='glyphicon glyphicon-plus-sign' aria-hidden='true' style='margin-right: 2px;'></span> Novo Torneio</a></li>"+
	"				  </ul>"+
	"				</li>"+
	
	"				<li class='dropdown'>"+
//	"				  <a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'> <span class='glyphicon glyphicon-user' aria-hidden='true' style='margin-right: 2px;'></span>Jogadores<span class='caret'></span></a>"+
	"				  <ul class='dropdown-menu' role='menu'>"+
	"				  	<li><a href='buscar_jogador.html'> <span class='glyphicon glyphicon-search' aria-hidden='true' style='margin-right: 2px;'></span> Pesquisar Jogador</a></li>						"+

	"				  </ul>"+
	"				</li>"+


	
//	"					<li class='dropdown'>"+
//	"				  <a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'> <span class='glyphicon glyphicon-th-list' aria-hidden='true' style='margin-right: 2px;'></span>Meus Dados <span class='caret'></span></a>"+
//	"				  <ul class='dropdown-menu' role='menu'>"+
//	"				  	<li><a href='login.html'> <span class='glyphicon glyphicon-ok' aria-hidden='true' style='margin-right: 2px;'></span>Login</a></li>"+
//	"				  	<li><a href='novo_jogador.html'> <span class='glyphicon glyphicon-plus' aria-hidden='true' style='margin-right: 2px;'></span>Cadastro</a></li>"+
	"					<li class='divider'></li>"+
	"				  	<li><a href='editar_jogador.html'> <span class='glyphicon glyphicon-wrench' aria-hidden='true' style='margin-right: 2px;'></span>Meus Dados</a></li>"+
//	"				  	<li><a href='configuracao.html'> <span class='glyphicon glyphicon-cog' aria-hidden='true' style='margin-right: 2px;'></span>Configurações</a></li>"+
	"					<li class='divider'></li>"+
//	"			    	<li><a href='#' data-toggle='modal' data-target='#myModal'> <span class='glyphicon glyphicon-glyphicon glyphicon-console' aria-hidden='true' style='margin-right: 2px;'></span>Sobre</a></li>"+
	"			    	<li><a href='contato.html'> <span class='glyphicon glyphicon-glyphicon glyphicon-envelope' aria-hidden='true' style='margin-right: 2px;'></span>Contato</a></li>"+
	"					<li class='divider'></li>"+
	"					<li><a href='index.html'> <span class='glyphicon glyphicon-remove' aria-hidden='true' style='margin-right: 2px;'></span>Logoff</a></li>"+
//	"				  </ul>"+
	"				</li>"+
	"			 	</ul>"+
	"		</div>"+
	"	</div>"+
	"</nav>"+
	"<div id='myModal' class='modal fade' role='dialog'>"+
	"			  <div class='modal-dialog'>"+
	""+
	"				<!-- Modal content-->"+
	"				<div class='modal-content'>"+
	"				  <div class='modal-header'>"+
	"					<button type='button' class='close' data-dismiss='modal'>&times;</button>"+
	"					<h4 class='modal-title'>Sobre o Aplicativo</h4>"+
	"				  </div>"+
	"				  <div class='modal-body'>"+
	"					<p><b>Criado por:</b> Carlos Henrique Ximenes</p>"+
	"					<p><b>Contato:</b> carloshximenes@gmail.com</p></br>"+
	"					<p><b>Versão do APK:</b> 1.0.0</p>"+	
	"				  </div>"+
	"				  <div class='modal-footer'>"+
	"					<button type='button' class='btn btn-default' data-dismiss='modal'>Fechar</button>"+
	"				  </div>"+
	"				</div>"+
	""+
	"			  </div>"+
	"			</div>";
	
	$( '#main_menu' ).append( menuHtml );
}