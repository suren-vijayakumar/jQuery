$(document).ready(function(){
    var clicks=0;
	$("#clickMe").on('click', function(event){
        clicks++
		$(".greenDiv").append(clicks);
		$(".changeColorDiv").append("<button class=changeColor>Change Color</button>");
	   $(".removeDiv").append("<button class=remove>Remove</button>");
          
          
     });

	 var clicks = 0;
    function countClicks(){
     clicks=parseInt(clicks)+parseInt(1);
     var divData=document.getElementById("showCount");
     return clicks;
    }

	var divToggle = false;
	var divAnimating = false;

	$(".greenDiv").on("click", function(){
		if(!divAnimating) {

		if(divToggle){
	        $(this).fadeTo(1000,1, function() {
	        	divAnimating = false;
	        });
	        divToggle = false;
	        divAnimating = true;
		} else {
			$(this).fadeTo(1000,.01, function(){
				divAnimating = false;
			});
	    	 divToggle = true;
	    	 divAnimating = true;
		}

	}

	});

});