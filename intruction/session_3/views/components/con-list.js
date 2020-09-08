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
        return ["list", "active-id"];
    }

    set activeId(newVal) {
        this.setAttribute('active-id', newVal);
    }

    set list(newVal) {
        this.setAttribute("list", newVal);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "active-id") {
            if(oldVal === newVal) return;
            if(oldVal !== null){
                this._shadowRoot.querySelector(`con-item[con-id='${oldVal}']`).active = "";

            }
            this._shadowRoot.querySelector(`con-item[con-id='${newVal}']`).active = true;

        }
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
        conItem.conId = id;
        this.$conList.appendChild(conItem);
    }

}

customElements.define('con-list', ConList);

