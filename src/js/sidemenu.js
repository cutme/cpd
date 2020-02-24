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
	
	window.sideMenu = function () {

    var mainMenuToggle = document.querySelectorAll('.js-openMenu'),
        sidebar = document.getElementsByClassName('js-sidebar')[0],
        sideMenu = document.getElementById('sideMenu'),
        sideMenuSections = document.getElementById('sideMenuSections'),
        close = sideMenu.getElementsByClassName('js-closeNav'),
        submenu = document.getElementsByClassName('js-submenu');

    var hideNav = function hideNav() {
      if (document.getElementsByClassName('item-active')[0]) {
        document.getElementsByClassName('item-active')[0].classList.remove('item-active');
      }

      if (document.getElementsByClassName('is-negative')[0]) {
        document.getElementsByClassName('is-negative')[0].classList.remove('is-negative');
      }

      sidebar.removeAttribute('style');
      sideMenuSections.classList.remove('is-visible');
      setTimeout(function () {
        sideMenu.classList.remove('is-visible');
        sideMenuSections.classList.remove('is-transition');
      }, 500);

      for (var k = 0; k < close.length; k++) {
        if (close[k].classList.contains('is-active')) {
          close[k].classList.add('is-hidden');
        }
      }

      enableBodyScroll();
    }; // Prepare side menu colors


    var navItems = document.getElementsByClassName('js-openMenu');

    for (var j = 0; j < navItems.length; j++) {
      var primaryColor = getComputedStyle(navItems[j]);
      document.getElementsByClassName('js-section')[j].style.backgroundColor = primaryColor.color;
    }

    var openNav = function openNav(arg) {
      //var menuitemsbefore = document.getElementsByClassName('js-sidenav')[0].getElementsByClassName('main-menu').length + 1; //console.log('menuitemsbefore: ' + menuitemsbefore);

      var position = cutme.Helpers.thisIndex(arg);
      position = position * 100, //sidebar = arg.parentNode.parentNode.parentNode.parentNode;
      //console.log('this index: ' + cutme.Helpers.thisIndex(arg));
      disableBodyScroll(); // Check which menu clicked

      var window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
      cutme.Helpers.scrollTo(0, .5, 0); // Remove active class for menu item

      var active = sidebar.getElementsByClassName('item-active')[0];

      if (active) {
        active.classList.remove('item-active');
      } // Set active class and theme background in left column
      //sidebar.classList.add('is-negative');


      arg.classList.add('item-active');
      var style = getComputedStyle(arg);
      sidebar.style.backgroundColor = style.color; // Open menu in right

      sideMenu.classList.add('is-visible');

      if (!sideMenuSections.classList.contains('is-transition')) {
        sideMenuSections.style.transform = "translate3d(100%, -" + position + "vh, 0)";
        sideMenuSections.classList.add('is-transition');
        setTimeout(function () {
          sideMenuSections.classList.add('is-visible');
          sideMenuSections.style.transform = "translate3d(0, -" + position + "vh, 0)";
          setTimeout(function () {
            window.bLazy.revalidate();
            console.log('revalidate 1');
          }, 300);
        }, 1);
      } else {
        setTimeout(function () {
          sideMenuSections.style.transform = "translate3d(0, -" + position + "vh, 0)";
          setTimeout(function () {
            window.bLazy.revalidate();
            console.log('revalidate 2');
          }, 300);
        }, 10);
      }

      setTimeout(function () {
        for (var k = 0; k < close.length; k++) {
          if (close[k].classList.contains('is-active')) {
            close[k].classList.remove('is-hidden');
          }
        }
      }, 500);
    };

    mainMenuToggle.forEach(function (item, idx) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        openNav(e.currentTarget);
      });
    }); // Hide menu on ESC

    document.addEventListener('keydown', function (evt) {
      // evt = evt || window.event;
      var isEscape = false;

      if ("key" in evt) {
        isEscape = evt.key == "Escape" || evt.key == "Esc";
      } else {
        isEscape = evt.keyCode == 27;
      }

      if (isEscape) {
        hideNav();
      }
    });

    for (var k = 0; k < close.length; k++) {
      close[k].addEventListener('click', hideNav);
    } // Submenu 


    var openSubmenu = function openSubmenu(e) {
        
        if (e.currentTarget.classList.contains('is-active')) {
            e.currentTarget.classList.remove('is-active');
        } else {
            e.currentTarget.classList.add('is-active');
        }
      
      e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
    };

    for (let k = 0; k < submenu.length; k ++) {
        console.log(submenu[k]);
        submenu[k].addEventListener('click', openSubmenu); 
    }

     
    for (let z = 0; z < submenu.length; z ++) {
        var submenuLink = submenu[z].getElementsByTagName('ul')[0].getElementsByTagName('li');
        
        var openLink = function(e) {
            e.stopPropagation();
        };
        
        for (var x = 0; x < submenuLink.length; x++) {
            submenuLink[x].addEventListener('click', openLink);
        }
    }
  };
	
	
    

}, false);
