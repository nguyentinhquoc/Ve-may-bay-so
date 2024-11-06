document.addEventListener('DOMContentLoaded', function () {
  const dateBoxes = document.querySelectorAll('.journey-box--date');
  dateBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const dateInput = this.querySelector('input[type="date"]');
      dateInput.showPicker();
    });
  });
});