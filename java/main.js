const text = document.getElementsByClassName("main_text")[0];
const btn = document.getElementsByClassName("read_more-btn")[0];

btn.addEventListener("click", () => {
  text.classList.toggle("expanded");
  btn.textContent = text.classList.contains("expanded")
    ? "Скрыть"
    : "Читать далее";
});