export class Post {
    constructor(title, content, date, fav, i) {
        this.title = title;
        this.content = content;
        this.time = date || new Date().toLocaleString();
        this.fav = fav;
        this.number = i;
    }

    renderPost() {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <div class="post-head">
                <h2>${this.title}</h2>
                <p>${this.time}</p>
            </div>
            <div class="post-content">${this.content}</div>
            <div class="buttons">
                <button class="delete" data-number=${this.number}>Delete</button>
                <button class="add-favorite ${this.fav ? 'in-fav' : ''}" data-number=${this.number}>Favorite</button>
            </div>`

        return postDiv;
    }
}