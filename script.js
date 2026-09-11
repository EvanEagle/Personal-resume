const copyButton = document.getElementById("copyEmailBtn");
const email = document.getElementById("email");

copyButton.addEventListener("click", function () {

    navigator.clipboard.writeText(email.textContent);

    copyButton.textContent = "已複製！";

    setTimeout(function () {

        copyButton.textContent = "複製 Email";

    }, 2000);

});