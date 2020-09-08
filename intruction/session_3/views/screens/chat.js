import { sendMsg } from "../../controller/chat.js";

class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(
            document.getElementById("chatScreen")
                .content.cloneNode(true));

        this.$buttonShowCon = this._shadowRoot.querySelector("#btnShowCon");
        this.$buttonShowMem = this._shadowRoot.querySelector("#btnShowMem");
        this.$placeholder = this._shadowRoot.querySelector("#placeholder");

        this.$buttonShowCon.addEventListener('click', () => {
            this.$placeholder.classList.add("visible");
            this.showListCon();
        });

        this.$placeholder.addEventListener('click', () => {
            this.$placeholder.classList.remove("visible");
        });

        this.$chatForm = this._shadowRoot.querySelector("#chatForm");
        this.$message = this._shadowRoot.querySelector("form-input[name='message']");

        this.$messageList = this._shadowRoot.querySelector("#messageList");

        this.$txtTitle = this._shadowRoot.querySelector("#txtTitle");

        this.conList = [];
        this.activeCon = "";
        this.messageListener = null;
    }

    showListCon() {
        const $conList = document.createElement("con-list");
        $conList.list = JSON.stringify(this.conList);
        $conList.addEventListener("create-con", () => this.showCreateConForm());
        $conList.addEventListener("changeActiveCon", (event) => {
            this.activeCon = event.detail.id;
            const selected = this.conList.find((con) => con.id === this.activeCon);
            this.$txtTitle.innerHTML = selected.name;
            $conList.activeId = this.activeCon;
            this.$messageList.innerHTML = "";
            this.listenMessage();
        })
        this.$placeholder.appendChild($conList);
    }

    showCreateConForm() {
        this.$placeholder.innerHTML = "";
        const $conForm = document.createElement("con-form");
        this.$placeholder.appendChild($conForm);
    }

    listenMessage() {
        if (this.messageListener) {
            this.messageListener();
        }
        this.messageListener = db.collection("messages")
            .where('conId', '==', this.activeCon)
            .orderBy("createdAt")
            .onSnapshot((querySnapshot) => {
                querySnapshot.docChanges().forEach((change) => {
                    if (change.type !== "added") return;
                    const data = change.doc.data();
                    const myMsg = document.createElement('my-message');
                    myMsg.content = data.content;
                    myMsg.displayName = data.sender.displayName;

                    if (data.sender.email === firebase.auth().currentUser.email) {
                        myMsg.isMine = true;
                    }
                    this.$messageList.prepend(myMsg);
                })
            });
    }

    connectedCallback() {

        this.$chatForm.addEventListener('submit', (event) => {
            event.preventDefault();
            sendMsg(this.$message.value, this.activeCon);
        })
        db.collection("conversations")
            .where('members', 'array-contains', firebase.auth().currentUser.email)
            .onSnapshot((querySnapshot) => {
                this.conList = [];
                querySnapshot.forEach((doc) => {
                    const item = doc.data();
                    item.id = doc.id;
                    this.conList.push(item);
                });
            });
    }


}
customElements.define('chat-screen', ChatScreen);