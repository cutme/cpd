import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-bigarrow')[0];
    
    const init = function() {
        
        const columnRight = document.getElementsByClassName('js-rightColumn'),
        	  columnLeft = document.getElementsByClassName('js-leftColumn');
        
        const action = function(e) {
	        
			if (e.currentTarget.classList.contains('move-right')) {
				
				for (let i = 0; i < columnRight.length; i++) {
			        columnRight[i].classList.remove('move-right');
		        }
		        
		        for (let i = 0; i < columnLeft.length; i++) {
			        columnLeft[i].classList.remove('move-right');
		        }
		        
		        el.classList.remove('move-right');
				
			} else {
	        
		        for (let i = 0; i < columnRight.length; i++) {
			        columnRight[i].classList.add('move-right');
		        }
		        
		        for (let i = 0; i < columnLeft.length; i++) {
			        columnLeft[i].classList.add('move-right');
		        }
		        
		        el.classList.add('move-right');
	        }
        };
        
        el.addEventListener('click', action);
    };


    el ? init() : false;

}, false);
