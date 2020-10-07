renderContent('../src/components/menu/menu.html', "#menu");

$(document).ready(function () {
    $('#menu a').on('click', function (ev) {
        ev.preventDefault();
        $('#menu').find('.selected').removeClass('selected');
        $(this).addClass('selected');
        renderContent($(this).attr('href'), '#app');
    });   
});
