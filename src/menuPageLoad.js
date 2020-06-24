const menuPage = () => {

    const donuts = [
        {
            name: 'Rainbow Donut',
            image: 'img/rainbow-donut.jpg',
            price: '$6',
            description: 'These colourful tasty treats are great for adults and children alike!'
        },
        {
            name: 'Strawberry Donut',
            image: 'img/strawberry-donut.jpg',
            price: '$5',
            description: 'Oven baked and brimming with bright, sweet strawberry flavor.'
        },
        {
            name: 'Chocolate Donut',
            image: 'img/chocolate-donut.jpg',
            price: '$3',
            description: 'Perfect for breakfast or a sweet treat.'
        },
        {
            name: 'Double-Bubble Donut',
            image: 'img/double-bubble-donut.jpg',
            price: '$7',
            description: 'Just remember to eat the donut BEFORE the bubblegum.'
        },
        {
            name: 'Banana Protein Donut',
            image: 'img/banana-protein-donut.jpg',
            price: '$5',
            description: 'These are healthy, protein-packed and topped with a delicious chocolate glaze.'
        },
        {
            name: 'Protein Donut',
            image: 'img/protein-donut.jpg', 
            price: '$4',
            description: 'These are perfect for people who have a serious sweet tooth but want to eat healthy.'
        },
        {
            name: 'Banana Donut',
            image: 'img/banana-donut.jpg',
            price: '$4',
            description: 'These have all the things you love about banana bread in a freshly baked donut.'
        },
        {
            name: 'Caramel Donut',
            image: 'img/caramel-donut.jpg',
            price: '$5',
            description: 'These are a must-try! They are tender and yummy.'
        },
        {
            name: 'Bitten Donut :(',
            image: 'img/bitten-donut.jpg',
            price: '$1',
            description: 'I shouldn\'t be for sale but here we go'
        },
    ];
        

    const tabContent = document.querySelector('#tab-content');

    const createMenuContainer = () => {
        const menuHeader = document.createElement('div');
        const menuContainer = document.createElement('div');

        menuHeader.setAttribute('id', 'menu-header')
        menuHeader.textContent = 'Menu';
        menuContainer.setAttribute('id', 'menu-container');

        tabContent.appendChild(menuHeader);
        tabContent.appendChild(menuContainer);

        const createMenuItems = () => {

            // Creating 9 containers with images of donuts inside
            while (menuContainer.childNodes.length < 9) {
                
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-items');
                menuItem.setAttribute('data-order',`${menuContainer.childNodes.length}`);

                const img = document.createElement('img');
                img.setAttribute('src', `${donuts[menuContainer.childNodes.length].image}`);
                img.classList.add('items-img');

                menuItem.appendChild(img);
                menuContainer.appendChild(menuItem);
            }
        }
        createMenuItems();
    };
    createMenuContainer();

    // Showing info about each item in the menu
    const menuItems = document.querySelectorAll('.menu-items');
    menuItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            
            item.firstChild.classList.add('item-hover');
            
            const text1 = document.createElement('div');
            text1.textContent = donuts[item.dataset.order].name;
            text1.classList.add('item-info');
            text1.style.cssText = 'top: 15%; left: 50%; transform: translate(-50%, -50%); border-bottom: 1px solid';
            item.appendChild(text1);

            const text2 = document.createElement('div');
            text2.textContent = donuts[item.dataset.order].price;
            text2.classList.add('item-info');
            text2.style.cssText = 'top: 45%; left: 50%; transform: translate(-50%, -50%);';
            item.appendChild(text2);

            const text3 = document.createElement('div');
            text3.textContent = donuts[item.dataset.order].description;
            text3.classList.add('item-info');
            text3.style.cssText = 'top: 75%; left: 50%; transform: translate(-50%, -50%);';
            item.appendChild(text3);
        });

        item.addEventListener('mouseleave', () => {
            item.firstChild.classList.remove('item-hover');
            while (item.childNodes.length > 1 ) {
                item.removeChild(item.lastChild);
            }
        });
    });

};
export {menuPage};