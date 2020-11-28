// Register service worker to control making site work offline

if("serviceWorker" in navigator) {
  navigator
  .serviceWorker
  .register("/cripto-preco/cripto-preco-service-worker.js")
  .then(function() { console.log("Service Worker Registered With %cSuccess!","color: green"); })
  .catch(function (error) { console.error(error.message); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("%cUser accepted the A2HS prompt","color: green;");
        } else {
          console.log("%cUser dismissed the A2HS prompt","color: red;");
        }
        deferredPrompt = null;
      });
  });
});
