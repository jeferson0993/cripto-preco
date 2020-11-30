
function showSection(section_id) {
    document
        .getElementById("content").style.display = "none";
    document
        .getElementById("about").style.display = "none";
    document
        .getElementById("wallet").style.display = "none";
    document
        .getElementById(section_id).style.display = "";
}

document
    .getElementsByClassName("about-menu")[0]
    .addEventListener("click", () => {
        showSection("about");
    });

document
    .getElementById("wallet-menu-mobile")
    .addEventListener("click", () => {
        showSection("wallet");
    });

document
    .getElementsByClassName("wallet-menu")[0]
    .addEventListener("click", () => {
        showSection("wallet");
    });

document
    .getElementById("bitcoin-menu-mobile")
    .addEventListener("click", () => {
        showSection("content");
    });

document
    .getElementsByClassName("bitcoin-menu")[0]
    .addEventListener("click", () => {
        showSection("content");
    });

document
    .getElementById("bitcoin-menu-mobile")
    .addEventListener("click", () => {
        showSection("content");
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


/**
 * Wallets logic
 */

const walletForm = document.querySelector('.wallet-form');
const walletInput = document.querySelector('.wallet-input');
const walletItemsList = document.querySelector('.wallet-items');
const preloading = document.querySelector('#preloading');
let wallets = [];

function getBalance() {
    fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${walletInput.value}/balance`)
        .then(response => response.json())
        .then(json => {
            addWallet(walletInput.value, json.final_balance);
        })
        .catch(error => console.error(error.message));
}

walletForm.addEventListener('submit', function (event) {
    preloading.style.display = "";
    event.preventDefault();
    getBalance();
});

function addWallet(item, final_balance) {
    if (item !== '') {
        const wallet = {
            id: Date.now(),
            name: item,
            balance: final_balance
        };

        wallets.push(wallet);
        addToLocalStorage(wallets);

        walletInput.value = '';
        preloading.style.display = "none";
    }
}

function renderWallets(wallets) {
    walletItemsList.innerHTML = '';

    console.log({ wallets });

    wallets.forEach(function (item) {
        const element = document.createElement('div');
        element.setAttribute('class', 'item');
        element.setAttribute('class', 'bg-indigo-600');
        element.setAttribute('class', 'my-1');
        element.setAttribute('data-key', item.id);

        element.innerHTML = `    
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
            <!-- Heroicon name: speakerphone -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" />
            </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
            ${item.name}
            </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <p class="ml-3 font-medium text-white truncate">
            BTC: ${item.balance}
            </p>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button class="" type="button"
            class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg class="h-6 w-6 text-white delete-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path class="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        </div>
    </div>
    `;
        walletItemsList.append(element);
    });

}

function addToLocalStorage(wallets) {
    localStorage.setItem('wallets', JSON.stringify(wallets));
    renderWallets(wallets);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('wallets');
    if (reference) {
        wallets = JSON.parse(reference);
        renderWallets(wallets);
    }
}

function deleteWallet(id) {
    wallets = wallets.filter(function (item) {
        return item.id != id;
    });
    console.log(wallets);
    addToLocalStorage(wallets);
}

getFromLocalStorage();

walletItemsList.addEventListener('click', function (event) {
    // console.log(event.target, event.target.classList);
    if (event.target.classList.contains('delete-button')) {
        var idWallet = Number(event.target
            .parentElement.parentElement
            .parentElement.parentElement
            .parentElement.getAttribute('data-key'));

        deleteWallet(idWallet);
    }
}, false);

window.onload = getFromLocalStorage();