
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

        $.getJSON("lists/yarders.json", function(result) {
        	console.log("got data");
            $.each(result, function(owners, field) {
                $.each(field, function(i, passing) {
                        $(".yarders").append("<li class='list-group-item'><img class='yardImage' alt='yard' src='./images/"+passing.image+".jpg'><p><strong>"+passing.location+"</strong></p></li>");
                });
            });
        });

});
