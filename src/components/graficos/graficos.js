$(document).ready(function () {
    getMovies(prepareData);
});

function prepareData(filmesList) {

    var filmeTituloList = [];
    //Gráfico de linhas
    filmeTituloList = filmesList.map(obj => { 
        return {
            'titulo':obj.Title, 
            'rating': null,
            "ano": obj.Year.split('–')[0],
            "imdbID": obj.imdbID
        } 
    });

    $.each(filmeTituloList, function(index, value) {
        getDetails(value.imdbID, prepararGraficoLinha, filmeTituloList);
    });
    prepararGraficoBarras(filmesList);
}

function prepararGraficoLinha(filmesList, imdbID, response) {
    var index = filmesList.findIndex((obj => obj.imdbID == imdbID));
    filmesList[index].rating = response.imdbRating;

    filmesList.sort(function(a, b){
        return a.ano - b.ano;
    });

    var eixoX = filmesList.map(obj => obj.titulo + ' (' + obj.ano + ')');
    var eixoY = filmesList.map(obj => obj.rating);

    gerarGraficoRatingAnoProducao(eixoX, eixoY);
}

function prepararGraficoBarras(filmesList){
    //gráfico de barras
    var filmeAnoList = [];
    filmeAnoList = filmesList.map(obj => obj.Year.split("–")[0]);
    var eixoXBar = ['<2000', '>=2000'];
    var eixoYBar = [0, 0];
    $.each(filmeAnoList, function(index, value) {
        if (value < 2000 )
            eixoYBar[0] += 1;
        else
            eixoYBar[1] += 1;
    });
    gerarGraficoProducoesPorPeriodo(eixoXBar, eixoYBar);
}

function gerarGraficoRatingAnoProducao(eixoX, eixoY) {
    var ctx = document.getElementById('chartLinha');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: eixoX,
            datasets: [{
                label: 'Rating por Produção',
                backgroundColor: '#c0392b',
                borderColor: '#333',
                data: eixoY
            }]
        },
        options: {}
    });
}


function gerarGraficoProducoesPorPeriodo(eixoX, eixoY) {
    var ctx = document.getElementById('chartBarra');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: eixoX,
            datasets: [{
                label: 'Filmes por período',
                backgroundColor: '#c0392b',
                borderColor: '#333',
                data: eixoY
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}