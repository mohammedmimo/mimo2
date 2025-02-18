const darkModeToggle = document.getElementById("darkModeToggle");
const progressBar = document.getElementById("progressBar");

// تفعيل الوضع الداكن
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// حفظ إعدادات الوضع الداكن
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// تحديث شريط التقدم عند التمرير
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
};
