import { toLocalStorage } from "../../localStorage/setToLocalStorage";
import { Post } from "../Post/Post";

export const createPost = () => {
    const titleError = document.querySelector('.title-error');
    const inputError = document.querySelector('.input-error');

    const postTitle = document.querySelector('.title-input');
    const postText = document.querySelector('.main-input');

    const titleContent = postTitle.value;
    if (!titleContent) {
        titleError.classList.remove('hidden');
        return;
    }
    if (titleContent && !titleError.classList.contains('hidden')) titleError.classList.add('hidden');

    const textContent = postText.value;
    if (!textContent) {
        inputError.classList.remove('hidden');
        return;
    }
    if (textContent && !inputError.classList.contains('hidden')) inputError.classList.add('hidden');


    const localStorageContentPosts = localStorage.getItem('posts');
    const jsonArr = JSON.parse(localStorageContentPosts) || [];

    const post = new Post(titleContent, textContent);
    toLocalStorage(post, jsonArr, 'posts');

    postTitle.value = '';
    postText.value = '';
}