import { toLocalStorage } from "../../localStorage/setToLocalStorage";

export const checkFavs = event => {
    event.target.classList.toggle('in-fav');

    const localStorageContentPosts = localStorage.getItem('posts');
    const postsJsonArr = JSON.parse(localStorageContentPosts) || [];

    const index = event.target.dataset.number;

    if (event.target.classList.contains('in-fav')) {
        postsJsonArr[index].fav = true;
        toLocalStorage('', postsJsonArr, 'posts');
    } else {
        postsJsonArr[index].fav = false;
        toLocalStorage('', postsJsonArr, 'posts');
    }
}
