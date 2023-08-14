const markAll = document.querySelector("#mark-all");
const notificationsIcon = document.querySelectorAll(".notifications-icon");
const notificationsNumber = document.querySelector("#notification-number");

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
    notificationsNumber.textContent = 0;
  } else {
    markAll.innerText = "Mark all as read";
    notificationsNumber.textContent = 3;
  }
};
