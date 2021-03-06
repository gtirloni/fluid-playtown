var startState = {


	create: function() {
		// text 
		var titleFont = 'Londrina Solid';
        var pFont = 'Jua';
		var titleText;
        var titleStyle;
        var p1;
        var p2;
        var pStyle;

        // sprites
        var keyboard;
        var mouse;
        var selection;
        var button;
        var returnKey;
        var spaceBarSprite;
        var twoSwitchSprite; 


        // booleans
        var selectMode = false; // is the select bubble displayed? 
        var mousePressed = false; // was the mouse selected?
        var spacePressed = false; // was the space bar selected?
        var returnPressed = false; // was the return key selected?
        var tabPressed = false; // was the tab key selected?
        var reset = false; // resets selection
        var controlSelected = false; // has the control been selected?
        control = null;
        twoSwitches = false; 

        game.add.sprite(159, 70, 'title');

        pStyle = { 
        	font: pFont, 
        	fill: "#000000", 
        	fontSize: '45px', 
        	wordWrap: true, 
        	wordWrapWidth: 700, 
        	boundsAlignH: 'center', 
        	boundsAlignV: 'top'
        };

        p1 = game.add.text(0, 0, "Select a control!", pStyle);
        p2 = game.add.text(0, 0, 'For two (2) switches, press tab.', pStyle);
        p1.setTextBounds(100, 230, 700, 220);
        p2.setTextBounds(100, 290, 700, 240);

        keyboard = game.add.sprite(-30, 350, 'keyboard');
        keyboard.animations.add('buttons', [0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
        keyboard.animations.play('buttons', 5, true);

        mouse = game.add.sprite(695, 350, 'mouse');
        mouse.animations.add('click', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
        mouse.animations.play('click', 5, true);

        // transparent image to make button
        button = game.add.sprite(0, 0, 'transparent');
        button.inputEnabled = true;

        // fade effect image 
        black = game.add.sprite(0, 0, 'black');

        tab = game.input.keyboard.addKey(Phaser.Keyboard.TAB);
        escape = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // tab scanning for two switch controls 
        tab.onUp.add(scan, this);
        function scan() {
            if (twoSwitchSprite != undefined) {
                twoSwitchSprite.frame = twoSwitchSprite.frame + 1; 
            }
        }
        

 		// controls keyboard input 
        game.input.keyboard.onUpCallback = function() {
        	var key = game.input.keyboard.lastKey;
            if (key === enter) {

	        	if (controlSelected && selectedControl === 0) {
	        		selectedControl = 0;
	        		nextState = true;
	        	}
                if (controlSelected && selectedControl === 3) {
                    if (twoSwitchSprite.frame === 1) {
                        nextState = true;
                    } else {
                        game.state.start('start');
                    }
                }
            	if (selectMode && returnPressed) {
            		// yes
		        	if (anim.frame === 1) {
		        		nextScreen();
		        	}
        			// no
		        	if (anim.frame === 0) {
		        		reset = true;
		        	}
	        	}
	        	if (!selectMode && !returnPressed && !controlSelected)	{
	                selection = game.add.sprite(550, 340, 'selection');
	                selection.animations.add('click', [1, 0]);
	                keyboard.animations.stop(true, '0');
	                mouse.animations.stop(true, '0');
	                anim = selection.animations.play('click', 1, true);
	                returnPressed = true;
	                selectMode = true;
            	}
            	if (reset) {
		        	resetSelection();
	        	}
            } 


            if (key === space) {
            	if (controlSelected && selectedControl === 1) {
            		selectedControl = 1; 
	        		nextState = true;
	        	}

            	if (selectMode && spacePressed) {
            		// yes
		        	if (anim.frame === 1) {
		        		nextScreen();
		        	}
        			// no
		        	if (anim.frame === 0) {
		        		reset = true;
		        	}
	        	}

	        	if (!selectMode && !spacePressed && !controlSelected) {
	            	selection = game.add.sprite(280, 430, 'selection');
	                selection.animations.add('click', [1, 0]);
	                keyboard.animations.stop(true, '0');
	                mouse.animations.stop(true, '0');
	                anim = selection.animations.play('click', 1, true);
	                spacePressed = true;
	                selectMode = true;
            	}
            	if (reset) {
		        	resetSelection();
	        	}
            }

            if (key === tab) {
                if (controlSelected && selectedControl === 3) {
                    selectedControl = 3;
                }
                if (selectMode && tabPressed) {
                    // yes
                    if (anim.frame === 1) {
                        nextScreen();
                    }
                    // no
                    if (anim.frame === 0) {
                        reset = true;
                    }
                }
                if (!selectMode && !tabPressed && !controlSelected)  {
                    selection = game.add.sprite(0, 290, 'selection');
                    selection.animations.add('click', [1, 0]);
                    keyboard.animations.stop(true, '0');
                    mouse.animations.stop(true, '0');
                    anim = selection.animations.play('click', 1, true);
                    tabPressed = true;
                    selectMode = true;
                }
                if (reset) {
                    resetSelection();
                }
            } 
        }

        button.events.onInputUp.add(showSelection, game);

        // shows yes/no popup for mouse 
        function showSelection() {
        	if (controlSelected && selectedControl === 2) {
        			selectedControl = 2; 
	        		nextState = true;
	        	}
        	if (selectMode && mousePressed) {
        		// yes
	        	if (anim.frame === 1) {
	        		nextScreen();
	        		controlSelected = true;
	        	}
	        	// no
	        	if (anim.frame === 0) {
	        		reset = true;
	        	}
	        }
	        if (!selectMode && !mousePressed && !controlSelected) {
	        	selection = game.add.sprite(700, 230, 'selection');
	            selection.animations.add('click', [1, 0]);
	            keyboard.animations.stop(true, '0');
	            mouse.animations.stop(true, '0');
	            anim = selection.animations.play('click', 1, true);
	            mousePressed = true;
	            selectMode = true;
	        }
	        if (reset) {
	        	resetSelection();
	        }
	        
    	}
 
 		// resets selected control 
    	function resetSelection() {
    		selection.destroy();
        	keyboard.animations.play('buttons', 5, true);
        	mouse.animations.play('click', 5, true);
        	selectMode = false;
        	mousePressed = false;
        	spacePressed = false;
        	returnPressed = false;
            tabPressed = false;
        	reset = false;
    	}

    	// moves to screen confirming control 
    	function nextScreen() {
            p1.setTextBounds(100, 240, 700, 220);
            p2.destroy();
    		selection.destroy();
            if (returnPressed) {
                selectedControl = 0;
                mouse.destroy();
                keyboard.destroy();
                p1.setText('Great! Your control is the return key. Press the enter/return key to continue.', true);
                returnKey = game.add.sprite(300, 400, 'return');
                returnKey.animations.add('press', [0, 0, 0, 0, 1]);
                returnKey.animations.play('press', 5, true);
            }
            if (spacePressed) {
                selectedControl = 1;
                mouse.destroy();
                keyboard.destroy();
                p1.setText('Great! Your control is the space bar. Press the space bar to continue.', true);
                spaceBarSprite = game.add.sprite(25, 430, 'spaceBar');
                spaceBarSprite.animations.add('press', [0, 0, 0, 0, 1]);
                spaceBarSprite.animations.play('press', 5, true);
            }
    		if (mousePressed) {
    			selectedControl = 2;
    			keyboard.destroy();
    			p1.setText('Great! Your control is the mouse. Click the mouse to continue.', true);
    			mouse.x = 360;
    			mouse.y = 350;
    			mouse.animations.add('click', [0, 0, 0, 0, 1]);
    			mouse.animations.play('click', 5, true);
    		} 
            if (tabPressed) {
                selectedControl = 3;
                keyboard.destroy();
                mouse.destroy();
                p1.setText('Great! Use the tab key to scan and the enter key to select.', true);
                twoSwitchSprite = game.add.sprite(240, 400, 'twoSwitch');
            }
    		controlSelected = true;
            black.bringToTop();
    	}

	}, 

    update: function() {
        if (nextState) {
            fadeOut('menu');
        } else {
            fadeIn();
        }
    },

	shutdown: function() {
		game.input.keyboard.onUpCallback = null;
	}

}