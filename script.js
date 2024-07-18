// document.addEventListener("DOMContentLoaded", () => {
//   const div = document.querySelector('.earningcounter');
//   const incrementValue = 1000;
//   const incrementInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

//   function getCurrentValue() {
//     return parseInt(localStorage.getItem('incrementValue')) || 0;
//   }

//   function setCurrentValue(value) {
//     localStorage.setItem('incrementValue', value);
//     div.textContent = value;
//   }

//   function checkAndUpdateValue() {
//     const lastIncrementTime = parseInt(localStorage.getItem('lastIncrementTime')) || 0;
//     const currentTime = Date.now();

//     if (currentTime - lastIncrementTime >= incrementInterval) {
//       const newValue = getCurrentValue() + incrementValue;
//       setCurrentValue(newValue);
//       localStorage.setItem('lastIncrementTime', currentTime);
//     } else {
//       setCurrentValue(getCurrentValue());
//     }
//   }

//   checkAndUpdateValue();

//   setInterval(() => {
//     checkAndUpdateValue();

//   }, 1000); // Check every second



//  });


