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

$(document).ready(function() {
  var $agentList = $(".agent-list-content");
  var $cards = $(".item_daily");
  var totalItems = $cards.length;
  var itemsToShow = 7;
  var currentIndex = 0;

  var $prevButton = $("#prevButton");
  var $nextButton = $("#nextButton");

  function updateSlides() {
    const translateX = -(currentIndex * (100 / itemsToShow));
    $agentList.css('transform', `translateX(${translateX}%)`);

    $prevButton.prop('disabled', currentIndex === 0);
    $nextButton.prop('disabled', currentIndex + itemsToShow >= totalItems);
  }

  $nextButton.click(function() {
    if (currentIndex + itemsToShow < totalItems) {
      currentIndex++;
      updateSlides();
    }
  });

  $prevButton.click(function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlides();
    }
  });

  updateSlides();
});
