let toastBox = document.querySelector(".toastBox");
let successMsg =
  '<span class="material-symbols-outlined">check_circle</span> Succesfully Submitted';
let errorMsg =
  '<span class="material-symbols-outlined">cancel</span>Please Fix the Error!';
let unclearMsg =
  '<span class="material-symbols-outlined">error</span>Unclear, Please check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }

  if (msg.includes("Unclear")) {
    toast.classList.add("unclear");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
