const mainPage = () => {

    const mainContainer = document.querySelector('#content');

    const header = () => {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');

        const title = document.createElement('h1');
        title.textContent = 'nut Shop';
        // I need to put the picture exactly after the first letter
        title.insertAdjacentHTML('afterbegin', `D<img src='https://pluspng.com/img-png/kawaii-donut-png-click-on-images-to-enlarge-and-download-643.png' alt='Donut' height='55px'>`)

        mainContainer.appendChild(header);
        header.appendChild(title);
    }

    const navBar = () => {
        const navBar = document.createElement('div');
        navBar.setAttribute('id', 'nav-bar');
        mainContainer.appendChild(navBar);
    }

    const navBarContents = () => {
        const navBarContainer = document.querySelector('#nav-bar');
        for (let i = 0; i < 2; i++) {
            const element = document.createElement('div');
            element.classList.add('nav-element');
            element.textContent = 'test1';
            navBarContainer.appendChild(element);
        }

        navBarContainer.firstElementChild.textContent = 'Menu';
        navBarContainer.lastElementChild.textContent = 'Contact';
    }

    const tabContent = () => {
        const tabContent = document.createElement('div');
        tabContent.setAttribute('id', 'tab-content');
        tabContent.textContent = 'test';

        const img = document.createElement('img');
        img.setAttribute('id', 'about-pic');
        img.setAttribute('src', `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2737,w_4032,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/IMG_20190311_070540_ngteek.jpg`);
        img.setAttribute('height', '300px');

        const aboutText = document.createElement('p');
        aboutText.textContent = 'Hershey\'s oldest freestanding restaurant. A local favorite for 83+ years. Featuring our famous DeAngelis spaghetti sauces and our famous Upside Down pizza. Homemade, delicious Italian dishes, featuring seafood, steaks, and pasta. Full pub menu and sandwich selection. Full menu offered all day and late night. Full bar with entertainment on weekends. Home to the stars, cast parties and celebrities from the Hershey Theatre. Conveniently located on Chocolate Avenue, directly across from the Hershey Story Museum.';

        mainContainer.appendChild(tabContent);
        tabContent.appendChild(img);
        tabContent.appendChild(aboutText);
    }
    
header();
navBar();
tabContent();
navBarContents();
};
export {mainPage}