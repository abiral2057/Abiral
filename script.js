function btnclick(){
    const synth = window.speechSynthesis;
let enteredText = "  I am Abiral Shrestha, a passionate and dedicated web developer with a strong background in both front-end and back-end development. I specialize in creating responsive, user-friendly websites that are optimized for speed, accessibility, and search engines. With over 5 years of experience in the industry, I have worked with a wide range of clients, from small startups to large corporations, and have delivered high-quality solutions that exceed their expectation"
const utterThis = new SpeechSynthesisUtterance(enteredText);



    utterThis.lang = 'hi';
    utterThis.pitch = 0.2;
    synth.speak(utterThis);
}


/*
  @method Cards
  @description this is for label based radio navigation to change the labels style to 'active'
 */
  const Cards = ((() => {
    let currentCardIndex = 0;
    let intervalId;
  
    /*
     * @description dom loaded event listener
     */
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(init, 1);
    }, true);
  
    /*
     * @method init
     * @parameter e {event}
     * @description initiates event listeners on all cards
     */
    function init(e) {
      if (document.querySelector(".cards")) {
        let cards = document.querySelector(".cards");
        cards.addEventListener('click', clicked, false);
        document.querySelectorAll(".cards .card")[currentCardIndex].click();
        startAutoScroll();
      }
    }
  
    /*
     * @method startAutoScroll
     * @description starts auto scrolling
     */
    function startAutoScroll() {
      intervalId = setInterval(() => {
        currentCardIndex = (currentCardIndex + 1) % 4; // Assuming you have 3 cards
        document.querySelectorAll(".cards .card")[currentCardIndex].click();
      }, 3000); // Change this value to adjust the auto-scroll speed (in milliseconds)
    }
  
    /*
     * @method clicked
     * @parameter e {event}
     * @description this is the callback from the assigned event listener binding
     */
    function clicked(e) {
      let card = e.target;
      if (card.getAttribute("data-card")) {
        clearInterval(intervalId); // Stop auto-scroll when a card is manually clicked
        rearrange(card.getAttribute("data-card"));
        startAutoScroll(); // Restart auto-scroll after manual selection
      }
    }
  
    /*
     * @method rearrange
     * @parameter card {object}
     * @description this is the callback from the assigned event listener binding
     */
    function rearrange(card) {
      let cards = document.querySelectorAll(".cards .card");
      for (let n = 0; n < cards.length; n++) {
        cards[n].classList.remove("card--left");
        cards[n].classList.remove("card--center");
        cards[n].classList.remove("card--right");
      }
      cards[card].classList.add("card--center");
      if (card == 0) {
        cards[2].classList.add("card--left");
        cards[3].classList.add("card--left");
        cards[1].classList.add("card--right");
      }
      if (card == 1) {
        cards[0].classList.add("card--left");
        cards[3].classList.add("card--left");
        cards[2].classList.add("card--right");
      }
      if (card == 2) {
        cards[1].classList.add("card--left");
        cards[3].classList.add("card--right");
        cards[0].classList.add("card--right");
      }
      if (card == 3) {
        cards[2].classList.add("card--left");
        cards[3].classList.add("card--left");
        cards[1].classList.add("card--right");
      }
    }
  
    return {
      init
    };
  })());
  

  document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 4000); // Adjust the time as per your requirement
  });
  
