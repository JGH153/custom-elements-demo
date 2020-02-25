"use strict"

class MyFirstElement extends HTMLElement {

	constructor() {
		super();
		console.log('constructor');

		const template = document.getElementById("my-comp");
		const templateContent = template.content;
		// Create new Shadow Root
		const shadow = this.attachShadow({ mode: "open" });
		const shadowRoot = shadow.appendChild(
			templateContent.cloneNode(true)
		);

		this.addSpan(shadow);
		this.addCss(shadow);
		this.changeSpan(shadow);
		this.addListener(shadow);
	}

	connectedCallback() {
		console.log('connectedCallback');
		// might be false sometimes...
		if(this.isConnected) {
			console.log(this.isConnected);

		}
	}

	disconnectedCallback() {
		console.log('disconnectedCallback');
	}

	addListener(shadow) {
		shadow.addEventListener('click', e => {
			console.log('click');
		});
	}

	addSpan(shadow) {
		var wrapper = document.createElement('span');
		wrapper.setAttribute('class', 'wrapper');
		wrapper.innerText = 'En wrapper';
		shadow.appendChild(wrapper);
	}

	addCss(shadow) {
		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', 'my-comp/my-comp.css');

		// Attach the created element to the shadow dom
		shadow.appendChild(linkElem);
	}

	changeSpan(shadow) {
		const mySpan = shadow.getElementById('mySpan');
		mySpan.innerText = 'Changed!';
	}
}

customElements.define('my-comp', MyFirstElement);