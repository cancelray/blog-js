import { toLocalStorage } from "../../localStorage/setToLocalStorage";
import { postSectionRender } from "../../renders/renderPosts";

export const deletePost = event => {
    const localStorageContentPosts = localStorage.getItem('posts');
    const postsJsonArr = JSON.parse(localStorageContentPosts) || [];

    const index = event.target.dataset.number;
    postsJsonArr.splice(index, 1);
    toLocalStorage('', postsJsonArr, 'posts');
    postSectionRender();
}