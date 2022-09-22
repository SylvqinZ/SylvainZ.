window.onscroll = function (){

    if(document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "black" ;
        document.getElementById("navbar").style.opacity = "0.95" ;
    }
    else {
        document.getElementById("navbar").style.background = "none";
    }

}