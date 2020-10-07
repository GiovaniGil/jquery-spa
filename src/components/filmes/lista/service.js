function getMovies(callback) {
    $.ajax({
        url: OMDB_API,
        type: 'GET',
        dataType: 'json',
        success: (response) => {
            callback(response.Search);
        },
        error: (error) => {
            console.log('Erro ao fazer load');
        }
    });
}