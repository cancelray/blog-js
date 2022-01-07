import { NewPost } from "../components/NewPost/newPost"
import { createPost } from "../components/NewPost/createPost";

export const newPostSectionRender = () => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    const newPostSection = new NewPost();
    mainContainer.append(newPostSection.getHtml());

    const publicButton = document.querySelector('.public-btn');
    publicButton.addEventListener('click', createPost);
}