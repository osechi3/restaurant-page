const menuPage = () => {

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
                img.setAttribute('src', `https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___banana-protein-donuts-3.jpg`);
                img.classList.add('items-img');

                menuItem.appendChild(img);
                menuContainer.appendChild(menuItem);
            }
        }

        const createImg = () => {
            // put src adresses in an array and make a loop assigning each link to a new img created
        }

        createMenuItems();
    };



createMenuContainer();
};
export {menuPage};