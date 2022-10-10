export enum AttributeHomeBar{   
    "user" = "user",
}

class HomeBar extends HTMLElement {
    user?:string;
    
    static get observedAttribute(){
        const attrs: Record<AttributeHomeBar,null> = {
            user: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: AttributeHomeBar, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
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