$(document).ready(function(){
	console.log("hello world");


	for (i = 99; i > 0; i--){
		if (i > 1){
			$("ul.song").append('<li class="lyric">' + i + ' bottles of beer on the wall!</li>');
			console.log(i);
		} else {
			$("ul.song").append('<li class="lyric"> 1 bottle of beer on the wall!</li>');
			$("ul.song").append('<li class="lyric"> No bottles of beer on the wall!</li>');
			console.log(1);
		}
	};
});
