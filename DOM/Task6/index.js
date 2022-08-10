export function setButton(buttonText) {
	const res = document.querySelector('body');
	const resFinal = document.createElement('button');
	res.append(resFinal);
	return (resFinal.innerHTML = buttonText);
}
