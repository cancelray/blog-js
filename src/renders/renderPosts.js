import { getItems } from "../localStorage/getFromLocalStorage";
import { addEventsForPostButtons } from "../addEvents/forPostButtons";


export const postSectionRender = () => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    getItems(mainContainer, 'posts');
    addEventsForPostButtons('posts');
}