/////////////////////////////////////////////////////////////////////////////////////////
// Variaveis de inicialização
/////////////////////////////////////////////////////////////////////////////////////////

var channelURL = 'https://joaxazevedo.github.io/channel/channel.html';
var appID = '143641';

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Variaveis de inicialização
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Inicialização e acesso a API
/////////////////////////////////////////////////////////////////////////////////////////

window.dzAsyncInit = function () {
    DZ.init({
        appId: appID,
        channelUrl: channelURL,
        player: {
            onload: function (response) { }
        }
    });

    DZ.login(function (response) {
        if (response.authResponse.accessToken) {
            DZ.api('/user/me', function (response) {
                alert('Good to see you, ' + response.name + '.');
                // Chamada para configurar o usuario do deezer
                getConnectedUser();
            });
        } else {
            alert('User cancelled login or did not fully authorize.');
        }
    }, { perms: 'basic_access, manage_library' });
};

(function () {
    var e = document.createElement('script');
    e.src = 'https://cdns-files.deezer.com/js/min/dz.js';
    e.async = true;
    document.getElementById('dz-root').appendChild(e);
}());

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Inicialização e acesso a API
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Eventos
/////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $('#ShowPlaylists').click(function () {
        getAllPlaylists();
        alert('END Button');
    });
});

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Eventos
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Variaveis da API
/////////////////////////////////////////////////////////////////////////////////////////

// URL do usuário
var URLuser = '/user/';
// URL do usuário logado
var URLuser_me = URLuser + 'me/';
// ID de usuario
var usuario;

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Variaveis da API
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Funções de usuário
/////////////////////////////////////////////////////////////////////////////////////////

// Pega as informações do usuário conectado
function getConnectedUser() {
    if (!usuario) {
        DZ.api(URLuser_me, function (response) {
            usuario = response;
        });
    }

    return usuario;
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
var userPlaylist = URLuser_me + 'playlists/';
var arPlaylists = [];

function createPlaylist(titulo) {
    DZ.api(userPlaylist,
        'POST',
        { title: titulo },
        function (response) {
            console.log("My new playlist ID: ", response.id);
        });
}

function getAllPlaylists() {
    DZ.api(userPlaylist,
		function (response) {
		    for (var i = 0; i < response.data.length; i++) {
		        arPlaylists.push({ data: response.data[i], tracks: [] });
		    }

		    getAllMusicsOfArPlaylist();
		});

    alert('END getAllPlaylists');
}

function getAllMusicsOfArPlaylist() {
    for (var iArPlaylists = 0; iArPlaylists < arPlaylists.length; iArPlaylists++) {
        getTracks(arPlaylists[iArPlaylists].data.id, iArPlaylists);
    }
}

function getTracks(playlistID, iArPlaylists) {
    DZ.api('/playlist/' + playlistID + '/tracks/',
        function (response) {
            // Paginação, o deezer manda no máximo 50 registros por vez
            for (var iPagina = 0; iPagina < ((arPlaylists[iArPlaylists].tracks.length / 50) + 1) ; iPagina++) {
                for (var iTrack = iPagina * 50; iTrack < ((iPagina * 50) + 50), iTrack < arPlaylists[iArPlaylists].tracks.length; iTrack++) {
                    arPlaylists[iArPlaylists].tracks.push(response.data[iTrack]);
                }
            }
        });
}

function getAllMusicsOfAPlaylist(playlistID) {
    DZ.api('/playlist/' + playlistID + '/tracks/',
		function (response) {
		    for (var i = 0; i < response.data.length; i++) {
		        $('#divContent').append('    ' + i + '. ' + response.data[i].title + '<br />');
		    }
		});
}

/////////////////////////////////////////////////////////////////////////////////////////
// FIM Funções para playlists
/////////////////////////////////////////////////////////////////////////////////////////


//function dffdf() {
//    try {
//        var path = null, request_method = 'get', args = null, callback = false;

//        switch (arguments.length) {
//            case 1:
//                path = arguments[0];
//                break;
//            case 2:
//                path = arguments[0];
//                callback = arguments[1];
//                break;
//            case 3:
//                path = arguments[0];

//                if (typeof (arguments[1]) == 'string') {
//                    request_method = arguments[1];
//                }
//                else {
//                    args = arguments[1];
//                }
//                callback = arguments[2];
//                break;
//            case 4:
//                path = arguments[0];
//                request_method = arguments[1];
//                args = arguments[2];
//                callback = arguments[3];
//                break;
//            default:
//                break;
//        }

//        callback = callback || function () { };

//        if (path === null || path === "") {
//            callback({ error: 'no path defined' });
//            return false;
//        }

//        DZ.SIMPLE_API.apiCall(path, request_method, args, callback);
//    }
//    catch (e) {
//        DZ.catchException(e);
//    }
//}