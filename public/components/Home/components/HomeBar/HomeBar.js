export var AttributeHomeBar;
(function (AttributeHomeBar) {
    AttributeHomeBar["user"] = "user";
})(AttributeHomeBar || (AttributeHomeBar = {}));
class HomeBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            user: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/components/HomeBar/HomeBar.css">
            
            <section>
            <nav class="headbar">
            <div class="head-wrapper">
             <img src="./components/img/InstaLogo.png" class="logo" alt="">
             <div class="head-items">
             <img src="./components/img/homevar.png" class="icon" alt="">
             <img src="./components/img/chatvar.png" class="icon" alt="">
            /app <img src="./components/img/uploadvar.png" class="icon" alt="">
             <img src="./components/img/serachvar.png" class="icon" alt="">
             <img src="./components/img/likevar.png" class="icon" alt="">
             <img src="./components/img/minipp.png" class="icon" alt="">
             <img src="./components/img/lookvar.png" class="look" alt="">

               </div>
             </div>
            
          </nav>
         
            </section>


            `;
        }
    }
}
customElements.define("my-homebar", HomeBar);
export default HomeBar;
