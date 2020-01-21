// var scriptPath done in html;
// var currentPage = window.location.pathname;
/*var cart =*/
var myColorname = {
    fullName = function(){
        return this.style.color;
    }
}

function myColorname() {
  document.getElementById("colorname").style.color;
}
// var scriptElement = document.createElement("script");

// scriptElement.setAttribute("type", "text/javascript"); using bootstrap icons 
function up(max) {
    document.getElementById("myCart").value = parseInt(document.getElementById("myCart").value) + 1;
    if (document.getElementById("myCart").value >= parseInt(max)) {
        document.getElementById("myCart").value = max;
    }
}
function down(min) {
    document.getElementById("myCart").value = parseInt(document.getElementById("myCart").value) - 1;
    if (document.getElementById("myCart").value <= parseInt(min)) {
        document.getElementById("myCart").value = min;
    }
}
// scriptElement.setAttribute("src", scriptPath);
// document.getElementsByTagName("head")[0].appendChild(scriptElement);
