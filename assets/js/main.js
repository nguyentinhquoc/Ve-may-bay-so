document.addEventListener('DOMContentLoaded', function () {
  const dateBoxes = document.querySelectorAll('.journey-box--date');
  dateBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const dateInput = this.querySelector('input[type="date"]');
      dateInput.showPicker();
    });
  });

  $('.btn-new-application').click(function (e) {
    $('#cheap-price').slideUp("fast");
    $('#new-application').slideDown("slow");
    $('.btn-new-application').addClass('active');
    $('.btn-cheap-price').removeClass('active');
  });
  $('.btn-cheap-price').click(function (e) {
    e.preventDefault();
    $('#new-application').slideUp("fast");
    $('#cheap-price').slideDown("slow");
    $('.btn-cheap-price').addClass('active');
    $('.btn-new-application').removeClass('active');
  });
});