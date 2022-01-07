import { checkFavs } from "../components/Post/addToFav";
import { deletePost } from "../components/Post/delete";

export const addEventsForPostButtons = section => {
    const favBattons = document.querySelectorAll('.add-favorite');
    const delBattons = document.querySelectorAll('.delete');

    favBattons.forEach(e => e.addEventListener('click', checkFavs));

    if (section === 'posts') delBattons.forEach(e => e.addEventListener('click', deletePost));

    if (section === 'favs') {
        delBattons.forEach(e => {
            e.classList.remove('delete');
            e.classList.add('disabled');
        });
    }
}