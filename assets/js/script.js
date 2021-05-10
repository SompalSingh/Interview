
/*Loader ends here*/
$(document).ready(function(){
    $(".loader-wrapper").delay(100).fadeIn('500', function(){
        $('.loader-wrapper').delay(100).fadeOut('500');
        $('#loader').delay(100).fadeOut('500');
    });
});