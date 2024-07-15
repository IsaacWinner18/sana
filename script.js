document.addEventListener('DOMContentLoaded', (event) => {

  const confetti = document.querySelector(".confetti");
  
  const claim_btn = document.querySelector(".claimbtn");
  const show_countdown = document.querySelector(".countdown");
let earning_counter = document.querySelector(".earningcounter");
let earning = parseInt(localStorage.getItem('earning')) || 0;
earning_counter.textContent = earning;


   let intervalId;
  
   claim_btn.addEventListener("click", (event)=>{
    claim_btn.style.display = "none";
    confetti.style.display = "none";
    show_countdown.style.display = "block";
    
    earning_counter.textContent = earning;
    localStorage.setItem("earning", earning)

    //this lines controls the rising text...

       
      const increment = document.createElement('div');
      increment.classList.add('increment');
      increment.textContent = `+${counter}`;
      
      increment.style.left = `${event.clientX - this.offsetLeft}px`;
      increment.style.top = `${event.clientY - this.offsetTop}px`;
      this.appendChild(increment);
  
      setTimeout(() => {
          increment.remove();
      }, 1000);
  
  


  });

});


