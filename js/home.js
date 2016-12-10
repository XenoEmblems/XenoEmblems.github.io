// I want to make a page where you don't have to scroll
console.log("JavaScript on");

$('a').on('click', function(){
	// When something on the navbar is clicked
   var target = $(this).attr('rel');
   // the rel attribute holds the target for which div should open.
   $("#"+target).show().siblings("div").hide();
   // The selected div is then shown and the other divs then hide
   console.log(target + " selected");
   // if (target === 'home' || target === 'resume' || target === 'contact'){
   // 	document.body.style.backgroundColor = "#3B5998";
   // } else {
   // 	document.body.style.backgroundColor = "#ffa500";
   // }
});