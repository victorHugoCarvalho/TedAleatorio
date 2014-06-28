function abreTedAleatorio(theUrl) {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var conteudo = xmlHttp.responseText;
    var arrayVideos = [];
    var i = 0;
    var ultimoVideo = '';
	do {
		var inicio = conteudo.indexOf("<a href='/talks/");
		if(inicio < 0) {
			break;
		}
		conteudo = conteudo.substring(inicio);
		var final = conteudo.indexOf("'>");
		var video = conteudo.substring(16, final);
		if(ultimoVideo != video) {
			arrayVideos[i++] = video;
		}
		ultimoVideo = video;
		conteudo = conteudo.substring(16);
	} while(conteudo.length > 16);
	
    var rand = Math.floor(Math.random() * arrayVideos.length);
    var video = arrayVideos[rand];
	
	window.open('http://www.ted.com/talks/' + video,'', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', ''); 
}

function abreTedMaiRecente(theUrl) {
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var conteudo = xmlHttp.responseText;
    //while
	var inicio = conteudo.indexOf("<a href='/talks/");
	conteudo = conteudo.substring(inicio);
	var final = conteudo.indexOf("'>");
	var video = conteudo.substring(16, final);
	window.open('http://www.ted.com/talks/' + video,'', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=10, height=10, visible=none', ''); 

}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
    	new abreTedAleatorio('http://www.ted.com/talks/browse');
    }
};

