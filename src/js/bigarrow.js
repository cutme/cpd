import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-bigarrow')[0];
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
	        
	        el.classList.remove('move-right');
		};
		
		const show = function() {
			for (let i = 0; i < columnRight.length; i++) {
		        columnRight[i].classList.add('move-right');
	        }
	        
	        for (let i = 0; i < columnLeft.length; i++) {
		        columnLeft[i].classList.add('move-right');
	        }
	        
	        el.classList.add('move-right');
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
