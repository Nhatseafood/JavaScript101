
(function(){ 
    var form = document.getElementById('login');       // Get form element
  
    form.addEventListener("submit", function(e){            // When user submits form
      e.preventDefault();                              // Stop it being sent
    //   var elements = this.elements;                    // Get all form elements
    //   var firstName = elements.firstname.value; 
    //   var lastName= elements.lastname.value;
    //   var email= elements.email.value;         // Select username entered


    //   var msg      = 'Welcome ' + firstName;            // Create welcome message
    //   document.getElementById('main').textContent = msg; // Write welcome message

      window.location.hash = "#dash";
    });
  }());
  