import {mainPage} from './mainPageLoad'
import{menuPage} from './menuPageLoad';
mainPage();

const navElement1 = document.querySelector('#nav-element1');
navElement1.addEventListener('click', () => {
    resetTabContent();
    menuPage();
});


function resetTabContent() {
    const tabContent = document.querySelector('#tab-content');
    while (tabContent.childNodes.length > 0) {
        tabContent.removeChild(tabContent.lastChild);
    }
}
