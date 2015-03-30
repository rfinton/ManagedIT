function fly() {
    $('.plane').toggleClass('foldedPlane');
    page = location.href;
    exp = new RegExp(/Page(1|9|10)\.html/i);
    res = exp.test(page);

    if (res == true) {
        setTimeout(function () {
            document.forms[0].submit();
        }, 600);
        
    }
    else {
        if (!slider) {
            setTimeout(function () {
                document.forms[0].submit();
            }, 600);
        }
        else {
            switch (val) {
                case 0: document.getElementById('Qr1').checked = true;
                    break;
                case 25: document.getElementById('Qr2').checked = true;
                    break;
                case 33: document.getElementById('Qr2').checked = true;
                    break;
                case 50: document.getElementById('Qr3').checked = true;
                    break;
                case 66: document.getElementById('Qr3').checked = true;
                    break;
                case 74: document.getElementById('Qr4').checked = true;
                    break;
                case 99:
                    if (p == 4) document.getElementById('Qr4').checked = true;
                    else document.getElementById('Qr5').checked = true;
                    break;
                default: alert('Something went wrong with the slider.');
            }

            name = document.forms[0][0].name;
            console.log(document.forms[0].elements[name].value);
            
            setTimeout(function () {    
                document.forms[0].submit();
            }, 600);
        }
    }
}
