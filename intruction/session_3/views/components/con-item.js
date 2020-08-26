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
        return ['name', 'no-of-mems', 'id'];
    }

    set id(newVal) {
        this.setAttribute('id', newVal);
    }

    get id() {
        return this.getAttribute('id');
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

    attributeChangedCallback() {
        this.$name.innerHTML = this.name;
        this.$noOfMems.innerHTML = this.noOfMems;
    }

    connectedCallback() {
        this.$container.addEventListener('click', (event) => {
            event.stopPropagation();
            this.dispatchEvent(new CustomEvent('changeActiveCon', {
                detail: {
                    id: this.id,
                    
                }
            }));
        });
    }
}

customElements.define('con-item', ConItem);