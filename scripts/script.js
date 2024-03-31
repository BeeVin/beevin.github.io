document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute('href'));
		const targetPosition = target.offsetTop;
		const startPosition = window.pageYOffset;
		const distance = targetPosition - startPosition;
		const duration = 1000; // スクロールにかける時間（ミリ秒）
		let start = null;

		function animation(currentTime) {
			if (start === null) start = currentTime;
			const timeElapsed = currentTime - start;
			const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, scrollY);
			if (timeElapsed < duration) window.requestAnimationFrame(animation);
		}

		function easeInOutCubic(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t * t + b;
			t -= 2;
			return c / 2 * (t * t * t + 2) + b;
		}

		window.requestAnimationFrame(animation);
	});
});

window.addEventListener('scroll', function() {
	var container = document.querySelector('.container');
	var popup = document.querySelector('.popup');
	var containerRect = container.getBoundingClientRect();
  
	if (containerRect.top < window.innerHeight && containerRect.bottom >= 0) {
	  popup.classList.add('show');
	} else {
	  popup.classList.remove('show');
	}
  });
