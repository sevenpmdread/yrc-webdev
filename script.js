$(document).ready(function() {
  $('a[href^="#"]').on('click', function(evt) {
    evt.preventDefault();
    
    var link = $(this).attr('href');
    var less = (!$('#nav').hasClass('active')) ? 50 : 0;
    
    $('html, body').animate({
      scrollTop: $(link).offset().top - less
    }, 750);
  });
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('#nav').addClass('active');
    }
    else {
      $('#nav').removeClass('active');
    }
  });
});
$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $('#myDivId').hide();
     }
     else {
         $('#myDivId').show();
     }
});

const inputs = document.querySelectorAll(".form-field input")

inputs.forEach(input => {
  const formField = input.parentNode
  input.onfocus = () => {
    formField.classList.add("has-focus")
  }
  input.onblur = () => {
    formField.classList.remove("has-focus")
  }
  
  input.oninput = (event) => {
    if (event.target.value) {
      formField.classList.add("is-dirty")
    } else {
        formField.classList.remove("is-dirty")
    }
  }
})