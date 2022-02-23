$.ajaxSetup({
    cache: false
});

$(".generator_btn").click(() => {
    $.ajax({
        type: "GET",
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function (response) {
            $(".adviceID").html(response.slip.id);
            $(".content p").html(response.slip.advice);
        }
    });
})

$(document).ready(e => {
    $.ajax({
        type: "GET",
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function (response) {
            $(".adviceID").html(response.slip.id);
            $(".content p").html(response.slip.advice);
        }
    });
})