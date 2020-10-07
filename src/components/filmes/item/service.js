function getDetails(imdbID, callback, filmesTituloList = null) {
    $.ajax({
        url: OMDB_DETAILS_API + '&i=' + imdbID,
        type: 'GET',
        dataType: 'json',
        success: (response) => {
            if (filmesTituloList == null)
                callback(response);
            else {
                callback(filmesTituloList, imdbID, response);
            }
        },
        error: (error) => {
            console.log('Erro ao fazer load');
        }
    });
}