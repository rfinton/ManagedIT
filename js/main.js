requirejs.config({
    baseUrl: "../js",
    paths: {
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min",
        router: "router",
        slider: "slider",
        sglide: "sglide.2.1.0.min",
        calc: "calc"
    },
    shim: {
        'sglide': { deps: ['jquery'] }
    }
});

requirejs(["jquery", "router", "slider"], function($, r, s){
    $(document).ready(function(){
       $('.plane').click(r); 
    });
});