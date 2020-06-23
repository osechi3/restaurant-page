const contactPage = () => {

    const tabContent = document.querySelector('#tab-content');

    const title = document.createElement('h1');
    const infoContainer = document.createElement('div');

    title.textContent = 'Contact Us!';
    title.setAttribute('id', 'contact-title');
    infoContainer.setAttribute('id', 'info-container');

    tabContent.appendChild(title);
    tabContent.appendChild(infoContainer);

    const contactPageContent = () => {
        const address = document.createElement('div');
        const email = document.createElement('div');
        const phone = document.createElement('div');
        const contactImg = document.createElement('img');

        address.style.cssText = 'flex-basis: 100%; padding-bottom: 25px;'; // moving the other 2 elements onto the next row
        contactImg.setAttribute('id', 'contact-img');
        contactImg.setAttribute('src', `https://media3.s-nbcnews.com/j/newscms/2019_11/2781946/190311-billy-by-donut-shop-cs-347p_fd4688e43a8514c2fae22ffceeb2e9a1.social_share_1024x768_scale.jpg`);
        contactImg.setAttribute('alt', 'Shop owners (not really)');

        address.innerHTML = `<span style="font-size: 34px;">Address:</span></br> 2977  Johnny Lane, Milwaukee, Wisconsin`;
        email.innerHTML = `<span style="font-size: 34px;">Email:</span></br> donut-shop@gmail.com`;
        phone.innerHTML = `<span style="font-size: 34px;">Phone:</span></br> +09531257688`;

        infoContainer.appendChild(address);
        infoContainer.appendChild(email);
        infoContainer.appendChild(phone);
        infoContainer.appendChild(contactImg);
    }
    contactPageContent();
}
export {contactPage};