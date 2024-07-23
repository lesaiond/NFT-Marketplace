document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");

  burgerIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !burgerIcon.contains(event.target)
    ) {
      mobileMenu.classList.remove("open");
      overlay.classList.remove("open");
    }
  });
});

document.getElementById("copyButton").addEventListener("click", function () {
  const textToCopy = document.getElementById("textToCopy").innerHTML;
  const tempElement = document.createElement("textarea");
  tempElement.value = textToCopy;
  document.body.appendChild(tempElement);

  tempElement.select();
  document.execCommand("copy");

  document.body.removeChild(tempElement);
  const successMsg = document.getElementById("successMessage");
  successMsg.classList.toggle("open");
  setTimeout(() => {
    successMsg.classList.toggle("open");
  }, 1000);
});

document.getElementById("followButton").addEventListener("click", () => {
  const followText = document.getElementById("followText")
  if(followText.innerHTML === "Followed") {
    document.getElementById("followSvg").style.display = "inline";
    followText.innerHTML = "Follow";
  }else {
    followText.innerHTML = "Followed";
    document.getElementById("followSvg").style.display = "none";
  }
});
