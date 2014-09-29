window.dzAsyncInit = function () {
    DZ.init({
        appId: '143641',
        channelUrl: 'https://joaxazevedo.github.io/channel/channel.html',
        player: {
            onload: function (response) {
                alert('onLoad: DZ.player is ready');
            }
        }
    });
};

(function () {
    var e = document.createElement('script');
    e.src = 'https://cdns-files.deezer.com/js/min/dz.js';
    e.async = true;
    document.getElementById('dz-root').appendChild(e);
}());

$(document).ready(function () {
    $('#ShowPlaylists').click(function () {
        alert('verify if is ready!');

        DZ.ready(function (sdk_options) {
            alert('ready: DZ SDK is ready');
            login();
        });
    });
});

function registerApp() {
    alert('Register');
    DZ.init({
        appId: '143641',
        channelUrl: 'https://joaxazevedo.github.io/channel/channel.html',
        player: {
            onload: function (response) {
                alert('DZ.player is ready');
            }
        }
    });
}

function login() {
    alert('Login');
    DZ.login(function (response) {
        if (response.authResponse) {
            alert('Welcome!  Fetching your information.... ');
            DZ.api('/user/me', function (response) {
                alert('Good to see you, ' + response.name + '.');
            });
        } else {
            alert('User cancelled login or did not fully authorize.');
        }
    }, { perms: 'basic_access,email' });
}

/////////////////////////////////////////////////////////////////////////////////////////
// Variaveis da API
/////////////////////////////////////////////////////////////////////////////////////////

// URL do usuário
var URLuser = '/user/';
// URL do usuário logado
var URLuser_me = URLuser + 'me';
// ID de usuario
var usuario;

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Variaveis da API
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Funções de usuário
/////////////////////////////////////////////////////////////////////////////////////////

// Pega as informações do usuário conectado
function getConnectedUserInfo() {
    DZ.api(URLuser_me, function (response) {
        usuario = response;
    });
}

function getUserInfo(userID) {
    DZ.api(URLuser + userID, function (response) {
        return response;
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Funções de usuário
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Funções de album
/////////////////////////////////////////////////////////////////////////////////////////

//Retorna as informações do disco de determinada ID
function getAlbumInfo(albumId) {
    DZ.api('/album/' + albumId, function (response) {
        return response;
    });
}

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Funções de album
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Funções para playlists
/////////////////////////////////////////////////////////////////////////////////////////

function createPlaylist(titulo) {
    DZ.api(URLuser_me + 'playlists',
        'POST',
        { title: titulo },
        function (response) {
            console.log("My new playlist ID: ", response.id);
        });
}

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Funções para playlists
/////////////////////////////////////////////////////////////////////////////////////////