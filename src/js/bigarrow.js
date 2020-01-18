import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-bigarrow')[0],
		  sidenav = document.getElementsByClassName('js-sidenav'),
          hamburger = document.getElementsByClassName('js-hamburger')[0];

    let ww = 0;
    
    


    const init = function() {
        
        const columnRight = document.getElementsByClassName('js-rightColumn'),
        	  columnLeft = document.getElementsByClassName('js-leftColumn');

		const hide = function() {
			for (let i = 0; i < columnRight.length; i++) {
		        columnRight[i].classList.remove('move-right');
	        }
	        
	        for (let i = 0; i < columnLeft.length; i++) {
		        columnLeft[i].classList.remove('move-right');
	        }
	        
            for (let i = 0; i < sidenav.length; i++) {
                sidenav[i].classList.remove('is-visible');
            }

	        el.classList.remove('move-right');
	        hamburger.classList.remove('is-active');
		};
		
		const show = function() {
			for (let i = 0; i < columnRight.length; i++) {
		        columnRight[i].classList.add('move-right');
	        }
	        
	        for (let i = 0; i < columnLeft.length; i++) {
		        columnLeft[i].classList.add('move-right');
	        }
    
            for (let i = 0; i < sidenav.length; i++) {
                sidenav[i].classList.add('is-visible');
            }

	        el.classList.add('move-right');
	        hamburger.classList.add('is-active');
		};


        const checkWindowWidth = function() {
	        ww = window.innerWidth;           
	        
	        if (ww > 500) {
				hide();
	        }
	    };
	    
        
        const action = function(e) {
	        
			if (e.currentTarget.classList.contains('move-right')) {

				hide();
				
			} else {
	        
		        show();
	        }
        };
        
        checkWindowWidth();
        
        window.addEventListener('resize', checkWindowWidth);
        
        el.addEventListener('click', action);
        
        
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
                hide();
            }
        });
    };


    el ? init() : false;

}, false);
