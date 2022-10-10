export enum AttributeSuggestions{
    "username" = "username",
    "pic" = "pic",
    "peopleFollowed" = "peopleFollowed",
}

class Suggestions extends HTMLElement {
    username?:string;
    pic?:string;
    peopleFollowed?:string;

    static get observedAttribute(){
        const attrs: Record<AttributeSuggestions,null> = {
            username: null,
            pic: null,
            peopleFollowed: null
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
        propName: AttributeSuggestions, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link href="./components/Home/components/Suggestions/Suggestions.css"  rel="stylesheet">
            
            <p class="myprofileinformation">
            <b>Jotica012</b><br><br>
           </p>

            <section class= "suggestions">
                <div class = "pp">
                    <img src= "img/MiniProfilePictures/user.png" alt="pic"> 

                    <p class="ppinformation">
                  

                <p class="suggest">
             <b>Suggestions for you</b><br>  
            </p>

            <p class="suggest1">
             See all 
            </p>

            <p class="suggest2">
             Change
            </p>

            <p class="follow">
             follow
            </p>

            <p class="follow2">
             follow
            </p>

            <p class="follow3">
             follow
            </p>
        
            <p class="follow4">
             follow
            </p>
            
            <p class="follow5">
             follow
            </p>

    
            </section>
            `;
        }
    }
}
customElements.define("my-suggestions", Suggestions);
export default Suggestions;