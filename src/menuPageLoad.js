const menuPage = () => {

    const donuts = [
        {
            name: 'Rainbow Donut',
            image: '/img/rainbow-donut.jpg',
            description: 'test'
        },
        {
            name: 'Strawberry Donut',
            image: '/img/strawberry-donut.jpg',
            description: 'test'
        },
        {
            name: 'Chocolate Donut',
            image: '/img/chocolate-donut.jpg',
            description: 'test'
        },
        {
            name: 'Double-Bubble Donut',
            image: '/img/double-bubble-donut.jpg',
            description: 'test'
        },
        {
            name: 'Banana Protein Donut',
            image: '/img/banana-protein-donut.jpg',
            description: 'test'
        },
        {
            name: 'Protein Donut',
            image: '/img/protein-donut.jpg', 
            description: 'test'
        },
        {
            name: 'Banana Donut',
            image: '/img/banana-donut.jpg',
            description: 'test'
        },
        {
            name: 'Caramel Donut',
            image: '/img/caramel-donut.jpg',
            description: 'test'
        },
        {
            name: 'Bitten Donut :(',
            image: '/img/bitten-donut.jpg',
            description: 'test'
        },
    ];
        

    const tabContent = document.querySelector('#tab-content');

    const createMenuContainer = () => {
        const menuContainer = document.createElement('div');

        menuContainer.setAttribute('id', 'menu-container');
        tabContent.appendChild(menuContainer);

        const createMenuItems = () => {
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
};
export {menuPage};