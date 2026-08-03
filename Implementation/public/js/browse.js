document.addEventListener("DOMContentLoaded", () => {
  fetch("/listings")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("browse-listings");
      container.innerHTML = "";
      data.forEach(item => {
        container.innerHTML += `
          <div class="listing-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Rate:</strong> ₹${item.daily_rate}/day</p>
          </div>`;
      });
    });
});
