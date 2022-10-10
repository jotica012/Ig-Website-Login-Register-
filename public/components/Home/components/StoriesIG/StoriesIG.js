export var AttributeStories;
(function (AttributeStories) {
    AttributeStories["username"] = "username";
    AttributeStories["pic"] = "pic";
    AttributeStories["viewed"] = "viewed";
    AttributeStories["story"] = "story";
})(AttributeStories || (AttributeStories = {}));
class StoriesIG extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            pic: null,
            viewed: null,
            story: null,
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
            
            <link href="./components/Home/components/StoriesIG/StoriesIG.css" rel="stylesheet">
            <section class= "storyHeader">
            <img src="${this.story}" width="70" class="storie">
            </section>
            `;
        }
    }
}
customElements.define("stories-ig", StoriesIG);
export default StoriesIG;
