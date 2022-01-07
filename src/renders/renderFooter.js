import { Footer } from "../components/Footer/Footer";

export const renderFooter = () => {
    const root = document.getElementById('root');
    const footer = new Footer();

    root.append(footer.getHtml());
}