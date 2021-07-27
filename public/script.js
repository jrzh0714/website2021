$(".i").click(function() {
    $(".p").removeClass("presenttab");
    $(".s").removeClass("presenttab");
    $(".i").addClass("presenttab");
    
    $(".projects").removeClass("present");
    $(".skills").removeClass("present");
    $(".intro").addClass("present");
    $(".intro").css({"margin-left":"0","display":"inline-block"});
    $(".projects").css({"margin-left":"600px","display":"none"});
    $(".skills").css({"margin-left":"1200px","display":"none"});


});

$(".p").click(function() {
	$(".i").removeClass("presenttab");
    $(".s").removeClass("presenttab");
    $(".p").addClass("presenttab");
    
    $(".intro").removeClass("present");
    $(".skills").removeClass("present");
    $(".projects").addClass("present");
    $(".projects").css({"margin-left":"0","display":"inline-block"});
    $(".intro").css({"margin-left":"-600px","display":"none"});
    $(".skills").css({"margin-left":"600px","display":"none"});

  });

$(".s").click(function() {
	$(".i").removeClass("presenttab");
    $(".p").removeClass("presenttab");
    $(".s").addClass("presenttab");
    
    $(".intro").removeClass("present");
    $(".projects").removeClass("present");
    $(".skills").addClass("present");
    $(".skills").css({"margin-left":"0","display":"inline-block"});
    $(".intro").css({"margin-left":"-1200px","display":"none"});
    $(".projects").css({"margin-left":"-600px","display":"none"});

});
