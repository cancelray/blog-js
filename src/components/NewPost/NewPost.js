export class NewPost {
    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('new-post-wrapper');
    }

    getHtml() {
        this.wrapper.innerHTML = ` 
            <label for="title-input">Title</label>
            <input class="title-input" name="title-input">
            <p class="title-error hidden">No title</p>
            <label for="main-input">Text</label>
            <textarea class="main-input" name="main-input"></textarea>
            <p class="input-error hidden">No content</p>
            <button class="public-btn">Public</button>`;

        return this.wrapper;
    }
}