import { Header } from "/components/header/header";
import { doTab } from "../tabs/doTabs"

const root = document.getElementById('root');
const header = new Header("MyBlog");

root.append(header.getHtml());

const tab = document.querySelectorAll('.tabs');
tab.forEach(e => e.addEventListener('click', doTab));
