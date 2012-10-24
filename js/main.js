$(document).ready(function(){
    $('nav li').on('click', function () {
        var _this = this;
        $('section').hide();
        $('section#' + $(_this).attr('section')).show();

    });
})
