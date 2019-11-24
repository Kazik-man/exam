$('.menu__list-block').on('click', function (e) {
	e.preventDefault;
	$('.menu_btn').toggleClass('menu_btn--active');
    $('.menu__list').toggleClass('menu__list--active');
});