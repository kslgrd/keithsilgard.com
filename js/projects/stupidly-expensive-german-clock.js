$(document).ready(function() {
	
	var word_list = {
		it: { row: 1, cols: [1, 2] },
		is: { row: 1, cols: [4, 5] },
		time: { row: 1, cols: [8, 11] },
		
		a: { row: 2, cols: [1, 1] },
		quarter: { row: 2, cols: [3, 9] },
		
		twenty: { row: 3, cols: [1, 6] },
		five: { row: 3, cols: [7, 10] },
		
		half: { row: 4, cols: [1, 4] },
		ten: { row: 4, cols: [6, 8] },
		to: { row: 4, cols: [10, 11] },
		
		past: { row: 5, cols: [1, 4] },
		nine: { row: 5, cols: [8, 11] },
		
		one: { row: 6, cols: [1, 3] },
		six: { row: 6, cols: [4, 6] },
		three: { row: 6, cols: [7, 11] },
		
		four: { row: 7, cols: [1, 4] },
		five_2: { row: 7, cols: [5, 8] },
		two: { row: 7, cols: [9, 11] },
		
		eight: { row: 8, cols: [1, 5] },
		eleven: { row: 8, cols: [6, 11] },
		
		seven: { row: 9, cols: [1, 5] },
		twelve: { row: 9, cols: [6, 11] },
		
		ten_2: { row: 10, cols: [1, 3] },
		oclock: { row: 10, cols: [6, 11] }
	};
	
	var clear_highlights = function () {
		$('#clock li').removeClass('active');
	};
	
	var highlight = function (words) {
		$.each(words, function(index, word) {
			var row = word.row;
			for (var i = word.cols[0]; i <= word.cols[1]; i++) {
				$('#letter-' + row + '_' + i).addClass('active');
			}
		});
	};
	
	var update_time = function (now) {
		var words = [word_list.it, word_list.is];
		
		var hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
		var minute = now.getMinutes();
		
		if (minute > 4) {
			if (minute < 35) {
				words.push(word_list.past);
			} else {
				words.push(word_list.to);
				++hour;
			}

			if (minute <= 9 || minute >= 55) {
				words.push(word_list.five);
			} else if (minute <= 14 || minute >= 50) {
				words.push(word_list.ten);
			} else if (minute <= 19 || minute >= 45) {
				words.push(word_list.a);
				words.push(word_list.quarter);
			} else if (minute <= 24 || minute >= 40) {
				words.push(word_list.twenty);
			} else if (minute <= 29 || minute >= 35) {
				words.push(word_list.twenty);
				words.push(word_list.five);
			} else if (minute <= 34 || minute >= 30) {
				words.push(word_list.half);
			}
		} else {
			words.push(word_list.oclock);
		}
		
		switch(hour) {
			case 1: words.push(word_list.one); break;
			case 2: words.push(word_list.two); break;
			case 3: words.push(word_list.three); break;
			case 4: words.push(word_list.four); break;
			case 5: words.push(word_list.five_2); break;
			case 6: words.push(word_list.six); break;
			case 7: words.push(word_list.seven); break;
			case 8: words.push(word_list.eight); break;
			case 9: words.push(word_list.nine); break;
			case 10: words.push(word_list.ten_2); break;
			case 11: words.push(word_list.eleven); break;
			case 0: case 12: words.push(word_list.twelve); break;
		}
		
		var remainder = minute % 5;

		if (4 == remainder) $('#four').addClass('active');
		if (3 <= remainder) $('#three').addClass('active');
		if (2 <= remainder) $('#two').addClass('active');
		if (1 <= remainder) $('#one').addClass('active');
		if (0 == remainder) $('#one, #two, #three, #four').removeClass('active');
		
		clear_highlights();
		highlight(words);
	};
	

	var now = new Date();
	update_time(now);
	now = null;
	
	var interval = setInterval(function() {
		var now = new Date();
		update_time(now);
	}, 1000);
});