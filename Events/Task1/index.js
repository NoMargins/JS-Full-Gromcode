const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');

const logTarget = (text, color) => {
	const eventsListElem = document.querySelector('.events-list');
	eventsListElem.innerHTML += `<span style ='color: ${color}; margin-left: 8px'>${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const newLocal = 'click';

const clearMode = () => {
	const eventsListElem = document.querySelector('.events-list');
	eventsListElem.innerHTML = '';
};

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener(newLocal, clearMode, true);

const handlersON = document.querySelector('.attach-handlers-btn');
const handlersOFF = document.querySelector('.remove-handlers-btn');

const addAllEvents = () => {
	divEl.addEventListener(newLocal, logGreyDiv);
	pEl.addEventListener(newLocal, logGreyP);
	spanEl.addEventListener(newLocal, logGreySpan);
	divEl.addEventListener(newLocal, logGreenDiv, true);
	pEl.addEventListener(newLocal, logGreenP, true);
	spanEl.addEventListener(newLocal, logGreenSpan, true);
};
handlersON.addEventListener(newLocal, addAllEvents);

const removeAllEvents = () => {
	divEl.removeEventListener(newLocal, logGreyDiv);
	pEl.removeEventListener(newLocal, logGreyP);
	spanEl.removeEventListener(newLocal, logGreySpan);
	divEl.removeEventListener(newLocal, logGreenDiv, true);
	pEl.removeEventListener(newLocal, logGreenP, true);
	spanEl.removeEventListener(newLocal, logGreenSpan, true);
};
handlersOFF.addEventListener(newLocal, removeAllEvents);
