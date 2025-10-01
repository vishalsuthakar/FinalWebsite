// Add current year to footer
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Invert colors
document.getElementById("themeBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("inverted");
});

// Hide/show table
document.getElementById("toggleTable")?.addEventListener("click", () => {
  const table = document.querySelector("table");
  if (table) table.classList.toggle("hidden");
});

// Hide/show text
document.querySelectorAll(".toggleText").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("hidden");
    }
  });
});

// Shuffle batman pictures
document.getElementById("shuffleBtn")?.addEventListener("click", () => {
  const grid = document.querySelector(".grid");
  if (grid && grid.children.length > 1) {
    grid.appendChild(grid.firstElementChild);
  }
});

// Contact form
const form = document.getElementById("contactForm");
if (form) {
  document.getElementById("sendBtn")?.addEventListener("click", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const response = document.getElementById("formResponse");
    response.textContent = `Thanks ${name}, your message has been received.`;
    response.classList.remove("hidden");
  });

  document.getElementById("clearBtn")?.addEventListener("click", () => {
    form.reset();
    document.getElementById("formResponse").classList.add("hidden");
  });
}
