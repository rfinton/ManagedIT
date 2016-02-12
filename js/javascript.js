function fly() {
    
    $('.plane').toggleClass('foldedPlane');
    
    setTimeout(function () {
        var currentPage = location.href;
        
        switch(currentPage){
            case "http://rfinton.github.io/ManagedIT/html/Page1.html":
                location.href = "Page2.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page2.html":
                location.href = "Page3.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page3.html":
                location.href = "Page4.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page4.html":
                location.href = "Page5.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page5.html":
                location.href = "Page6.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page6.html":
                location.href = "Page7.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page7.html":
                location.href = "Page8.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page8.html":
                location.href = "Page9.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/html/Page9.html":
                location.href = "Page10.html";
                break;
                
            default:
                location.href = "Page1.html";
                break;
        }
    }, 600);
    
}

$('.mobileChoice label').click(function(ev){
    alert(ev);
    ev.target.style.backgroundColor = "darkred";
});
