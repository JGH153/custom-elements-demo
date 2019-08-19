class MyFirstElement extends HTMLElement {
	constructor() {
		super();
		console.log('contruct');

		const template = document.getElementById("my-comp");
		const templateContent = template.content;
		// Create new Shadow Root
		const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
			templateContent.cloneNode(true)
		);
	}

	connectedCallback() {
		console.log('connectedCallback');
	}

	disconnectedCallback() {
		console.log('disconnectedCallback');
	}
}

customElements.define('my-comp', MyFirstElement);