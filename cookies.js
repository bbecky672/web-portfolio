const cookiePopup = document.querySelector(".cookie-banner");

const acceptButton = document.getElementById("acceptCookies");
const declineButton = document.getElementById("declineCookies");

/* Only show popup if user has not chosen yet */
if (!localStorage.getItem("cookieChoice")) {
  cookiePopup.style.display = "block";
}

/* Accept cookies */
if (acceptButton) {
  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "accepted");
    cookiePopup.style.display = "none";
  });
}

/* Decline cookies */
if (declineButton) {
  declineButton.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "declined");
    cookiePopup.style.display = "none";
  });
}
