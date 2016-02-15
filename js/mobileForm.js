define(["jquery"], function($){
    $('.mobileChoice label').click(function(ev){
        $('.mobileChoice label').css("backgroundColor", "transparent");
        ev.target.style.backgroundColor = "darkred";
    });
});