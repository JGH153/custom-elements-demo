class MyDiv extends HTMLDivElement {
	constructor() {
		// Always call super first in constructor
		super();

		const shadow = this.attachShadow({ mode: "open" });
		const template = document.getElementById("my-div");
		const templateContent = template.content;
		const shadowRoot = shadow.appendChild(
			templateContent.cloneNode(true)
		);

		this.addSpan(shadow);
		this.addCss(shadow);
	}

	addCss(shadow) {
		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', 'my-div/my-div.css');

		// Attach the created element to the shadow dom
		shadow.appendChild(linkElem);
	}

	addSpan(shadow) {
		var wrapper = document.createElement('span');
		wrapper.setAttribute('class', 'wrapper');
		wrapper.innerText = 'En wrapper';
		shadow.appendChild(wrapper);
	}
}

customElements.define('my-div', MyDiv, { extends: "div" });