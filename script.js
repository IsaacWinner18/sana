document.addEventListener("DOMContentLoaded", function() {
    const balanceDisplay = document.querySelector(".earningcounter");
    const ratePerHour = 50;
  
    // Function to update balance and store in local storage
    function updateBalance() {
      let currentBalance = parseFloat(localStorage.getItem("currentBalance")) || 26750;
      currentBalance += ratePerHour;
      balanceDisplay.textContent = currentBalance;
      localStorage.setItem("currentBalance", currentBalance);

    }
  
    // Initialize balance display from local storage
    function initializeBalance() {
      let savedBalance = parseFloat(localStorage.getItem("currentBalance")) || 26750;
      balanceDisplay.textContent = savedBalance;
localStorage.clear()
    }
  
    // Set interval to update balance every hour (3600000 milliseconds)
    setInterval(updateBalance, 3600000);
  
    // Initialize balance on page load
    initializeBalance();
  });
  