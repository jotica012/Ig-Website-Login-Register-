export var AttributeSuggestions;
(function (AttributeSuggestions) {
    AttributeSuggestions["username"] = "username";
    AttributeSuggestions["pic"] = "pic";
    AttributeSuggestions["peopleFollowed"] = "peopleFollowed";
})(AttributeSuggestions || (AttributeSuggestions = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            username: null,
            pic: null,
            peopleFollowed: null
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
