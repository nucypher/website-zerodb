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
          console.log('Copy pip command was ' + msg);  
        } catch(err) {  
          console.log('Oops, unable to copy');  
        }  

        // Remove the selections - NOTE: Should use   
        // removeRange(range) when it is supported  
        window.getSelection().removeAllRanges();  
    });

    // console
    (function () {
      var Console;
      Console = function () {
        function Console() {
          this.input = $('.console-input');
          this.pos = 0;
          this.prompt_text = '';
          this.init();
        }
        Console.prototype.init = function () {
          return this._focus();
        };
        Console.prototype._focus = function () {
          return this.input.focus();
        };
        return Console;
      }();
      $(function () {
        return window.Console = new Console();
      });
    }.call(this))
  }
};

module.exports = App
