class ShowItem extends HTMLElement {
    constructor() {
        super();
        this.$shadow = this.attachShadow({ mode: "open" });
        this.$shadow.appendChild(document.getElementById("showItem").content.cloneNode(true));
        this.$img = this.$shadow.querySelector("#imgItem");
        this.$name = this.$shadow.querySelector("#name");
        this.$author = this.$shadow.querySelector("#author");
    }
    static get observedAttributes() {
        return ["src", "name", "author"];
    }
    attributeChangedCallback() {
        this.render();
    }
    get value() {
        return this.$img.value;
    }
    render() {
        this.$img.src = this.getAttribute("src");
        this.$name.innerHTML = this.getAttribute("name");
        this.$author.innerHTML = this.getAttribute("author");
    }
}
customElements.define('show-item', ShowItem);


class ShowData extends HTMLElement {
    constructor(){
        super();
        this.$shadow = this.attachShadow({mode: "open"});
        this.$shadow.appendChild(document.getElementById("showData").content.cloneNode(true));
        this.$show = this.$shadow.querySelector("#show");
    }

    static get observedAttributes() {
        return ['show']
    }

    get value() {
        return this.$show.value;
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.$show.innerHTML = this.getAttribute("show")
    }
}

// let data = [
//     {
//         img: "",
//         name: "Nguyen Ich Viet",
//         author: "PS. ABC"
//     },
//     {
//         img: "",
//         name: "Nguyen Van A",
//         author: "PS. ABC"
//     },
//     {
//         img: "",
//         name: "Nguyen Van B",
//         author: "PS. ABC"
//     },
//     {
//         img: "",
//         name: "Nguyen Van C",
//         author: "PS. ABC"
//     },
//     {
//         img: "",
//         name: "Nguyen Van D",
//         author: "PS. ABC"
//     },
//     {
//         img: "",
//         name: "Nguyen Van E",
//         author: "PS. ABC"
//     },

// ];
// let showData = document.getElementById("showData");
// for (let key of data) {
//     showData.innerHTML += `<div><show-item scr="${key.img}" name="${key.name}" author="${key.author}"></show-item></div>`
// }