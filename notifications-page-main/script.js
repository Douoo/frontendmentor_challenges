const markButton = document.getElementById("markButton");
const unreadNotifications = document.querySelectorAll(".unread");
const numOfNotifications = document.querySelector("[data-count]");
const title = document.querySelector("h1");
numOfNotifications.dataset.count = unreadNotifications.length;

const readAllNotifications = () => {
  unreadNotifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
  title.classList.add("no-after");
};

markButton.addEventListener("click", readAllNotifications);
