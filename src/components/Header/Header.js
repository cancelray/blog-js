export class Header {
    constructor(title) {
        this.title = title;
    }

    getHtml() {
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = ` 
            <div class="container">
                <nav>
                    <a href="/" class="logo">${this.title}</a>
                        <ul class="nav-menu">
                            <li><a href="#" class="tabs current" data-name="posts">Posts</a></li>
                            <li><a href="#" class="tabs" data-name="new-post">New Post</a></li>
                            <li><a href="#" class="tabs" data-name="favorites">Favorites</a></li>
                        </ul>
                </nav>
            <div>`;

        return header;
    }
}

