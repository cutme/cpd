const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;


document.addEventListener('DOMContentLoaded',function() {

	const menu = document.getElementById('sideMenu');
    
/*
	const menu = document.querySelector('nav');
	const menuToggle = document.querySelector('.hamburger');
	
	menuToggle.addEventListener('click', (e) => {
		e.preventDefault();
		
		if ( menu.classList.contains('open') ) {
			menu.classList.remove('open');
		} else  {
			menu.classList.add('open');
		}
	});
	
	
	
*/
	
	const init = function() {
	
		//const mainMenu = document.getElementById('menu');
		const mainMenuToggle = document.querySelectorAll('.js-openMenu');
		
		const hideNav = function() {
			document.getElementsByClassName('item-active')[0].classList.remove('item-active');
			document.getElementsByClassName('is-negative')[0].classList.remove('is-negative');
			
			const leftColumn = document.getElementsByClassName('js-leftColumn');
			
			console.log(leftColumn);
			
			for (let i = 0; i < leftColumn.length; i++) {
				leftColumn[i].removeAttribute('style');
			}
			
			enableBodyScroll();
		};
		
		const openNav = function(arg) {
			
			let position = cutme.Helpers.thisIndex(arg);
				position = position * 100,
				leftColumn = arg.parentNode.parentNode.parentNode.parentNode;
			
			disableBodyScroll();


			// Check which menu clicked
			
			const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

			if (leftColumn.classList.contains('o-container__left--floating')) {
				
				if (window_pos < window.innerHeight) {
					cutme.Helpers.scrollTo(window.innerHeight, .5, 0);
				}
				
			} else {
				cutme.Helpers.scrollTo(0, .5, 0);
			}
			
			// Remove active class for menu item
			let active = leftColumn.getElementsByClassName('item-active')[0];
			
			if(active) {
				active.classList.remove('item-active');	
			}
			
			// Set active class
			leftColumn.classList.add('is-negative');
			arg.classList.add('item-active');
			
			// Set color in left column
			
			let bgColor = arg.getAttribute('data-color');
			
			const style = getComputedStyle(arg);
			leftColumn.style.backgroundColor = style.color;
			
		}
		
		mainMenuToggle.forEach(function (item, idx) {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				
				openNav(e.currentTarget);
				

				
/*
				const menuContainer = document.getElementsByClassName('menuContainer')[0];
				
				console.log(position);
				
				menuContainer.style.transform  = "translate(0, -"+position+"vh)";
				
				
				if ( mainMenu.classList.contains('open') ) {
					mainMenu.classList.remove('open');
				} else  {
					mainMenu.classList.add('open');
				}
*/
			});
		});
		
		
		 // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideNav();
            }
        });
	};
	
	
/*
	
	const openMenuOpened = document.querySelectorAll('.openMenuOpened');
	
	openMenuOpened.forEach(function (item, idx) {
	item.addEventListener('click', (e) => {
	e.preventDefault();
	var position = item.getAttribute('data-position');
	position = position * 100;
	
	const menuContainer = document.getElementById('menuContainer');
	console.log(position);
	menuContainer.classList.add('scrolled');
	menuContainer.style.transform  = "translate(0, -"+position+"vh)";
	setTimeout(
	function() {
	menuContainer.classList.remove('scrolled'); 
	}, 400);
	
	
	});
	});
	
	
	
	const mainMenugoBack = document.querySelectorAll('.goBack');
	mainMenugoBack.forEach(function (item, idx) {
	item.addEventListener('click', (e) => {
	e.preventDefault();
	if ( mainMenu.classList.contains('open') ) {
	mainMenu.classList.remove('open');
	} else  {
	mainMenu.classList.add('open');
	}
	});
	});

    
*/
    
    
    menu ? init() :false;
    

}, false);
