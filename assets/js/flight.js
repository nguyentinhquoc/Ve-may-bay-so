$(document).ready(function(){
    $('.faq-item').click(function(){
        $(this).find('.faq-answer').slideToggle();

        $(this).find('.arrow').toggleClass('down up');
    });
});


$(document).ready(function() {
    var $agentList = $(".agent-list-content_1");
    var $cards = $(".item_daily_1");
    var totalItems = $cards.length;
    var itemsToShow = 4;
    var currentIndex = 0;
  
    var $prevButton = $("#prevButton_1");
    var $nextButton = $("#nextButton_1");
  
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
  