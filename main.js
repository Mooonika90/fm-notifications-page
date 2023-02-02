const markAll = document.querySelector('.mark-all');
const notiBox = document.querySelectorAll('.notification-box');
const notNumber = document.querySelector('.notification-number');
const redDot = document.querySelectorAll('.red-dot');
const footer = document.querySelector('.footer-year');
let count = 0;
const setYear = () => {
	const currentYear = new Date();
	footer.textContent = currentYear.getFullYear();
};

const markUnread = () => {
	notiBox.forEach((box) => {
		box.classList.remove('unread');
		redDot.forEach((dot) => {
			dot.remove();
			notNumber.textContent = 0;
		});
	});
};
function deleteElement() {
	const boxClick = this.querySelector('.red-dot');
	notiBox.forEach((box) => {
		if (box.classList.contains('unread')) {
			this.classList.remove('unread');
			boxClick.remove();
			handelCount();
			notNumber.textContent = count;
		}
	});
}

const handelCount = () => {
	const unread = document.querySelectorAll('.unread');
	count = unread.length + 1;
	console.log(count);
	if (count > 0) {
		count--;
	} else {
		notNumber.textContent = 0;
	}
};
markAll.addEventListener('click', markUnread);
notiBox.forEach((box) => {
	box.addEventListener('click', deleteElement);
});
setYear();
