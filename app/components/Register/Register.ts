import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            addUser({email,password}).then(value => {
                if (value) {
                    const event: CustomEvent = new CustomEvent ("register-completed", {
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent (event);
                }else{
                    alert("Este usuario ya está creado");
                }
            });
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link href="./components/register.css"  rel="stylesheet">
        <section>
        <div class = "card">
        <img src= "./img/InstaLogo.png" alt="pic" class = "logo"> 
        <h3 class = "title">Register to see photos and videos from your friends</h3>
            <app-form></app-form>
         </section>

        `
    }
}

customElements.define("app-register",Register);