document.addEventListener("DOMContentLoaded", () => {
  const listItemBtn = document.getElementById("listItemBtn");

  if (listItemBtn) {
    listItemBtn.addEventListener("click", () => {
      fetch("/auth/check", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.loggedIn && data.type === "renter") {
            window.location.href = "/listing.html"; // renter logged in
          } else if (data.loggedIn && data.type === "user") {
            alert("Users cannot list items");
            window.location.href = "/index.html"; // normal user
          } else {
            window.location.href = "/login"; // not logged in
          }
        })
        .catch((err) => console.error("Auth check failed:", err));
    });
  }
});


document.getElementById("browse-btn").addEventListener("click", () => {
  window.location.href = "/browse.html"; // opens new page
});
