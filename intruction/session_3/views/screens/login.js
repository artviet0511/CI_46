import { setScreen } from "../../index.js";
import { login } from "../../controller/auth.js"

class LoginScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowRood = this.attachShadow({ mode: "open" });
        this._shadowRood.appendChild(
            document.getElementById("loginScreen")
                .content.cloneNode(true)
        );

        this._shadowRood
            .querySelector('#LinkToRegister')
            .addEventListener("click", () => {
                setScreen("register")
            });
        this.$form = this._shadowRood.querySelector("#formLogin");
        this.$email = this.$form.querySelector("form-input[name='email']");
        this.$password = this.$form.querySelector("form-input[name='password']");

        this.$form
            .addEventListener("submit", (event) => {
                event.preventDefault();
                this.login();
            });
    }

    login() {
        const email = this.$email.value;
        const password = this.$password.value;
        const result = login(email, password);
        if (result.hasError) {
            this.$email.error = result.error.email;
            this.$password.error = result.error.password;
        } else {
            this.$email.error = "";
            this.$password.error = "";
        }
    }
}

customElements.define('login-screen', LoginScreen)