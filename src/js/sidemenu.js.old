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
	
	window.sideMenu = function() {
	
		//const mainMenu = document.getElementById('menu');
		const mainMenuToggle = document.querySelectorAll('.js-openMenu'),
			  sideMenu = document.getElementById('sideMenu'),
			  sideMenuSections = document.getElementById('sideMenuSections'),
			  close = sideMenu.getElementsByClassName('js-closeNav');
		
		const hideNav = function() {
			
			if (document.getElementsByClassName('item-active')[0]) {
				document.getElementsByClassName('item-active')[0].classList.remove('item-active');
			}
			
			if (document.getElementsByClassName('is-negative')[0]) {
			    document.getElementsByClassName('is-negative')[0].classList.remove('is-negative');
			}
			
			const leftColumn = document.getElementsByClassName('js-leftColumn');
			
			for (let i = 0; i < leftColumn.length; i++) {
				leftColumn[i].removeAttribute('style');
			}

			sideMenuSections.classList.remove('is-visible');	
				
			
			setTimeout(function() {
				sideMenu.classList.remove('is-visible');
				sideMenuSections.classList.remove('is-transition');
			}, 500);			

			for (let k = 0; k < close.length; k++) {
				if (close[k].classList.contains('is-active')) {
					close[k].classList.add('is-hidden');
				}
			}

			enableBodyScroll();		
		};
		
		
		// Prepare side menu colors

		const navItems = document.getElementsByClassName('c-welcome')[0].getElementsByClassName('js-openMenu');

		for (let j = 0; j < navItems.length; j++) {
			
			let primaryColor = getComputedStyle(navItems[j]);

			document.getElementsByClassName('js-section')[j].style.backgroundColor = primaryColor.color;
		}
		
		const openNav = function(arg) {
    		
    		console.log(arg);
			
			let menuitemsbefore = document.getElementsByClassName('js-sidenav')[0].getElementsByClassName('menu-item-type-post_type').length;
			console.log('menuitemsbefore: ' + menuitemsbefore);
			
			let position = cutme.Helpers.thisIndex(arg) - menuitemsbefore;
				position = position * 100,
				leftColumn = arg.parentNode.parentNode.parentNode.parentNode;
				
				console.log('this index: ' + cutme.Helpers.thisIndex(arg));
			
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
			
			// Set active class and theme background in left column
			leftColumn.classList.add('is-negative');
			arg.classList.add('item-active');
			
			const style = getComputedStyle(arg);
			leftColumn.style.backgroundColor = style.color;
			
			
			
			// Open menu in right
			sideMenu.classList.add('is-visible');
			
			if (!sideMenuSections.classList.contains('is-transition')) {
				
				sideMenuSections.style.transform  = "translate3d(100%, -"+position+"vh, 0)";
				sideMenuSections.classList.add('is-transition');
				
				
				setTimeout(function() {
    				//console.log('a position: ' + position);
					sideMenuSections.classList.add('is-visible');
					sideMenuSections.style.transform  = "translate3d(0, -"+position+"vh, 0)";
					//console.log(sideMenuSections.style);
					//console.log( "translate3d(0, -"+position+"vh, 0)");
				}, 1);
				
			} else {

				setTimeout(function() {
    				//console.log('b position: ' + position);
					sideMenuSections.style.transform  = "translate3d(0, -"+position+"vh, 0)";
					//sideMenuSections.classList.add('is-visible');
				}, 10);
			}
			
			setTimeout(function() {
				for (let k = 0; k < close.length; k++) {
					if (close[k].classList.contains('is-active')) {
						close[k].classList.remove('is-hidden');
					}
				}	
			}, 500);
		};
		
		mainMenuToggle.forEach(function (item, idx) {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				
				openNav(e.currentTarget);
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

        for (let k = 0; k < close.length; k++) {
			close[k].addEventListener('click', hideNav);
        }
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

    

}, false);
