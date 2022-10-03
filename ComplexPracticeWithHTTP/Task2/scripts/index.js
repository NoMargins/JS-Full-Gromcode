import { listenForSubmit, listenForValues } from './onSubmit.js';

document.addEventListener('DOMContentLoaded', function () {
	listenForSubmit();
	listenForValues();
});
