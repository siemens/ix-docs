import "./global-DaepF4XF.js";
/* empty css                      */import "./init-D14Q4inb.js";
const messageBarContainer = document.getElementById("messageBarContainer");
const showButton = document.getElementById("showButton");
function createMessageBar() {
  const newMessageBar = document.createElement("ix-message-bar");
  newMessageBar.id = "messageBar";
  newMessageBar.textContent = "Message text";
  newMessageBar.addEventListener("closeAnimationCompleted", (event) => {
    const messageBarToRemove = event.target;
    if (messageBarToRemove.parentNode === messageBarContainer) {
      messageBarContainer.removeChild(messageBarToRemove);
      showButton.style.display = "inline-block";
    }
  });
  return newMessageBar;
}
function handleShowMessage() {
  if (messageBarContainer.children.length === 0) {
    const newMessageBar = createMessageBar();
    messageBarContainer.appendChild(newMessageBar);
    showButton.style.display = "none";
  }
}
messageBarContainer.appendChild(createMessageBar());
showButton.addEventListener("click", handleShowMessage);
