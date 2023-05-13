var t=Math.floor((Math.random()*100)+1);


var count=0;

function Kontrol(){
    var i=document.getElementById("in1").value;

    if(i<t){
        count ++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin Sayınızı Büyütün";

    }else if(i>t){
        count ++;
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tahmin Sayınızı küçültün";

    }else if(i==t){
        document.getElementById("ss").innerHTML=count;
        document.getElementById("pp").innerHTML="Tebrikler";

    }
    document.getElementById("dd").innerHTML="Sonuc"+" "+t;

}