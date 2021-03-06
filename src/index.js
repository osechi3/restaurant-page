import {mainPage, mainPageContent} from './mainPageLoad'
import{menuPage} from './menuPageLoad';
import{contactPage} from './contactPageLoad';
mainPage();

const navElement1 = document.querySelector('#nav-element1');
navElement1.addEventListener('click', () => {
    resetTabContent();
    menuPage();
});

const header = document.querySelector('#header');
header.addEventListener('click', () => {
    resetTabContent();
    mainPageContent();
})

const navElement2 = document.querySelector('#nav-element2');
navElement2.addEventListener('click', () => {
    resetTabContent();
    contactPage();
});

function resetTabContent() {
    const tabContent = document.querySelector('#tab-content');
    while (tabContent.childNodes.length > 0) {
        tabContent.removeChild(tabContent.lastChild);
    }
}
