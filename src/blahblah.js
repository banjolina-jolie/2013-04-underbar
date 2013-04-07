$('#header-search-container').after('<input id="alarmTime" value="HH:MM:SS"/>');

$('#header-search-container').after('<button id="btn1">Set Alarm</button>');

var alarmIsSet = false;

var timer;

function playDelayedSong() {
          
	var hms = $("#alarmTime").val();

	var a = hms.split(':');

	var d = new Date();
	d.setHours(a[0]);
	d.setMinutes(a[1]);
	d.setSeconds(a[2]);
	var dMilli = d.getTime();
		
	var rightNow = new Date();
	var rightNowMilli = rightNow.getTime();

	var difference = dMilli - rightNowMilli;
		
	if (difference<0){
		var dayNumber = d.getDate();
		d.setDate(dayNumber+1);
		var dMilliPlusDay = d.getTime();
		difference = dMilliPlusDay - rightNowMilli;
	};

	if(!difference){
		alert("Please re-enter the time in 24 hr HH:MM:SS format");
	}else if(a[0]>23 || a[1]>59 || a[2]>59 || a[0]<0 || a[1]<0 || a[2]<0){
		alert("How bout you input a real time and stop messing with me");
	}else{
		if(!alarmIsSet){
		 	$('#btn1').html('Alarm is Set!');
		 	$('#btn1').css('background-color','red');		 		
		 	alarmIsSet = true;
		 	timer = setTimeout(doSomething, difference);
		 		function doSomething() {
	 	 			$('a#play-pause.player-btn.player-icon.paused').trigger('click');		 						 						 					 			
		 		};
		}else{
			$('#btn1').css('background-color','#FFFFFF');
			$('#btn1').html('Set Alarm');
			alarmIsSet = false;
			clearTimeout(timer);
		};
	};	
};
