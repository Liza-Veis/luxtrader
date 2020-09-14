// @include("files/regular.js", {});
let userIcon = document.querySelector(".user-header__icon");
let userMenu = document.querySelector(".user-header__menu");
userIcon.addEventListener("click", function (e) {
  userMenu.classList.toggle("_active");
});
document.addEventListener("click", function (e) {
  if (!e.target.closest(".user-header")) {
    userMenu.classList.remove("_active");
  }
});
;
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector("body").classList.add("ie");
}
if (isMobile.any()) {
  document.querySelector("body").classList.add("_touch");
}
/*
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
*/
function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img") && ibg[i].querySelector("img").getAttribute("src") != null) {
        ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
}
ibg();

if (document.querySelector(".wrapper")) {
  document.querySelector(".wrapper").classList.add("_loaded");
}

let unlock = true;

//=================
//ActionsOnHash
// if (location.hash) {
// 	const hsh = location.hash.replace('#', '');
// 	if (document.querySelector('.popup_' + hsh)) {
// 		popup_open(hsh);
// 	} else if (document.querySelector('div.' + hsh)) {
// 		_goto(document.querySelector('.' + hsh), 500, '');
// 	}
// }
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
  let delay = 500;
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}
function menu_close() {
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector("body");
  if (body.classList.contains("_lock")) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      body.classList.remove("_lock");
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    }
    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    body.classList.add("_lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
//=================

// LettersAnimation
// let title = document.querySelectorAll('._letter-animation');
// if (title) {
// 	for (let index = 0; index < title.length; index++) {
// 		let el = title[index];
// 		let txt = el.innerHTML;
// 		let txt_words = txt.replace('  ', ' ').split(' ');
// 		let new_title = '';
// 		for (let index = 0; index < txt_words.length; index++) {
// 			let txt_word = txt_words[index];
// 			let len = txt_word.length;
// 			new_title = new_title + '<p>';
// 			for (let index = 0; index < len; index++) {
// 				let it = txt_word.substr(index, 1);
// 				if (it == ' ') {
// 					it = '&nbsp;';
// 				}
// 				new_title = new_title + '<span>' + it + '</span>';
// 			}
// 			el.innerHTML = new_title;
// 			new_title = new_title + '&nbsp;</p>';
// 		}
// 	}
// }
//=================
//Tabs
// let tabs = document.querySelectorAll("._tabs");
// for (let index = 0; index < tabs.length; index++) {
// 	let tab = tabs[index];
// 	let tabs_items = tab.querySelectorAll("._tabs-item");
// 	let tabs_blocks = tab.querySelectorAll("._tabs-block");
// 	for (let index = 0; index < tabs_items.length; index++) {
// 		let tabs_item = tabs_items[index];
// 		tabs_item.addEventListener("click", function (e) {
// 			for (let index = 0; index < tabs_items.length; index++) {
// 				let tabs_item = tabs_items[index];
// 				tabs_item.classList.remove('_active');
// 				tabs_blocks[index].classList.remove('_active');
// 			}
// 			tabs_item.classList.add('_active');
// 			tabs_blocks[index].classList.add('_active');
// 			e.preventDefault();
// 		});
// 	}
// }
//=================
//Spollers
// let spollers = document.querySelectorAll("._spoller");
// if (spollers.length > 0) {
// 	for (let index = 0; index < spollers.length; index++) {
// 		const spoller = spollers[index];
// 		spoller.addEventListener("click", function (e) {
// 			if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
// 				return false;
// 			}
// 			if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
// 				return false;
// 			}
// 			if (spoller.closest('._spollers').classList.contains('_one')) {
// 				let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
// 				for (let i = 0; i < curent_spollers.length; i++) {
// 					let el = curent_spollers[i];
// 					if (el != spoller) {
// 						el.classList.remove('_active');
// 						_slideUp(el.nextElementSibling);
// 					}
// 				}
// 			}
// 			spoller.classList.toggle('_active');
// 			_slideToggle(spoller.nextElementSibling);
// 		});
// 	}
// }
//=================
//Gallery
// let gallery = document.querySelectorAll('._gallery');
// if (gallery) {
// 	gallery_init();
// }
// function gallery_init() {
// 	for (let index = 0; index < gallery.length; index++) {
// 		const el = gallery[index];
// 		lightGallery(el, {
// 			counter: false,
// 			selector: 'a',
// 			download: false
// 		});
// 	}
// }
//=================
//SearchInList
// function search_in_list(input) {
// 	let ul = input.parentNode.querySelector('ul')
// 	let li = ul.querySelectorAll('li');
// 	let filter = input.value.toUpperCase();

// 	for (i = 0; i < li.length; i++) {
// 		let el = li[i];
// 		let item = el;
// 		txtValue = item.textContent || item.innerText;
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			el.style.display = "";
// 		} else {
// 			el.style.display = "none";
// 		}
// 	}
// }
//=================
//DigiFormat
// function digi(str) {
// 	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
// 	return r;
// }
//=================
//DiGiAnimate
// function digi_animate(digi_animate) {
// 	if (digi_animate.length > 0) {
// 		for (let index = 0; index < digi_animate.length; index++) {
// 			const el = digi_animate[index];
// 			const el_to = parseInt(el.innerHTML.replace(' ', ''));
// 			if (!el.classList.contains('_done')) {
// 				digi_animate_value(el, 0, el_to, 1500);
// 			}
// 		}
// 	}
// }
// function digi_animate_value(el, start, end, duration) {
// 	var obj = el;
// 	var range = end - start;
// 	// no timer shorter than 50ms (not really visible any way)
// 	var minTimer = 50;
// 	// calc step time to show all interediate values
// 	var stepTime = Math.abs(Math.floor(duration / range));

// 	// never go below minTimer
// 	stepTime = Math.max(stepTime, minTimer);

// 	// get current time and calculate desired end time
// 	var startTime = new Date().getTime();
// 	var endTime = startTime + duration;
// 	var timer;

// 	function run() {
// 		var now = new Date().getTime();
// 		var remaining = Math.max((endTime - now) / duration, 0);
// 		var value = Math.round(end - (remaining * range));
// 		obj.innerHTML = digi(value);
// 		if (value == end) {
// 			clearInterval(timer);
// 		}
// 	}

// 	timer = setInterval(run, stepTime);
// 	run();

// 	el.classList.add('_done');
// }
//=================
//Popups
// let popup_link = document.querySelectorAll('._popup-link');
// let popups = document.querySelectorAll('.popup');
// for (let index = 0; index < popup_link.length; index++) {
// 	const el = popup_link[index];
// 	el.addEventListener('click', function (e) {
// 		if (unlock) {
// 			let item = el.getAttribute('href').replace('#', '');
// 			let video = el.getAttribute('data-video');
// 			popup_open(item, video);
// 		}
// 		e.preventDefault();
// 	})
// }
// for (let index = 0; index < popups.length; index++) {
// 	const popup = popups[index];
// 	popup.addEventListener("click", function (e) {
// 		if (!e.target.closest('.popup__body')) {
// 			popup_close(e.target.closest('.popup'));
// 		}
// 	});
// }
// function popup_open(item, video = '') {
// 	let activePopup = document.querySelectorAll('.popup._active');
// 	if (activePopup.length > 0) {
// 		popup_close('', false);
// 	}
// 	let curent_popup = document.querySelector('.popup_' + item);
// 	if (curent_popup && unlock) {
// 		if (video != '' && video != null) {
// 			let popup_video = document.querySelector('.popup_video');
// 			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// 		}
// 		if (!document.querySelector('.menu__body._active')) {
// 			body_lock_add(500);
// 		}
// 		curent_popup.classList.add('_active');
// 		history.pushState('', '', '#' + item);
// 	}
// }
// function popup_close(item, bodyUnlock = true) {
// 	if (unlock) {
// 		if (!item) {
// 			for (let index = 0; index < popups.length; index++) {
// 				const popup = popups[index];
// 				let video = popup.querySelector('.popup__video');
// 				if (video) {
// 					video.innerHTML = '';
// 				}
// 				popup.classList.remove('_active');
// 			}
// 		} else {
// 			let video = item.querySelector('.popup__video');
// 			if (video) {
// 				video.innerHTML = '';
// 			}
// 			item.classList.remove('_active');
// 		}
// 		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
// 			body_lock_remove(500);
// 		}
// 		history.pushState('', '', window.location.href.split('#')[0]);
// 	}
// }
// let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
// if (popup_close_icon) {
// 	for (let index = 0; index < popup_close_icon.length; index++) {
// 		const el = popup_close_icon[index];
// 		el.addEventListener('click', function () {
// 			popup_close(el.closest('.popup'));
// 		})
// 	}
// }
// document.addEventListener('keydown', function (e) {
// 	if (e.which == 27) {
// 		popup_close();
// 	}
// });
//=================
//SlideToggle
// let _slideUp = (target, duration = 500) => {
// 	target.style.transitionProperty = 'height, margin, padding';
// 	target.style.transitionDuration = duration + 'ms';
// 	target.style.height = target.offsetHeight + 'px';
// 	target.offsetHeight;
// 	target.style.overflow = 'hidden';
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	window.setTimeout(() => {
// 		target.style.display = 'none';
// 		target.style.removeProperty('height');
// 		target.style.removeProperty('padding-top');
// 		target.style.removeProperty('padding-bottom');
// 		target.style.removeProperty('margin-top');
// 		target.style.removeProperty('margin-bottom');
// 		target.style.removeProperty('overflow');
// 		target.style.removeProperty('transition-duration');
// 		target.style.removeProperty('transition-property');
// 		target.classList.remove('_slide');
// 	}, duration);
// }
// let _slideDown = (target, duration = 500) => {
// 	target.style.removeProperty('display');
// 	let display = window.getComputedStyle(target).display;
// 	if (display === 'none')
// 		display = 'block';

// 	target.style.display = display;
// 	let height = target.offsetHeight;
// 	target.style.overflow = 'hidden';
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	target.offsetHeight;
// 	target.style.transitionProperty = "height, margin, padding";
// 	target.style.transitionDuration = duration + 'ms';
// 	target.style.height = height + 'px';
// 	target.style.removeProperty('padding-top');
// 	target.style.removeProperty('padding-bottom');
// 	target.style.removeProperty('margin-top');
// 	target.style.removeProperty('margin-bottom');
// 	window.setTimeout(() => {
// 		target.style.removeProperty('height');
// 		target.style.removeProperty('overflow');
// 		target.style.removeProperty('transition-duration');
// 		target.style.removeProperty('transition-property');
// 		target.classList.remove('_slide');
// 	}, duration);
// }
// let _slideToggle = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		if (window.getComputedStyle(target).display === 'none') {
// 			return _slideDown(target, duration);
// 		} else {
// 			return _slideUp(target, duration);
// 		}
// 	}
// }
//========================================
//Wrap
// function _wrap(el, wrapper) {
//   el.parentNode.insertBefore(wrapper, el);
//   wrapper.appendChild(el);
// }
//========================================
//RemoveClasses
// function _removeClasses(el, class_name) {
// 	for (var i = 0; i < el.length; i++) {
// 		el[i].classList.remove(class_name);
// 	}
// }
//========================================
//IsHidden
// function _is_hidden(el) {
// 	return (el.offsetParent === null)
// }
//========================================
//Animate
// function animate({ timing, draw, duration }) {
//   let start = performance.now();
//   requestAnimationFrame(function animate(time) {
//     // timeFraction изменяется от 0 до 1
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;

//     // вычисление текущего состояния анимации
//     let progress = timing(timeFraction);

//     draw(progress); // отрисовать её

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }
//   });
// }
// function makeEaseOut(timing) {
//   return function (timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   };
// }
// function makeEaseInOut(timing) {
//   return function (timeFraction) {
//     if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
//     else return (2 - timing(2 * (1 - timeFraction))) / 2;
//   };
// }
// function quad(timeFraction) {
//   return Math.pow(timeFraction, 2);
// }
// function circ(timeFraction) {
//   return 1 - Math.sin(Math.acos(timeFraction));
// }

/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();
;
//BildSlider
let sliders = document.querySelectorAll("._swiper");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-bild")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
    if (slider.classList.contains("_gallery")) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let main_slider_ = new Swiper(".main-slider__body", {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: ".control-main-slider__arrow_next",
    prevEl: ".control-main-slider__arrow_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
;
//  @include("files/scroll.js", {});
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll("[data-da]");
  let daElementsArray = [];
  let daMatchMedia = [];
  //Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute("data-da");
      if (daMove != "") {
        const daArray = daMove.split(",");
        const daPlace = daArray[1] ? daArray[1].trim() : "last";
        const daBreakpoint = daArray[2] ? daArray[2].trim() : "767";
        const daType = daArray[3] === "min" ? daArray[3].trim() : "max";
        const daDestination = document.querySelector("." + daArray[0].trim());
        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute("data-da-index", number);
          //Заполняем массив первоначальных позиций
          originalPositions[number] = {
            parent: daElement.parentNode,
            index: indexInParent(daElement),
          };
          //Заполняем массив элементов
          daElementsArray[number] = {
            element: daElement,
            destination: document.querySelector("." + daArray[0].trim()),
            place: daPlace,
            breakpoint: daBreakpoint,
            type: daType,
          };
          number++;
        }
      }
    }
    dynamicAdaptSort(daElementsArray);

    //Создаем события в точке брейкпоинта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = el.type;

      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  }
  //Основная функция
  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];
          if (daPlace === "first") {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === "last") {
            actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
          }
          daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }
    //customAdapt();
  }

  //Вызов основной функции
  dynamicAdapt();

  //Функция возврата на место
  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute("data-da-index");
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace["parent"];
    const indexPlace = originalPlace["index"];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  }
  //Функция получения индекса внутри родителя
  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  }
  //Функция получения массива индексов элементов внутри родителя
  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];
    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];
      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute("data-da") == null) {
          childrenArray.push(i);
        }
      }
    }
    return childrenArray;
  }
  //Сортировка объекта
  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  //Дополнительные сценарии адаптации
  function customAdapt() {
    //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();
;
