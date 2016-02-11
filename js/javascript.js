function fly() {
    
    $('.plane').toggleClass('foldedPlane');
    
    setTimeout(function () {
        var currentPage = location.href;
        
        switch(currentPage){
            case "http://rfinton.github.io/ManagedIT/Page1.html":
                location.href = "Page2.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/Page2.html":
                location.href = "Page3.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/Page3.html":
                location.href = "Page4.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/Page4.html":
                location.href = "Page5.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/Page5.html":
                location.href = "Page6.html";
                break;
                
            case "http://rfinton.github.io/ManagedIT/Page6.html":
                location.href = "Page7.html";
                break;
                
            default:
                location.href = "Page1.html";
                break;
        }
    }, 600);
}
