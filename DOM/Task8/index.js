// export
function createButton(buttonText) {
	const bodySection = document.querySelector('body');
	const button = document.createElement('button');
	bodySection.append(button);
	return (button.textContent = buttonText);
}
