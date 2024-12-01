// Lấy tham chiếu đến nút
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
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

document.querySelectorAll(".toggle-menu").forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    // Lấy target từ data-target
    const targetId = toggleButton.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      if (targetElement.classList.contains("visible")) {
        targetElement.classList.remove("visible");
        targetElement.classList.add("hidden");
      } else {
        targetElement.classList.remove("hidden");
        targetElement.classList.add("visible");
      }
    }
  });
});
$(document).ready(function () {
  // Bắt sự kiện click trên các nút toggle
  $(".toggle-button").on("click", function () {
    // Tìm phần tử chi tiết gần nhất và toggle hiển thị
    const $details = $(this).closest(".flight-card_11").find(".details");

    if ($details.length) {
      $details.slideToggle(300);
      const isDetail = $(this).html().includes('Chi tiết');

    $(this).html(isDetail 
      ? `Rút gọn <img src="./assets/svg/icons/Flight-list/down.svg" alt="">`
      : `Chi tiết <img src="./assets/svg/icons/Flight-list/right.svg" alt="">`);
    }
  });
});


