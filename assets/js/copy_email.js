document.getElementById("copyEmailButton").addEventListener("click", function () {
  const emailAddress = document.getElementById("emailAddress").innerText;
  const textarea = document.createElement("textarea");
  textarea.value = emailAddress;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  var tooltip = document.querySelector(".tooltip");
  tooltip.textContent = "tyler.wadekamper@gmail.com copied to clipboard!"; // Update the tooltip text
  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";

  setTimeout(function () {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  }, 5000);
});
