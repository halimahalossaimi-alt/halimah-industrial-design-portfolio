document.querySelectorAll(".education-node").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".education-item");
    const wasActive = item.classList.contains("is-active");

    document.querySelectorAll(".education-item").forEach((other) => {
      other.classList.remove("is-active");
      const otherButton = other.querySelector(".education-node");
      const detail = other.querySelector(".education-detail");
      otherButton.setAttribute("aria-expanded", "false");
      detail.hidden = true;
    });

    if (!wasActive) {
      item.classList.add("is-active");
      button.setAttribute("aria-expanded", "true");
      item.querySelector(".education-detail").hidden = false;
    }
  });
});
