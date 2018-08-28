

$(function(){
    $("#nav-contact").on("click", function(){
        goto("footer");
    });
    $("#nav-skills").on("click", function(){
        goto("#skills");
    });
    $("#nav-portfolio").on("click", function(){
        goto("#portfolio");
    });
    $("#nav-about").on("click", function(){
        goto(".about");
    });
    $("#nav-top").on("click", function(){
        goto(".navigation");
    });
})

function goto(element){
    $('html,body').animate({
        scrollTop: $(element).offset().top
    }, 'slow');
}