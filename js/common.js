$(function() {
	/* 返回顶部 */
	$('#goToTop').hide(); //隐藏go to top按钮
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#goToTop').fadeIn();
		} else {
			$('#goToTop').fadeOut();
		}
	});
	$('#goToTop').click(function() {
		$('html , body').animate({
			scrollTop: 0
		}, 'slow');
	});
})