class Message extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(
            document.getElementById("message").content.cloneNode(true)
        );

        this.$container = this._shadowRoot.querySelector("#container");
        this.$content = this._shadowRoot.querySelector("#content");
        this.$displayName = this._shadowRoot.querySelector("#displayName");
        this.$messageContainer = this._shadowRoot.querySelector("#messageContainer")
    }

    static get observedAttributes() {
        return ['content', 'displayName', 'is-mine'];
    }

    set content(newVal) {
        this.setAttribute('content', newVal);
    }
    set displayName(newVal) {
        this.setAttribute('displayName', newVal);
    }
    set isMine(newVal) {
        this.setAttribute('is-mine', newVal);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'content') {
            this.$content.innerHTML = newVal;
        }
        if (name === 'displayName') {
            this.$displayName.innerHTML = newVal;
        }
        if(name === 'is-mine'&& newVal) {
            this.$container.classList.add("justify-end");
            this.$messageContainer.classList.add("bg-primary");
        } else {
            this.$messageContainer.classList.add("bg-secondary");
            
        }
    }
}

customElements.define('my-message', Message);