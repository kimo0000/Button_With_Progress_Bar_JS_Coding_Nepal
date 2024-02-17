const btn = document.querySelector("button"),
  spanEl = btn.querySelector("span");

btn.addEventListener("click", () => {
  btn.classList.add("progress");
  btn.innerHTML = `<span>File is Uploading...</span>`;
  setTimeout(() => {
    btn.classList.remove("progress");
    btn.innerHTML = `<span>File Uploaded Success</span>`;
    btn.disabled = true;
  }, 4000);
});
