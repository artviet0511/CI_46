import { setScreen } from "../../index.js"
import { register } from "../../controller/auth.js"
class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowRood = this.attachShadow({ mode: "open" });
        this._shadowRood.appendChild(
            document.getElementById("registerScreen")
                .content.cloneNode(true)
        );
        this._shadowRood
            .querySelector('#LinkToLogin')
            .addEventListener("click", () => {
                setScreen("login")
            });
        this.$form = this._shadowRood.querySelector("#formRegister");
        this.$email = this.$form.querySelector("form-input[name='email']");
        this.$displayName = this.$form.querySelector("form-input[name='displayName']");
        this.$password = this.$form.querySelector("form-input[name='password']");
        this.$confirmPassword = this.$form.querySelector("form-input[name='confirmPassword']");

        this.$form
            .addEventListener("submit", (event) => {
                event.preventDefault();
                this.register();
            });
    }
    async register() {
        const email = this.$email.value;
        const displayName = this.$displayName.value;
        const password = this.$password.value;
        const confirmPassword = this.$confirmPassword.value;
        const result = await register(email, displayName, password, confirmPassword);
        console.log(result);
        if (result.hasError) {
            this.$email.error = result.error.email;
            this.$displayName.error = result.error.displayName;
            this.$password.error = result.error.password;
            this.$confirmPassword.error = result.error.confirmPassword;
        } else {
            this.$email.error = "";
            this.$displayName.error = "";
            this.$password.error = "";
            this.$confirmPassword.error = "";
            alert('Registerd Successfully!');
        }
    }
}

customElements.define('register-screen', RegisterScreen)