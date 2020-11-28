document
.getElementsByClassName("about-menu")[0]
.addEventListener("click", () => {
    document
    .getElementById("content").style.display = "none";
    document
    .getElementById("about").style.display = "";
});

document
.getElementById("about-menu-mobile")
.addEventListener("click", () => {
    document
    .getElementById("about").style.display = "";
    document
    .getElementById("content").style.display = "none";
});

document
.getElementsByClassName("bitcoin-menu")[0]
.addEventListener("click", () => {
    document
    .getElementById("about").style.display = "none";
    document
    .getElementById("content").style.display = "";
});

document
.getElementById("bitcoin-menu-mobile")
.addEventListener("click", () => {
    document
    .getElementById("about").style.display = "none";
    document
    .getElementById("content").style.display = "";
});

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
