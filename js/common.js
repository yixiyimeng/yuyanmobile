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
	/* 打开菜单 */
	$('.menu').click(function(){
		$(this).toggleClass('close');
		$('.menuView').toggle()
	});
	/* tab切换 */
	$('.modbox-tab a').click(function(e) {
		if (!$(this).hasClass('active')) {
			$(this).siblings('a.active').removeClass('active')
			$(this).addClass('active');
			let index = $(this).index();
			let name = $(this).attr('name');
			$('.modbox-tabPanel[name="' + name + '"]').eq(index).show().siblings().hide()
			console.log($('.modbox-tabPanel[name="' + name + '"]').length)
		}
	})
})