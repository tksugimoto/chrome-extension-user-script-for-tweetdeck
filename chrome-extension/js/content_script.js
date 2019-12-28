/***************** 詳細表示時に余白クリックで戻る ******************/
document.body.addEventListener('click', ({ target }) => {
	if (!target.classList) return;
	if (target.classList.contains('js-detail-container') || target.classList.contains('js-detail-content')) {
		target.closest('section').querySelector('.js-column-back .column-title-back').click();
	}
});

/***************** 画像拡大表示時にクリックで次のサムネ表示 ******************/
document.body.addEventListener('click', event => {
	const targetLink = event.target.closest('#open-modal .l-table .js-media-image-link');
	if (targetLink) {
		const showNextLink = document.querySelector('#open-modal .js-media-gallery-next');
		if (showNextLink.classList.contains('is-hidden')) {
			document.querySelector('#open-modal .icon-close').click();
		} else {
			showNextLink.click();
		}
		event.preventDefault();
	}
});
