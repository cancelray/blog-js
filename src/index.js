import { } from "./_forTests/_defaultPosts";
import { } from "./renders/renderHeader";
import { } from "./components/Post/Post";
import { } from "./renders/renderPosts";
import { mainSectionRender } from "./renders/mainSection";
import { postSectionRender } from "./renders/renderPosts";
import { renderFooter } from "./renders/renderFooter";

import "./scss/index.scss";

mainSectionRender();
postSectionRender();
if (document.querySelector('.main')) {
    renderFooter();
}

