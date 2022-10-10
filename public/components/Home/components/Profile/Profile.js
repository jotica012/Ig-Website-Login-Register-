export var Attribute;
(function (Attribute) {
    Attribute["user"] = "user";
    Attribute["username"] = "username";
    Attribute["location"] = "location";
    Attribute["caption"] = "caption";
    Attribute["likes"] = "likes";
    Attribute["comments"] = "comments";
    Attribute["days"] = "days";
    Attribute["bg"] = "bg";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            user: null,
            username: null,
            location: null,
            caption: null,
            likes: null,
            comments: null,
            days: null,
            bg: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case Attribute.likes:
                this.likes = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.comments:
                this.comments = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.days:
                this.days = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    // ${this.location} ${this.caption} ${this.likes} ${this.comments}${this.days} ${this.bg}
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
        <link href="./components/website.css" rel="stylesheet">
        <link rel="stylesheet" href="./components/website.css">
       
        <section class="polaroid">
        
        <img src = ${this.user} alt = "user" class="user">
        <img src = "img/dots.png"  alt = "dots" class="dots">
        
        <p class="title">
        <b>${this.username}</b> 
        <br>
        ${this.location}
        <br>
        </p>
        <br>
        <img src = ${this.bg} alt = "fondo" class="bg">
        
        <br>
        <img src = "img/heart.png" alt = "corazon vacio" class="heart">
        <img src = "img/chat.png" alt = "chat" class="chat">
        <img src = "img/send.png" alt = "send" class="send">
        
        <img src = "img/save.png" alt = "save" class="save">
        <br>
        
        <p class="bottomsection"> 
        <b> ${this.likes} likes </b>
        <br>
        <b> ${this.username} </b> ${this.caption}
        </p>
        <p class="comment"> 
        <b>  View all ${this.comments} comments </b>
        </p>
        <p class="date"> 
        ${this.days} days ago 
        </p> 
        </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
