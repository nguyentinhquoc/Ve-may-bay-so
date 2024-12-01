// Lấy tham chiếu đến nút
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
    scrollToTopBtn.classList.remove("show");
  }
});

// Lắng nghe sự kiện click nút để cuộn lên đầu
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const btnshow = document.querySelector(".toggle-menu");
btnshow.addEventListener("click", (e) => {
  anhien();
});

const anhien = () => {
  let btnshow = document.querySelector(".toggle-menu");
  const targetId = btnshow.getAttribute("data-target");
  const targetElement = document.querySelector(targetId);
  // console.log(targetId);

  if (targetElement) {
    if (targetElement.classList.contains("visible")) {
      targetElement.classList.remove("visible");
      targetElement.classList.add("hidden");
    } else {
      targetElement.classList.remove("hidden");
      targetElement.classList.add("visible");
    }
  }
};
