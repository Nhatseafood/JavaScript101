console.log("router js was imported")
var $window = $(window);
    $window.on("hashchange", function() {
       console.log("hashchange detected")     
        if (location.hash == "#dash") {
            displayDashView();
        }

    });
