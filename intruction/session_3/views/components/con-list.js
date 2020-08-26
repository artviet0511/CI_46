class ConList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(
            document.getElementById("conversationList").content
                .cloneNode(true));

        this.$btnCreateCon = this._shadowRoot.querySelector("#btnCreateCon");
        this.$conList = this._shadowRoot.querySelector("#conList");

    }

    static get observedAttributes() {
        return ["list"];
    }

    set list(newVal) {
        this.setAttribute("list", newVal);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(JSON.parse(newVal));
        if (name === "list") {
            this.$conList.innerHTML = '';
            JSON.parse(newVal).forEach(item => {
                this.addCon(item.id, item.name, item.members.length)
            })
        }
    }

    connectedCallback() {
        this.$btnCreateCon.addEventListener('click', (event) => {
            event.stopPropagation();
            const createConEvent = new CustomEvent('create-con')
            this.dispatchEvent(createConEvent);
        });
    };

    addCon(id, name, noOfMems) {

        const conItem = document.createElement('con-item');
        conItem.name = name;
        conItem.noOfMems = noOfMems;
        conItem.id = id;
        this.$conList.appendChild(conItem);
    }

}

customElements.define('con-list', ConList);