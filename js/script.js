(function ($) {
    'use strict';
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

  
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

   
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

 
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });

})(jQuery);

function sendCont(event) {
	    jQuery.ajax({
		url: "contmail.php",
		data:'name='+$("#name").val()+'&email='+$("#email").val()+'&message='+$(message).val(),
		type: "POST",
		success:function(data){
		$("#mstatus").html(data);
		},
		error:function (){}
		});	
}