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
  // Lấy target từ data-target
  // alert("click");
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
const chitietdatvess = document.querySelector("#chitietdatvess");

console.log(chitietdatvess);

chitietdatvess.addEventListener("click", () => {
  // Lấy target từ data-target
  alert("click");
  // anhien();
});

//
// Lấy tất cả các phần tử có class .pay-select-container
const paythanhtoanitem = document.querySelectorAll(".pay-thanhtoan-item");
const payContainers = document.querySelectorAll(".container-pay");

paythanhtoanitem.forEach((item) => {
  item.addEventListener("click", () => {
    paythanhtoanitem.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    const thesele = item.getAttribute("data-select");
    // console.log("🚀 ~ item.addEventListener ~ thesele:", thesele);
    payContainers.forEach((e) => {
      e.style.display = "none";
      document.querySelector(`.${thesele}`).style.display = "grid";
    });
  });
});
