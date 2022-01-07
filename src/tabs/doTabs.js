import { postSectionRender } from "../renders/renderPosts";
import { newPostSectionRender } from "../renders/newPostSection";
import { favSectionRender } from "../renders/favSection";

export const doTab = () => {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(e => {
        e.onclick = click => {
            const target = click.target;

            if (!target.classList.contains('current')) {
                tabs.forEach(elem => elem.classList.remove('current'));
                target.classList.add('current');
                const dataName = target.getAttribute('data-name');

                switch (dataName) {
                    case 'posts': postSectionRender();
                        break;
                    case 'new-post': newPostSectionRender();
                        break;
                    case 'favorites': favSectionRender();
                        break;
                }
            }
        }
    });
}