class MyButton extends HTMLButtonElement {
	count = 0;
	constructor() {
		super();

		this.addEventListener('click', e => {
			this.count ++;
			this.updateButton();
		});

		this.updateButton();
		this.addCss();
		
	}

	updateButton() {
		this.innerText = 'Click me: ' + this.count;
	}

	addCss() {
		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', 'my-button/my-button.css');

		// Attach the created element to the shadow dom
		this.appendChild(linkElem);
	}
}

customElements.define('my-button', MyButton, { extends: "button" });