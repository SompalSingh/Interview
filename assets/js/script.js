
/*Loader ends here*/
// $(document).ready(function(){
//     $(".loader-wrapper").fadeIn('100', function(){
//         $('.loader-wrapper').delay(100).fadeOut('100');
//         $('#loader').fadeOut('100');
//     });
// });

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};