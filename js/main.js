requirejs.config({
    paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min",
    }
});

requirejs(["jquery"], function($){
    $(document).ready(function(){
        //Create css link to Bootstrap CDN
        var bslink = document.createElement('link');
        bslink.rel = 'stylesheet';
        bslink.type = 'text/css';
        bslink.href = 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
        $(bslink).appendTo('head');
        
        //Check to see if Bootstrap loaded
        setTimeout(function(){
            if( $('.container-fluid').css('padding-right') != '15px' ){
                alert('bootstrap failed to load.');
            }
        },100);
        
    });
}, function(err){
    alert(err);
});