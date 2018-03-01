var imagesArray = document.querySelectorAll('.container img');
console.log(imagesArray , " << myNode")

var currentImage;

for (i = 0; i < imagesArray.length; i++) {
    console.log("pass #", i )
    imagesArray[i].addEventListener("click", function(event) {
        console.log(event , " << my click event" )

    if(event.target.tagName === 'IMG') {
        console.log(event.target.src, " << my target src");
        currentImage = event.target
        
        if (currentImage.classList.contains("selected-image")){
            currentImage.classList.remove("selected-image")
            return 
         }

        if (currentImage.classList.contains("selected-image") == false ){
            currentImage.classList.add("selected-image")
            return
        }

                
    }
})};