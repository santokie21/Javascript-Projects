const downloadBtn = document.querySelector(".download-btn");

// This is drive link
const fileLink =
  "https://drive.google.com/uc?export=download&id=0BxfFDs4FZR9ic3RhcnRlcl9maWxl";

const initTimer = () => {
  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileLink);
  }

  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
    }
    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent = "Your file is downloading...";

    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer");
      downloadBtn.innerHTML =
        '<span class="icon material-symbols-outlined"> download </span> <span class="text">Download Again</span>';
    }, 3000);
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);
