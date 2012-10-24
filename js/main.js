$(document).ready(function(){
    // nav clicking
    $('nav li').on('click', function () {
        var _this = this;
        $('section').hide();
        $('section#' + $(_this).attr('data-section')).show();
        window.location.hash = $(_this).attr('data-section');
    });

    // url hashing
    if (window.location.hash != '') {
        var hash = window.location.hash.replace('#', '');
        if ($('li[data-section=' + hash + ']').length) {
            $('li[data-section=' + hash + ']').click();
        } else {
            $('li[data-section=home]').click();
        }

    } else {
        $('li[data-section=home]').click();
    }
})
