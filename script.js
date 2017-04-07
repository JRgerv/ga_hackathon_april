
$(document).ready(function() {
    $("#dogs").click(function() {
        $.getJSON("lists/owners.json", function(result) {
            $.each(result, function(owners, field) {
                $.each(field, function(i, passing) {
                        $(".owners").append("<li class='list-group-item'>"+passing.name + " lives at " + passing.location + " and has a "+passing.dogSize+" size dog.</li>");
                });
            });
        });
    });

    $("#yards").click(function() {
    	console.log("click");
        $.getJSON("lists/yarders.json", function(result) {
        	console.log("got data");
            $.each(result, function(owners, field) {
                $.each(field, function(i, passing) {
                        $(".yarders").append("<li id='yarder"+passing.id+"'class='list-group-item'>"+passing.name + " lives at " + passing.location +" ("+passing.latLong+")"+ " and has a "+passing.yardSize+" size yard.</li>");
                });
            });
        });
    });

});
