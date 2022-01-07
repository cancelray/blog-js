import { getItems } from "../localStorage/getFromLocalStorage";
import { addEventsForPostButtons } from "../addEvents/forPostButtons";

export const favSectionRender = () => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    getItems(mainContainer, 'favs');
    addEventsForPostButtons('favs');
}