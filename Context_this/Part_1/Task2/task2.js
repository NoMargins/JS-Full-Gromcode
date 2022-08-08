export const callbackPrompt = {
	message: "Let's call you back",
	showPrompt() {
		const phoneNumber = prompt(this.message);
		console.log(phoneNumber);
	},
	showDeferredPrompt(ms) {
		setTimeout(() => this.showPrompt(), ms);
	},
};

console.log(callbackPrompt.showDeferredPrompt(1000));
