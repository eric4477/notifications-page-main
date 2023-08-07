const markAll = document.querySelector("#mark-all");
const notificationsIcon = document.querySelectorAll(".notifications-icon");

markAll.style.cursor = "pointer";

markAll.addEventListener("click", () => {
  notificationsIcon.forEach((notification) => {
    mark();
    notification.classList.toggle("hidden");
  });
});

const mark = () => {
  if (markAll.innerText == "Mark all as read") {
    markAll.innerText = "Mark all as unread";
  } else {
    markAll.innerText = "Mark all as read";
  }
};
