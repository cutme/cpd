const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

/*
    const el = document.getElementsByClassName('js-nav')[0];
          nav = document.getElementsByClassName('js-children'),
          menu = document.getElementsByClassName('js-menu')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0],
          parent = el.getElementsByTagName('li'),
          searchForm = document.getElementById('searchform'),
          social = document.getElementById('social');
*/
          
    const sidebar = document.getElementsByClassName('js-sidebar')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0];
          
    const columnRight = document.getElementsByClassName('js-rightColumn'),
          sideMenu = document.getElementById('sideMenu'),
          sideMenuSections = document.getElementById('sideMenuSections'),
          closeSideMenu = sideMenu.getElementsByClassName('js-closeNav');
          

    let cww;

    const init = function() {

        let wh = 0, ww = 0;
        
        const checkWindowWidth = function() {
	        ww = window.innerWidth;           
	        
	        if (ww > 500) {
				hideCols();
	        }
	    };
	    
	    const hideCols = function() {
			for (let i = 0; i < columnRight.length; i++) {
		        columnRight[i].classList.remove('move-right');
	        }

		};
		
		const showCols = function() {
			for (let i = 0; i < columnRight.length; i++) {
		        columnRight[i].classList.add('move-right');
	        }

		};
		
		const hideSideMenu = function() {
			
			if (document.getElementsByClassName('item-active')[0]) {
				document.getElementsByClassName('item-active')[0].classList.remove('item-active');
			}
			
			if (document.getElementsByClassName('is-negative')[0]) {
			    document.getElementsByClassName('is-negative')[0].classList.remove('is-negative');
			}
			
			//const leftColumn = document.getElementsByClassName('js-leftColumn');
			


			sideMenuSections.classList.remove('is-visible');	
				
			
			setTimeout(function() {
				sideMenu.classList.remove('is-visible');
				sideMenuSections.classList.remove('is-transition');
			}, 500);			

			for (let k = 0; k < close.length; k++) {
				if (closeSideMenu[k].classList.contains('is-active')) {
					closeSideMenu[k].classList.add('is-hidden');
				}
			}

			enableBodyScroll();		
		};
/*

        const checkWindowHeight = function() {
            wh = window.innerHeight;           
            
            if (wh <= (searchForm.clientHeight + menu.clientHeight + social.clientHeight)) {
				el.classList.add('is-block');
            } else {
	            el.classList.remove('is-block');
            }
        };
        
*/
        const hideMenu = function() {

            //enableBodyScroll(el);
            //el.classList.remove('is-visible');
            
/*
            for (let i = 0; i < sidenav.length; i++) {
                sidenav[i].classList.remove('is-visible');
            }
*/
  
            sidebar.classList.remove('is-visible');          
            hamburger.classList.remove('is-active');
            hideCols();
            hideSideMenu();

            
            window.removeEventListener('resize', cww);
        };

        const showMenu = function(e) {
            
            checkWindowWidth();
            
            if (e.currentTarget.classList.contains('is-active')) {
            
                hideMenu();            
            
            } else {
                
                sidebar.classList.add('is-visible');
                hamburger.classList.add('is-active');
            
                //disableBodyScroll(el);
                //el.classList.add('is-visible');
                
/*
                for (let i = 0; i < sidenav.length; i++) {
                    sidenav[i].classList.add('is-visible');
                }
                
                hamburger.classList.add('is-active');
                
                if (ww <= 500) {
	                showCols();
                }
*/
            }
            
            //cww = window.addEventListener('resize', checkWindowHeight);            
        };        

                

        hamburger.addEventListener('click', showMenu);


        //const parent = menu.getElementsByTagName('li');
/*

        const submenu = function(e) {
        
            if (ww <= 1024) {
                let item = e.currentTarget;
               
                e.stopPropagation();
                
                if (item.classList.contains('menu-item-has-children')) {
                    if (item.classList.contains('is-active')) {
                        item.classList.remove('is-active');
                    } else {
                        item.classList.add('is-active');
                    }
                } else {
                    let url = item.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                    hideMenu();
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }
*/

/*

        for (let j = 0; j < parent.length; j++) {
            parent[j].addEventListener('click', submenu);
        }
*/


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
                hideMenu();
                hideCols();
            }
        });

    };

    sidebar ? init() : false;

}, false);