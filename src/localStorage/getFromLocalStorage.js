import { Post } from "../components/Post/Post";

export const getItems = (section, key) => {
    const localStorageContent = localStorage.getItem('posts');

    const contentArr = JSON.parse(localStorageContent);

    if (key === 'posts') {
        contentArr.forEach((e, i) => {
            const newPost = new Post(e.title, e.content, e.time, e.fav, i);
            section.append(newPost.renderPost());
        });

        if (!section.hasChildNodes()) section.innerText = 'No posts';
    } else if (key === 'favs') {
        contentArr.forEach((e, i) => {
            if (e.fav) {
                const newPost = new Post(e.title, e.content, e.time, e.fav, i);
                section.append(newPost.renderPost());
            }
        });

        if (!section.hasChildNodes()) section.innerText = 'No favorites';
    }
}