document.addEventListener("DOMContentLoaded", () => {
  const listItemBtn = document.getElementById("listItemBtn");

  if (listItemBtn) {
    listItemBtn.addEventListener("click", () => {
      fetch("/auth/check", { credentials: "include" })
        .then(res => res.json())
        .then(data => {
          if (!data.signedUp) {
            alert("Please sign up first");
            window.location.href = "/signup/user";
          } else if (!data.loggedIn) {
            window.location.href = "/login";
          } else {
            window.location.href = "/listing.html";
          }
        })
        .catch(err => console.error("Auth check failed:", err));
    });
  }
});
