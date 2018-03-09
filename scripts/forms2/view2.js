console.log("view js was imported")

function displayDashView() {
    console.log("now displaying dash view")

    var firstName = $("#login input#FirstName.form-control").val(); //This should not be here, but will stay just for testing. * model data *
    console.log(firstName);

const markup = `
 <div class="person">
    <h2>
        Welcome ` + firstName + `!
    </h2>
    <p class="location">Pearland</p>
    <p class="bio">let's go in the grid.</p>
 </div>
`;

console.log(markup , " << my markup")

$('body').html(markup);

}
