"use strict";
window.addEventListener('DOMContentLoaded', () => {


	const wrapperTask = document.querySelector('.wrapper-todo__task'),
		input = document.querySelector('#input'),
		addTaskBtn = document.querySelector('.btn-to-do');


	let taskArr = [];


	if (localStorage.getItem('todo')) {
		taskArr = JSON.parse(localStorage.getItem('todo'));
		displayTasks();
	}


	addTaskBtn.addEventListener('click', () => {
		if (input.value.length === 0) {
			return;
		}
		const taskObj = {
			message: input.value,
			crossed: false,
			important: false,
		};
		taskArr.push(taskObj);


		displayTasks();
		input.value = '';
		localStorage.setItem('todo', JSON.stringify(taskArr));
	});



	function displayTasks() {

		let li = '';

		taskArr.forEach((item, i) => {

			li += `
			<li>
				<input type="checkbox" id="input-${i}" ${item.crossed ? 'checked' : ''}>
				<p class="text-value input-${i}">${item.message}</p>
				<button class="btn btn-delete">Delete</button>
			</li>
		`;
		});

		wrapperTask.innerHTML = li;

	}

	wrapperTask.addEventListener('change', (e) => {
		let idInput = e.target.getAttribute('id');
		let forText = wrapperTask.querySelector('.' + idInput);
		let textValue = forText.innerHTML;

		taskArr.forEach(item => {
			if (item.message === textValue) {
				item.crossed = !item.crossed;
				localStorage.setItem('todo', JSON.stringify(taskArr));
			}
		});
	});

	// wrapperTask.addEventListener('click', (e) => {
	// 	taskArr.forEach(item => {
	// 		if (item.)
	// 	});
	// });




















});

