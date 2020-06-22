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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPageLoad */ \"./src/mainPageLoad.js\");\n/* harmony import */ var _menuPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPageLoad */ \"./src/menuPageLoad.js\");\n\n\nObject(_mainPageLoad__WEBPACK_IMPORTED_MODULE_0__[\"mainPage\"])();\n\n    const navElement1 = document.querySelector('#nav-element1');\n\n    navElement1.addEventListener('click', () => {\n        resetTabContent();\n        Object(_menuPageLoad__WEBPACK_IMPORTED_MODULE_1__[\"menuPage\"])();\n    });\n\n\nfunction resetTabContent() {\n    const tabContent = document.querySelector('#tab-content');\n    while (tabContent.childNodes.length > 0) {\n        tabContent.removeChild(tabContent.lastChild);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mainPageLoad.js":
/*!*****************************!*\
  !*** ./src/mainPageLoad.js ***!
  \*****************************/
/*! exports provided: mainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainPage\", function() { return mainPage; });\nconst mainPage = () => {\n\n    const mainContainer = document.querySelector('#content');\n\n    const header = () => {\n        const header = document.createElement('div');\n        header.setAttribute('id', 'header');\n\n        const title = document.createElement('h1');\n        title.textContent = 'nut Shop';\n        // I need to put the picture exactly after the first letter\n        title.insertAdjacentHTML('afterbegin', `D<img src='https://pluspng.com/img-png/kawaii-donut-png-click-on-images-to-enlarge-and-download-643.png' alt='Donut' height='55px'>`)\n\n        mainContainer.appendChild(header);\n        header.appendChild(title);\n    };\n\n    const navBar = () => {\n        const navBar = document.createElement('div');\n        navBar.setAttribute('id', 'nav-bar');\n        mainContainer.appendChild(navBar);\n    };\n\n    const navBarContents = () => {\n        const navBarContainer = document.querySelector('#nav-bar');\n        for (let i = 0; i < 2; i++) {\n            const element = document.createElement('div');\n            element.classList.add('nav-element');\n            element.textContent = 'test1';\n            navBarContainer.appendChild(element);\n        }\n        navBarContainer.firstElementChild.setAttribute('id', 'nav-element1');\n        navBarContainer.lastElementChild.setAttribute('id', 'nav-element2');\n\n        navBarContainer.firstElementChild.textContent = 'Menu';\n        navBarContainer.lastElementChild.textContent = 'Contact';\n    };\n\n    const tabContent = () => {\n        const tabContent = document.createElement('div');\n        tabContent.setAttribute('id', 'tab-content');\n        tabContent.textContent = 'test';\n\n        const img = document.createElement('img');\n        img.setAttribute('id', 'about-pic');\n        img.setAttribute('src', `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2737,w_4032,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/IMG_20190311_070540_ngteek.jpg`);\n        img.setAttribute('height', '300px');\n\n        const aboutText = document.createElement('p');\n        aboutText.textContent = 'Hershey\\'s oldest freestanding restaurant. A local favorite for 83+ years. Featuring our famous DeAngelis spaghetti sauces and our famous Upside Down pizza. Homemade, delicious Italian dishes, featuring seafood, steaks, and pasta. Full pub menu and sandwich selection. Full menu offered all day and late night. Full bar with entertainment on weekends. Home to the stars, cast parties and celebrities from the Hershey Theatre. Conveniently located on Chocolate Avenue, directly across from the Hershey Story Museum.';\n\n        mainContainer.appendChild(tabContent);\n        tabContent.appendChild(img);\n        tabContent.appendChild(aboutText);\n    };\n    \nheader();\nnavBar();\ntabContent();\nnavBarContents();\n};\n\n\n//# sourceURL=webpack:///./src/mainPageLoad.js?");

/***/ }),

/***/ "./src/menuPageLoad.js":
/*!*****************************!*\
  !*** ./src/menuPageLoad.js ***!
  \*****************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nconst menuPage = () => {\n\n    const tabContent = document.querySelector('#tab-content');\n\n    const createMenuContainer = () => {\n        const menuContainer = document.createElement('div');\n        menuContainer.setAttribute('id', 'menu-container');\n        tabContent.appendChild(menuContainer);\n\n        const createMenuItems = () => {\n            while (menuContainer.childNodes.length < 9) {\n                const menuItem = document.createElement('div');\n                menuItem.classList.add('menu-items');\n                menuItem.setAttribute('id',`donut-${menuContainer.childNodes.length + 1}`);\n\n                const img = document.createElement('img');\n                img.setAttribute('src', `https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___banana-protein-donuts-3.jpg`);\n                img.classList.add('items-img');\n\n                menuItem.appendChild(img);\n                menuContainer.appendChild(menuItem);\n            }\n        }\n\n        const createImg = () => {\n            // put src adresses in an array and make a loop assigning each link to a new img created\n        }\n\n        createMenuItems();\n    };\n\n\n\ncreateMenuContainer();\n};\n\n\n//# sourceURL=webpack:///./src/menuPageLoad.js?");

/***/ })

/******/ });