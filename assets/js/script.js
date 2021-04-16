$(function(){
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });

    $(window).on('activate.bs.scrollspy', function(event, object) {
        if (object.relatedTarget === '#home') {
            $('#navbar-main').removeClass('bg-info');
        }else if (!$('#navbar-main').hasClass('bg-info')) {
            $('#navbar-main').addClass('bg-info');
        }
    });

    $('#navbarNav').on('show.bs.collapse', function() {
      $('#navbar-main').addClass('bg-info');
    });

    $('#navbarNav').on('hidden.bs.collapse', function() {
      $('#navbar-main').removeClass('bg-info');
    });
    $('[data-toggle="tooltip"]').tooltip(); 
});