window.onload = function () {
    "use strict";
    
    var menuItems = new Array($("#menuItem1"), $("#menuItem2"), $("#menuItem3"), $("#menuItem4"), $("#menuItem5"), $("#menuItem6"));
    var sub = $("#subMenu");
    
    sub.toggle();
    
    menuItems[0].hover(function(){sub.fadeIn(); sub.css("background", "gray");}, function(){sub.fadeOut();});
}