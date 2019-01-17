$(window).load(function(){
    $('input').val($('select option:selected').text());
    $('select').on('change', function(){
    $('input').val($('select option:selected').text());
  });

  $(".draggable").draggable({
      start: function( event, ui ) {
         $(this).data('preventBehaviour', true);
      }
  });
  $(".draggable :input").on('mousedown', function (e) {
      var mdown = document.createEvent("MouseEvents");
      mdown.initMouseEvent("mousedown", true, true, window, 0, e.screenX, e.screenY, e.clientX, e.clientY, true, false, false, true, 0, null);
      $(this).closest('.draggable')[0].dispatchEvent(mdown);
  }).on('click', function(e){
      var $draggable = $(this).closest('.draggable');
      if($draggable.data("preventBehaviour")){
          e.preventDefault();
          $draggable.data("preventBehaviour", false)
      }
  });
});
