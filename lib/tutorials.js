$(document).ready(function() {
    $("#tutorials").html(data);
});


jQuery.get('changecolor.txt', function(data) {
    var changecolor = data;
});
