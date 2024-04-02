// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".like-glyph");
  const errorMessage = document.getElementById("modal-message");
  const errorModal = document.getElementById("modal");


  likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", function () {
      if (likeButton.classList.contains("activated-heart")) {
        // Clicked on full heart, change it back to empty and remove the colour
        likeButton.textContent = EMPTY_HEART;
        likeButton.classList.remove("activated-heart");
      } else {
        // Clicked on empty heart, simulate server call
        mimicServerCall()
          .then(() => {
            alert("You notified the server")
            alert("pretened to like")
            // Updates the colour of the heart to red 
            likeButton.textContent = FULL_HEART;
            likeButton.classList.add("activated-heart");
          })
          .catch(() => {
            errorModal.classList.remove("hidden");
            errorMessage.textContent = "Server error: could not like!";
            setTimeout(() => errorModal.classList.add("hidden"), 3000);
            
          });
      }
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
