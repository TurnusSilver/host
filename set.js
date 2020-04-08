const loginForm = document.querySelector('#b1');
const item = document.querySelector('.i1');
	loginForm.addEventListener('click', (e) => {
  	e.preventDefault();
  	item.style.display='none';
  });