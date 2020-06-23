/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contactPageLoad.js":
/*!********************************!*\
  !*** ./src/contactPageLoad.js ***!
  \********************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\nconst contactPage = () => {\n\n    const tabContent = document.querySelector('#tab-content');\n\n    const title = document.createElement('h1');\n    const infoContainer = document.createElement('div');\n\n    title.textContent = 'Contact Us!';\n    title.setAttribute('id', 'contact-title');\n    infoContainer.setAttribute('id', 'info-container');\n\n    tabContent.appendChild(title);\n    tabContent.appendChild(infoContainer);\n\n    const contactPageContent = () => {\n        const address = document.createElement('div');\n        const email = document.createElement('div');\n        const phone = document.createElement('div');\n        const contactImg = document.createElement('img');\n\n        address.style.cssText = 'flex-basis: 100%; padding-bottom: 25px;'; // moving the other 2 elements onto the next row\n        contactImg.setAttribute('id', 'contact-img');\n        contactImg.setAttribute('src', `https://media3.s-nbcnews.com/j/newscms/2019_11/2781946/190311-billy-by-donut-shop-cs-347p_fd4688e43a8514c2fae22ffceeb2e9a1.social_share_1024x768_scale.jpg`);\n        contactImg.setAttribute('alt', 'Shop owners (not really)');\n\n        address.innerHTML = `<span style=\"font-size: 34px;\">Adress:</span></br> 2977  Johnny Lane, Milwaukee, Wisconsin`;\n        email.innerHTML = `<span style=\"font-size: 34px;\">Email:</span></br> donut-shop@gmail.com`;\n        phone.innerHTML = `<span style=\"font-size: 34px;\">Phone:</span></br> +09531257688`;\n\n        infoContainer.appendChild(address);\n        infoContainer.appendChild(email);\n        infoContainer.appendChild(phone);\n        infoContainer.appendChild(contactImg);\n    }\n    contactPageContent();\n}\n\n\n//# sourceURL=webpack:///./src/contactPageLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPageLoad */ \"./src/mainPageLoad.js\");\n/* harmony import */ var _menuPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPageLoad */ \"./src/menuPageLoad.js\");\n/* harmony import */ var _contactPageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPageLoad */ \"./src/contactPageLoad.js\");\n\n\n\nObject(_mainPageLoad__WEBPACK_IMPORTED_MODULE_0__[\"mainPage\"])();\n\nconst navElement1 = document.querySelector('#nav-element1');\nnavElement1.addEventListener('click', () => {\n    resetTabContent();\n    Object(_menuPageLoad__WEBPACK_IMPORTED_MODULE_1__[\"menuPage\"])();\n});\n\nconst header = document.querySelector('#header');\nheader.addEventListener('click', () => {\n    resetTabContent();\n    Object(_mainPageLoad__WEBPACK_IMPORTED_MODULE_0__[\"mainPageContent\"])();\n})\n\nconst navElement2 = document.querySelector('#nav-element2');\nnavElement2.addEventListener('click', () => {\n    resetTabContent();\n    Object(_contactPageLoad__WEBPACK_IMPORTED_MODULE_2__[\"contactPage\"])();\n});\n\nfunction resetTabContent() {\n    const tabContent = document.querySelector('#tab-content');\n    while (tabContent.childNodes.length > 0) {\n        tabContent.removeChild(tabContent.lastChild);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mainPageLoad.js":
/*!*****************************!*\
  !*** ./src/mainPageLoad.js ***!
  \*****************************/
/*! exports provided: mainPage, mainPageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainPage\", function() { return mainPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainPageContent\", function() { return mainPageContent; });\nconst mainPage = () => {\n\n    const mainContainer = document.querySelector('#content');\n\n    const header = () => {\n        const header = document.createElement('div');\n        header.setAttribute('id', 'header');\n\n        const title = document.createElement('h1');\n        title.textContent = 'nut Shop';\n        // I need to put the picture exactly after the first letter\n        title.insertAdjacentHTML('afterbegin', `D<img src='https://pluspng.com/img-png/kawaii-donut-png-click-on-images-to-enlarge-and-download-643.png' alt='Donut' height='55px'>`)\n\n        mainContainer.appendChild(header);\n        header.appendChild(title);\n    };\n\n    const navBar = () => {\n        const navBar = document.createElement('div');\n        navBar.setAttribute('id', 'nav-bar');\n        mainContainer.appendChild(navBar);\n    };\n\n    const navBarContents = () => {\n        const navBarContainer = document.querySelector('#nav-bar');\n        for (let i = 0; i < 2; i++) {\n            const element = document.createElement('div');\n            element.classList.add('nav-element');\n            element.textContent = 'test1';\n            navBarContainer.appendChild(element);\n        }\n        navBarContainer.firstElementChild.setAttribute('id', 'nav-element1');\n        navBarContainer.lastElementChild.setAttribute('id', 'nav-element2');\n\n        navBarContainer.firstElementChild.textContent = 'Menu';\n        navBarContainer.lastElementChild.textContent = 'Contact';\n    };\n\n    const tabContent = () => {\n        const tabContent = document.createElement('div');\n        tabContent.setAttribute('id', 'tab-content');\n        mainContainer.appendChild(tabContent);\n    };\n    \nheader();\nnavBar();\ntabContent();\nmainPageContent();\nnavBarContents();\n};\n\nconst mainPageContent = () => {\n    const tabContent = document.querySelector('#tab-content');\n\n    const img = document.createElement('img');\n    img.setAttribute('id', 'about-pic');\n    img.setAttribute('src', `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2737,w_4032,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/IMG_20190311_070540_ngteek.jpg`);\n    img.setAttribute('height', '300px');\n\n    const aboutText = document.createElement('p');\n    aboutText.textContent = 'Hershey\\'s oldest freestanding restaurant. A local favorite for 83+ years. Featuring our famous DeAngelis spaghetti sauces and our famous Upside Down pizza. Homemade, delicious Italian dishes, featuring seafood, steaks, and pasta. Full pub menu and sandwich selection. Full menu offered all day and late night. Full bar with entertainment on weekends. Home to the stars, cast parties and celebrities from the Hershey Theatre. Conveniently located on Chocolate Avenue, directly across from the Hershey Story Museum.';\n\n    tabContent.appendChild(img);\n    tabContent.appendChild(aboutText);\n}\n\n\n\n//# sourceURL=webpack:///./src/mainPageLoad.js?");

/***/ }),

/***/ "./src/menuPageLoad.js":
/*!*****************************!*\
  !*** ./src/menuPageLoad.js ***!
  \*****************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nconst menuPage = () => {\n\n    const donuts = [\n        {\n            name: 'Rainbow Donut',\n            image: '/img/rainbow-donut.jpg',\n            price: '$6',\n            description: 'These colourful tasty treats are great for adults and children alike!'\n        },\n        {\n            name: 'Strawberry Donut',\n            image: '/img/strawberry-donut.jpg',\n            price: '$5',\n            description: 'Oven baked and brimming with bright, sweet strawberry flavor.'\n        },\n        {\n            name: 'Chocolate Donut',\n            image: '/img/chocolate-donut.jpg',\n            price: '$3',\n            description: 'Perfect for breakfast or a sweet treat.'\n        },\n        {\n            name: 'Double-Bubble Donut',\n            image: '/img/double-bubble-donut.jpg',\n            price: '$7',\n            description: 'Just remember to eat the donut BEFORE the bubblegum.'\n        },\n        {\n            name: 'Banana Protein Donut',\n            image: '/img/banana-protein-donut.jpg',\n            price: '$5',\n            description: 'These are healthy, protein-packed and topped with a delicious chocolate glaze.'\n        },\n        {\n            name: 'Protein Donut',\n            image: '/img/protein-donut.jpg', \n            price: '$4',\n            description: 'These are perfect for people who have a serious sweet tooth but want to eat healthy.'\n        },\n        {\n            name: 'Banana Donut',\n            image: '/img/banana-donut.jpg',\n            price: '$4',\n            description: 'These have all the things you love about banana bread in a freshly baked donut.'\n        },\n        {\n            name: 'Caramel Donut',\n            image: '/img/caramel-donut.jpg',\n            price: '$5',\n            description: 'These are a must-try! They are tender and yummy.'\n        },\n        {\n            name: 'Bitten Donut :(',\n            image: '/img/bitten-donut.jpg',\n            price: '$1',\n            description: 'I shouldn\\'t be for sale but here we go'\n        },\n    ];\n        \n\n    const tabContent = document.querySelector('#tab-content');\n\n    const createMenuContainer = () => {\n        const menuContainer = document.createElement('div');\n\n        menuContainer.setAttribute('id', 'menu-container');\n        tabContent.appendChild(menuContainer);\n\n        const createMenuItems = () => {\n            while (menuContainer.childNodes.length < 9) {\n                \n                const menuItem = document.createElement('div');\n                menuItem.classList.add('menu-items');\n                menuItem.setAttribute('data-order',`${menuContainer.childNodes.length}`);\n\n                const img = document.createElement('img');\n                img.setAttribute('src', `${donuts[menuContainer.childNodes.length].image}`);\n                img.classList.add('items-img');\n\n                menuItem.appendChild(img);\n                menuContainer.appendChild(menuItem);\n            }\n        }\n        createMenuItems();\n    };\n    createMenuContainer();\n\n    // Showing info about each item in the menu\n    const menuItems = document.querySelectorAll('.menu-items');\n    menuItems.forEach((item) => {\n        item.addEventListener('mouseenter', () => {\n            \n            item.firstChild.classList.add('item-hover');\n            \n            const text1 = document.createElement('div');\n            text1.textContent = donuts[item.dataset.order].name;\n            text1.classList.add('item-info');\n            text1.style.cssText = 'top: 15%; left: 50%; transform: translate(-50%, -50%); border-bottom: 1px solid';\n            item.appendChild(text1);\n\n            const text2 = document.createElement('div');\n            text2.textContent = donuts[item.dataset.order].price;\n            text2.classList.add('item-info');\n            text2.style.cssText = 'top: 45%; left: 50%; transform: translate(-50%, -50%);';\n            item.appendChild(text2);\n\n            const text3 = document.createElement('div');\n            text3.textContent = donuts[item.dataset.order].description;\n            text3.classList.add('item-info');\n            text3.style.cssText = 'top: 75%; left: 50%; transform: translate(-50%, -50%);';\n            item.appendChild(text3);\n        });\n\n        item.addEventListener('mouseleave', () => {\n            item.firstChild.classList.remove('item-hover');\n            while (item.childNodes.length > 1 ) {\n                item.removeChild(item.lastChild);\n            }\n        });\n    });\n\n};\n\n\n//# sourceURL=webpack:///./src/menuPageLoad.js?");

/***/ })

/******/ });