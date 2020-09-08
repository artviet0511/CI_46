class ConItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(document.getElementById("conversationItem").content.cloneNode(true));
        this.$name = this._shadowRoot.querySelector("#name");
        this.$noOfMems = this._shadowRoot.querySelector("#no-of-mems");
        this.$container = this._shadowRoot.querySelector("#container");
    }
    static get observedAttributes() {
        return ['name', 'no-of-mems', 'con-id', 'active'];
    }

    set active(newVal) {
        this.setAttribute('active', newVal);
    }

    get active() {
        return this.getAttribute('active');
    }

    set conId(newVal) {
        this.setAttribute('con-id', newVal);
    }

    get conId() {
        return this.getAttribute('con-id');
    }

    set name(newVal) {
        this.setAttribute('name', newVal);
    }

    get name() {
        return this.getAttribute('name')
    }

    set noOfMems(newVal) {
        this.setAttribute('no-of-mems', newVal)
    }

    get noOfMems() {
        return this.getAttribute('no-of-mems')
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "active") {
            console.log(name, newVal);
            if (newVal) {
                console.log("hello");
                this.$container.classList.add("active")
            } else {
                this.$container.classList.remove("active");
            }
        }
        this.$name.innerHTML = this.name;
        this.$noOfMems.innerHTML = this.noOfMems;
    }

    connectedCallback() {
        this.$container.addEventListener('click', (event) => {
            // event.stopPropagation();
            const changeActiveConEvent = new CustomEvent('changeActiveCon', {
                composed: true,
                detail: {
                    id: this.conId,
                }
            });
            this.dispatchEvent(changeActiveConEvent);
        });
    }
}

customElements.define('con-item', ConItem);