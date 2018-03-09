console.log("router js was imported")
    window.addEventListener("hashchange", function() {
            
        if (window.location.hash == "#dash") {
            displayDashView();
        }

    });
