"use strict";

var App = {
  init: function init() {
    $(".button-collapse").sideNav();
    console.log('App initialized.');
    var copyPipBtn = document.querySelector('.js-pipcopybtn');  
    copyPipBtn.addEventListener('click', function(event) {  
        // Select the email link anchor text  
        var pipCommand = document.querySelector('.js-pipcommand');  
        var range = document.createRange();  
        range.selectNode(pipCommand);  
        window.getSelection().addRange(range);  

        try {  
          // Now that we've selected the anchor text, execute the copy command  
          var successful = document.execCommand('copy');  
          var msg = successful ? 'successful' : 'unsuccessful';  
          var tooltip = document.querySelector('.js-pipcopybtn');
          document.querySelector('.material-tooltip > span').innerHTML ='Copied!'
          tooltip.setAttribute('data-tooltip', 'Copied!');
          console.log('Copy pip command was ' + msg);  
        } catch(err) {  
          console.log('Oops, unable to copy');  
        }  

        // Remove the selections - NOTE: Should use   
        // removeRange(range) when it is supported  
        window.getSelection().removeAllRanges();  
    }, false);
    copyPipBtn.addEventListener('mouseleave', function(event) {  
      var tooltip = document.querySelector('.js-pipcopybtn');
      tooltip.setAttribute('data-tooltip', 'Click to copy');
    });

  }
};

module.exports = App
