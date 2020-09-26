// === Burger Handler =====================================================================
{
	let isOpen = false;

	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		let elem = document.querySelector(`.${classNameElem}`);
		if(!isOpen) {
			elem.classList.add('open');
			 document.querySelector('.header').classList.add('open');
			 _slideDown(elem);
			isOpen = true;
		} else {
			elem.classList.remove('open');
			 document.querySelector('.header').classList.remove('open');
			 _slideUp(elem);
			isOpen = false;
		}

	}
	$('.burger').click((e) => burgerBtnAnimation(e));
}
// === Burger Handler =====================================================================	