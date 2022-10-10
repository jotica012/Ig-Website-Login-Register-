export enum AttributeStories{
    "username" = "username",
    "pic" = "pic",
    "viewed" = "viewed",
    "story" = "story"
}

class StoriesIG extends HTMLElement {
    username?:string;
    pic?:string;
    viewed?:string;
    story?:string;

    static get observedAttributes(){
        const attrs: Record<AttributeStories,null> = {
            username: null,
            pic: null,
            viewed: null, 
            story: null,
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
        propName: AttributeStories, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
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