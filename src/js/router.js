$(document).ready(function(){
    renderContent("./components/filmes/lista/lista.html", "#app")
});
function renderContent(_url, _idElemento) {

    $.ajax({
        url: _url,
        type: 'GET',
        dataType: 'text',
        success: (response) => {
            $(_idElemento).html(response);
            // TODO location.hash
        },
        error: (error) => {
            console.log('Erro ao fazer load da página');
        }
    });
}