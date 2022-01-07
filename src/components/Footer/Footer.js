export class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer');
    }

    getHtml() {
        this.footer.innerHTML = ` 
            <div class="container">
                <div class="copyright">Copyright</div>
            <div>`;

        return this.footer;
    }
}
