document
.getElementsByClassName("about-menu")[0]
.addEventListener("click", () => {
    document
    .getElementById("content").style.display = "none";
    document
    .getElementById("about").style.display = "";
}, false);

document
.getElementsByClassName("bitcoin-menu")[0]
.addEventListener("click", () => {
    document
    .getElementById("about").style.display = "none";
    document
    .getElementById("content").style.display = "";
}, false);

document
.getElementById("Open-user-menu")
.addEventListener("click", () => {
    (() => {
        var dropdown_menu = document.getElementById("dropdown-menu");
        if (dropdown_menu.style.display === "none") {
            dropdown_menu.style.display = "block";
        } else {
            dropdown_menu.style.display = "none";
        }
    })();
});

document
.getElementById("mobile-menu-button")
.addEventListener("click", () => {
    (() => {
        var mobile_menu = document.getElementById("mobile-menu");
        if (mobile_menu.style.display === "none") {
            mobile_menu.style.display = "block";
        } else {
            mobile_menu.style.display = "none";
        }
    })();
});

function updateData() {
    console.log( clientDateTime() );
    var price = Number( splitString( bitcoinDataHandler(), ",") );
    console.log( { price } );
    document.getElementById("btc_val").innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}
setInterval(function () {
    updateData();
}, 2000);