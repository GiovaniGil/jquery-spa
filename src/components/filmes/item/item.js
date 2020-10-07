function criarListaItems(filmesList) {

    $.each(filmesList, function (index, value) {
        var item = 
        '<div class="item"> ' +
            '<img id="" src="'+value.Poster+'" class="item__image">' +
            '<div class="item__titulo">'+
                '<a href="'+value.imdbID+'">'+
                    value.Title +
                '</a>'+
            '</div>' +
            '<div class="item__ano">'+
                value.Year.toString()
            '</div>' +
        '</div>';

        $('.items').append(item);
    });

    $('.item__titulo a').on('click', function(ev){ 
        ev.preventDefault(); 
        let imdbID = $(this).attr('href');
        getDetails(imdbID, mostrarModal);          
    });
}

function mostrarModal(dadosModal){

    $('#modal-title-text').text(dadosModal.Title + ' ('+ dadosModal.Year+')');
    $('#modal-title-rating').text(dadosModal.imdbRating);
    $('.modal-info').text( dadosModal.Runtime + ' | ' + 
                           dadosModal.Genre + ' | ' + 
                           dadosModal.Language );
    $('#modal-image').attr('src', dadosModal.Poster);
    $('#modal-data-director').text(dadosModal.Director);
    $('#modal-data-cast').text(dadosModal.Actors);
    $('#modal-data-story').text(dadosModal.Plot);
    $("#myModal").modal();
}
