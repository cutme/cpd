const { detect } = require('detect-browser');
const browser = detect();
import Blazy from 'blazy';

document.addEventListener('DOMContentLoaded',function() {

    if (browser) {
        document.documentElement.classList.add(browser.name);
    }

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.body.removeAttribute('style');
        document.body.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);

        
        // Anims on inview
        window.animsInit()   
        
        // Side Menu
        window.sideMenu();
        
        if (document.getElementsByClassName('b-lazy').length > 0) {

          window.bLazy = new Blazy({
            success: function success(el) {
              var item = el.parentNode;
              item.classList.add('is-visible');
              setTimeout(function () {
                el.classList.add('faded-in');
              }, 1);
            }
          });
        }
    };
    
    
    window.addEventListener('load', init);

}, false);