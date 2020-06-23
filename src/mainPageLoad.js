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
    };

    const navBar = () => {
        const navBar = document.createElement('div');
        navBar.setAttribute('id', 'nav-bar');
        mainContainer.appendChild(navBar);
    };

    const navBarContents = () => {
        const navBarContainer = document.querySelector('#nav-bar');
        for (let i = 0; i < 2; i++) {
            const element = document.createElement('div');
            element.classList.add('nav-element');
            navBarContainer.appendChild(element);
        }
        navBarContainer.firstElementChild.setAttribute('id', 'nav-element1');
        navBarContainer.lastElementChild.setAttribute('id', 'nav-element2');

        navBarContainer.firstElementChild.textContent = 'Menu';
        navBarContainer.lastElementChild.textContent = 'Contact';
    };

    const tabContent = () => {
        const tabContent = document.createElement('div');
        tabContent.setAttribute('id', 'tab-content');
        mainContainer.appendChild(tabContent);
    };
    
header();
navBar();
tabContent();
mainPageContent();
navBarContents();
};

const mainPageContent = () => {
    const tabContent = document.querySelector('#tab-content');

    const slogan = document.createElement('p');
    const img = document.createElement('img');
    const shopDescription = document.createElement('p');

    slogan.setAttribute('id', 'slogan');
    img.setAttribute('id', 'main-page-pic');
    img.setAttribute('src', `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2737,w_4032,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/IMG_20190311_070540_ngteek.jpg`);
    img.setAttribute('alt', 'the interior of our donut shop')
    shopDescription.setAttribute('id', 'shop-description');

    slogan.textContent = 'Good Donuts for Good Moments.';
    shopDescription.textContent = 'The Donut Shop lovingly hand crafts unique, artisan donuts with a delightful mix of premium ingredients, creative donut design and affordable prices. Donuts are fun. They should also be truly delicious and ultra fresh. How fresh? We make them several times each day. Treat yourself and experience the best donuts in Wisconsin.';

    tabContent.appendChild(slogan);
    tabContent.appendChild(img);
    tabContent.appendChild(shopDescription);
}

export {mainPage, mainPageContent};