var mapState = {


	create: function() {
		nextState = 5; 
		var mapSprite;
		var carrots;
		var p1;

		// setting up the scene
		game.stage.backgroundColor = "#6ec7ff";
		p1 = game.add.text(0, 0, "Select a location:", pStyle);
			p1.boundsAlignV = 'middle';
        	p1.setTextBounds(100, 170, 700, 200);
		game.add.sprite(159, 50, 'title');
		mapSprite = game.add.sprite(-12, 330, 'map');
		carrots = game.add.sprite(86, 600, 'mapCarrots');
			carrots.animations.add('scroll');
			carrots.animations.play('scroll', speed, true);

		// fade effect image 
        black = game.add.sprite(0, 0, 'black');

		// line that controls all the logic :o 
		control.onUp.add(menuSelection, this);

		function menuSelection(pointer) {
			// stops mouseIn & mouseOut events 
			if (control === game.input && !pointer.withinGame) {return;}
			
			// starts each location
			if (carrots.frame === 0) {
				nextState = 0; 
			} else if (carrots.frame === 1) {
				nextState = 1; 
			} else if (carrots.frame === 2) {
				nextState = 2; 
			} else if (carrots.frame === 3) {
				nextState = 3;
			} 
		
		}

	}, 

	update: function() {
		if (nextState === 5) { fadeIn(); }
		else if (nextState === 0) { console.log('0'); fadeOut('icecream'); }
		else if (nextState === 1) { console.log('1'); fadeOut('robot'); }
		else if (nextState === 2) { console.log('2'); fadeOut('character'); }
		else if (nextState === 3) { fadeOut('house'); }
	}

}