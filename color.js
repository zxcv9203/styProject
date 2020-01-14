	
var set = {
		
		BodyColor: function(color, fontcolor){
			$('body').css('backgroundColor', color);
			$('body').css('color', fontcolor);
		},
		ColorA: function(color){			
			$('a').css('color', color);
		},
		LineColor: function(color){		
			$('ol').css('border-color',color);
			$('h1').css('border-color',color);
		}
}

	function ch_mode(self){
		
			if(self.value === 'black mode'){
				set.BodyColor('black','white');
				set.ColorA('white');
				set.LineColor('white');
				self.value = 'white mode';
			}		
			else{
				set.BodyColor('white','black');
				set.ColorA('black');
				set.LineColor('black');
				self.value = 'black mode';	
	}	
	}