import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const blog = document.getElementById('blogCarousel'),
    	  home = document.getElementById('homeCarousel'),
    	  improve = document.getElementById('improveCarousel'),
     	  references = document.getElementById('referencesCarousel');

	const blogCarousel = function() {

        const glide = new Glide(blog, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 40,
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };

    const homeCarousel = function() {

        const glide = new Glide(home, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 0
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };
    
    const improveCarousel = function() {

        const glide = new Glide(improve, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 40,
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };
    
    
    const referencesCarousel = function() {

        const glide = new Glide(references, {
            type: 'carousel',
            animationDuration: 1000,
            autoplay: false,
            hoverpause: false,
            gap: 40,
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
    };


	blog ? blogCarousel() : false;
    home ? homeCarousel() : false;
    improve ? improveCarousel() : false;
    references ? referencesCarousel() : false;

}, false);
