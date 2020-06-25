var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
            

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, 425, 'DarkSlateGrey');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
           var redplant4 = draw.bitmap('img/redplanet4.png');
           redplant4.x = 595;
           redplant4.y = 65;
           redplant4.scaleX = .65;
           redplant4.scaleY = .65;
           background.addChild(redplant4);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
           var city1 = draw.bitmap('img/city1.png');
           city1.x = 0;
           city1.y = 45;
           city1.scaleX = 2;
           city1.scaleY = 2;
           background.addChild(city1); 
            
           var city1 = draw.bitmap('img/city1.png');
           city1.x = 300;
           city1.y = 45;
           city1.scaleX = 2;
           city1.scaleY = 2;
           background.addChild(city1);
           
            // TODO 4: Part 1 - Add a tree
           var deadtree2 = draw.bitmap('img/deadtree2.png');
           deadtree2.x = 425;
           deadtree2.y = 225;
           deadtree2.scaleX = .75;
           deadtree2.scaleY = .75;
           background.addChild(deadtree2); 
            
           var deadtree2 = draw.bitmap('img/deadtree2.png');
           deadtree2.x = 125;
           deadtree2.y = 240;
           deadtree2.scaleX = .65;
           deadtree2.scaleY = .65;
           background.addChild(deadtree2); 
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
