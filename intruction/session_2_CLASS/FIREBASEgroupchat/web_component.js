// const template = document.createElement('template');
// // Khởi tạo template ban đầu
// template.innerHTML = `
//     <div>
//         <p id="name"></p>
//         <p></p>
//         <p></p>
//         <button>My First Web Component</button>
//         <button id="btnhello">Hello</button>
//     </div>
// `;
// class MyWebComponent extends HTMLElement {
//     constructor() {
//         super();
//         this._shadowRoot = this.attachShadow({ mode: 'open' });
//         this._shadowRoot.appendChild(template.content.cloneNode(true));
//         this.nameElm = this._shadowRoot.querySelector('#name');
//         this.btnHello = this._shadowRoot.querySelector('#btnhello');
//         this.btnHello.addEventListener('click', () =>{
//             alert(`Say Hello to ${this.name}`)
//         });
//     }

//     sayHello() {
//         console.log(this);
//         alert(`Say hello to ${this.name}`);
//     }

//     static get observedAttributes() {
//         return ['name', 'grade'];
//     }

//     set name(newVal) {
//         this.setAttribute('name', newVal);
//     }

//     get name() {
//         return this.getAttribute('name');
//     }

//     attributeChangedCallback(name, oldVal, newVal) {
//         if (name === 'name') {
//             console.log("oldVal: ", oldVal);
//             this.nameElm.innerHTML = newVal;
//         }
//     }
// }


// window.customElements.define('my-web', MyWebComponent)

const name_card = document.createElement('template');
name_card.innerHTML = `
    <div id="fullName"></div>
    <div id="date"></div>
    <div id="address"></div>
`;
class NameCard extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
        this._shadowRoot.appendChild(name_card.content.cloneNode(true));
        this.fullNameElm = this._shadowRoot.querySelector("#fullName");
        this.dateElm = this._shadowRoot.querySelector("#date");
        this.addressElm = this._shadowRoot.querySelector("#address")
    }

    static get observedAttributes() {
        return ['full-name', 'date', 'address'];
    }

    attributeChangedCallback(attr, oldVal, newAttr) {
        if (attr === 'full-name') {
            this.fullNameElm.innerHTML = newAttr;
        }
        
        if (attr === 'date') {
            this.dateElm.innerHTML = newAttr;
        }
        
        if (attr === 'address') {
            this.addressElm.innerHTML = newAttr;
        }
    }

    set fullName(newAttr) {
        this.setAttribute('fullName', newAttr)
    }

    get fullName() {
        return this.getAttribute('fullName');
    }
    set date(newAttr) {
        this.setAttribute('date', newAttr)
    }

    get date() {
        return this.getAttribute('date');
    }
    set address(newAttr) {
        this.setAttribute('address', newAttr)
    }

    get address() {
        return this.getAttribute('address');
    }
}

window.customElements.define('name-card', NameCard);