function DemoKontrol(){

    var x=document.getElementById("demo").value;

    switch(x){
        case "1i":
            document.getElementById("h1").innerHTML="Pazartesi";
            break;
            case "2i":
            document.getElementById("h1").innerHTML="Salı";
            break;
            case "3i":
            document.getElementById("h1").innerHTML="Çarşamba";
            break;
            case "4i":
            document.getElementById("h1").innerHTML="Perşembe";
            break;
            case "5i":
            document.getElementById("h1").innerHTML="Cuma";
            break;
            case "6i":
            document.getElementById("h1").innerHTML="Cumartesi";
            break;
            case "7i":
            document.getElementById("h1").innerHTML="Pazar";
            break;
    }
    
}