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

/***/ "./src/addAllEvents.js":
/*!*****************************!*\
  !*** ./src/addAllEvents.js ***!
  \*****************************/
/*! exports provided: addAllEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAllEvents\", function() { return addAllEvents; });\nconst menu = document.querySelector(\"#menu\")\r\nconst menuButton = document.querySelector(\"#menuButton\")\r\nconst welcome = document.querySelector(\"#welcome\")\r\nconst welcomeButton = document.querySelector(\"#welcomeButton\")\r\nconst contact = document.querySelector(\"#contact\")\r\nconst contactButton = document.querySelector(\"#contactButton\")\r\nconst changeDisplay = (button, displayed, hidden1, hidden2) => {\r\n    button.addEventListener(\"click\", () => {\r\n        hidden1.style.display = \"none\"\r\n        hidden2.style.display = \"none\"\r\n        if (displayed === welcome) {\r\n            displayed.style.display = \"block\"\r\n        }\r\n        else\r\n            displayed.style.display = \"flex\"\r\n\r\n    })\r\n}\r\nconst changeButtonColor = (mainbutton, button1, button2) => {\r\n    mainbutton.addEventListener(\"click\", () => {\r\n        mainbutton.style.backgroundColor = \"#ec0ca5\"\r\n        button1.style.backgroundColor = \"#f2ec7c\"\r\n        button2.style.backgroundColor = \"#f2ec7c\"\r\n    })\r\n\r\n}\r\nconst addAllEvents = () => {\r\n    changeDisplay(menuButton, menu, welcome, contact)\r\n    changeButtonColor(menuButton, welcomeButton, contactButton)\r\n    changeDisplay(welcomeButton, welcome, menu, contact)\r\n    changeButtonColor(welcomeButton, menuButton, contactButton)\r\n    changeDisplay(contactButton, contact, welcome, menu)\r\n    changeButtonColor(contactButton, menuButton, welcomeButton)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/addAllEvents.js?");

/***/ }),

/***/ "./src/createCard.js":
/*!***************************!*\
  !*** ./src/createCard.js ***!
  \***************************/
/*! exports provided: createCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\nconst createCard = (name, imageLink, info) => {\r\n    const menu = document.querySelector(\"#menu\")\r\n    const div = document.createElement(\"div\")\r\n    div.classList.add(\"cake\")\r\n    const title = document.createElement(\"h1\")\r\n    const image = document.createElement(\"img\")\r\n    const text = document.createElement(\"p\")\r\n    title.innerHTML = name\r\n    image.src = imageLink\r\n    text.innerHTML = info\r\n    div.appendChild(title)\r\n    div.appendChild(image)\r\n    div.appendChild(text)\r\n    menu.appendChild(div)\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/createCard.js?");

/***/ }),

/***/ "./src/createContact.js":
/*!******************************!*\
  !*** ./src/createContact.js ***!
  \******************************/
/*! exports provided: createContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContact\", function() { return createContact; });\nconst contact = document.querySelector(\"#contact\")\r\nconst createInput = (name, type = \"text\") => {\r\n    const label = document.createElement(\"label\")\r\n    const input = document.createElement(\"input\")\r\n    const div = document.createElement(\"div\")\r\n    label.style.name = name\r\n    label.innerHTML = name[0].toUpperCase() + name.slice(1) + \":\"\r\n    input.style.type = type\r\n    div.appendChild(label)\r\n    div.appendChild(input)\r\n    contact.appendChild(div)\r\n}\r\nconst createTextarea = (name, type = \"text\") => {\r\n    const label = document.createElement(\"label\")\r\n    const textarea = document.createElement(\"textarea\")\r\n    const div = document.createElement(\"div\")\r\n    label.style.name = name\r\n    label.innerHTML = name[0].toUpperCase() + name.slice(1) + \":\"\r\n    textarea.style.type = type\r\n    div.appendChild(label)\r\n    div.appendChild(textarea)\r\n    contact.appendChild(div)\r\n\r\n}\r\nconst createContact = () => {\r\n    createInput(\"name\")\r\n    createInput(\"e-mail\", \"email\")\r\n    createTextarea(\"message\")\r\n    const button = document.createElement(\"button\")\r\n    button.innerHTML = \"Submit\"\r\n    contact.appendChild(button)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/createContact.js?");

/***/ }),

/***/ "./src/createMenu.js":
/*!***************************!*\
  !*** ./src/createMenu.js ***!
  \***************************/
/*! exports provided: createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\n/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard.js */ \"./src/createCard.js\");\n\r\nconst createMenu = () => {\r\n  Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"createCard\"])(\"Angel Food Cake\", \"./Images/angelFoodCake.jpg\",\r\n    `Angel food cake, or \r\n    angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, \r\n    such as cream of tartar, is commonly added. It differs from other cakes because it uses no \r\n    butter. Its aerated texture comes from whipped egg white. Angel food cake originated in the\r\n     United States and first became popular in the late 19th century. It gained\r\n\r\n     its unique reputation along with its name due to its light and fluffy texture.`)\r\n  Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"createCard\"])(\"Avocado Cake\", \"./Images/avocadoCake.jpg\",\r\n    `Avocado cake is a cake prepared using avocado as a primary ingredient, \r\n     with other typical cake ingredients. The avocados can be mashed, and may be used as \r\n      ingredient in cake batter, in cake toppings and alone atop a cake. Cake variations \r\n      include raw avocado cake, avocado brownies and avocado cheesecake. Raw, uncooked \r\n      versions of avocado cake can be high in vitamin E and essential fatty acids, which are \r\n      derived from avocado.Avocado-based cake toppings include avocado fool and \r\n      avocado crazy. `)\r\n\r\n  Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"createCard\"])(\"Dadar Gulung\", \"./Images/dadarCake.jpg\",\r\n    `Dadar gulung is one of the popular snacks in Indonesia, especially in Java. \r\n      The pancake usually has a green colour, which is acquired from daun suji or pandan leaves.\r\n       It is a green-coloured folded omelette or pancake made of rice flour, filled with grated\r\n        coconut and palm sugar. It is commonly found in Indonesia, Malaysia and Brunei. The snack\r\n         is commonly found in traditional marketplaces and Warung in Indonesia, especially in \r\n         Java, Bali and other regions. In Malaysia and Brunei, it is known as kuih gulung, kuih \r\n         ketayap and kuih lenggang. `)\r\n  Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"createCard\"])(\"Battenberg\", \"./Images/battenbergCake.jpg\",\r\n    `Battenberg or Battenburg is a light\r\n     sponge cake held together with jam. \r\n    The cake is covered in marzipan and, when cut in cross section, displays a distinctive \r\n    two-by-two check pattern alternately coloured pink and yellow. \r\n    Charles Nevin wrote in The Independent: “Battenberg cake is exemplarily British. The first \r\n    cake was baked in 1884 to celebrate Prince Louis of Battenberg marrying Princess Victoria, \r\n    Queen Victoria’s granddaughter and Prince Philip’s grandmother.” Food historian Ivan Day \r\n    refuted the royal connection, and states the simplification of the four-panelled cake occurred when “large industrial bakers such as Lyons” got in on the battenberg game – “I suppose a four-panel \r\n    battenburg [a common 19th-century spelling] is much easier to make on a production line”. `)\r\n  Object(_createCard_js__WEBPACK_IMPORTED_MODULE_0__[\"createCard\"])(\"Cheesecake\", \"./Images/cheeseCake.jpg\",\r\n    `Cheesecake is a sweet dessert consisting \r\n    of one or more layers. The main, \r\n    and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or \r\n        ricotta), eggs, and sugar. If there is a bottom layer, it often consists of a crust or \r\n        base made from crushed cookies (or digestive biscuits), \r\n    graham crackers, pastry, or sometimes sponge cake. It may be baked or unbaked \r\n    (usually refrigerated).\r\n\r\n    Cheesecake is usually sweetened with sugar and may be flavored in many different ways. \r\n    It may be flavored by adding vanilla, spices, lemon, chocolate, pumpkin, or other flavors \r\n    to the cheese layer. Additional flavors and visual appeal may be added by topping the \r\n    finished pie with fruit, whipped cream, nuts, cookies, fruit sauce, chocolate syrup, or \r\n    other toppings. `)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/createMenu.js?");

/***/ }),

/***/ "./src/createWelcome.js":
/*!******************************!*\
  !*** ./src/createWelcome.js ***!
  \******************************/
/*! exports provided: createWelcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWelcome\", function() { return createWelcome; });\nconst createWelcome = () => {\r\n    const welcome = document.querySelector(\"#welcome\")\r\n    const text = document.createElement(\"p\")\r\n    const h1 = document.createElement(\"h1\")\r\n    h1.innerHTML = \"Best Bakery in Town \"\r\n    text.innerHTML = `Sweet Cake Shop & Bakery has created stunning, creative \r\n    wedding cakes;luscious cookies, cupcakes, pastries and quick breads; and delightfully \r\n    customized confections for all of life’s celebrations.\r\n\r\n    We’ve served generations of town residents – in fact, we can declare \r\n    that if you’ve been to any festivity in town, you’ve surely experienced \r\n    the specialty desserts that we’re proud to call our own.\r\n    See us today to start collaborating on a one-of-a-kind dessert for \r\n    your wedding, graduation, birthday or other party. Or, just stop by for\r\n     an exceptional little surprise sure to please your friends and family – simply for \r\n     no reason other to say ‘I love you.’\r\n    We serve the town metro area or anywhere statewide. And, we’ll deliver – \r\n    wherever you are in World!`\r\n    welcome.appendChild(h1)\r\n    welcome.appendChild(text)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/createWelcome.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createWelcome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWelcome.js */ \"./src/createWelcome.js\");\n/* harmony import */ var _createMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenu.js */ \"./src/createMenu.js\");\n/* harmony import */ var _createContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createContact */ \"./src/createContact.js\");\n/* harmony import */ var _addAllEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addAllEvents */ \"./src/addAllEvents.js\");\n\r\n\r\n\r\n\r\nObject(_createWelcome_js__WEBPACK_IMPORTED_MODULE_0__[\"createWelcome\"])()\r\nObject(_createMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"createMenu\"])()\r\nObject(_createContact__WEBPACK_IMPORTED_MODULE_2__[\"createContact\"])()\r\nObject(_addAllEvents__WEBPACK_IMPORTED_MODULE_3__[\"addAllEvents\"])()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });