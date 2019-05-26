jQuery(function ($) {
    $('[data-toggle="collapse"]').click(function () {
        $(this).find('.fas.fa-chevron-up').toggleClass('d-none');
        $(this).find('.fas.fa-chevron-down').toggleClass('d-none');
    })
});