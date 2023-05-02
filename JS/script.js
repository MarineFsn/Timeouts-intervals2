//Write a function that displays every second that has passed on the page since it was opened. 
//The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", 
//then "2 minutes have passed" (for 120 seconds and more), etc.


function displaySeconds() {
    const seconds = Math.floor((new Date() - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const secondsText = seconds === 1 ? "second" : "seconds";
    const minutesText = minutes === 1 ? "minute" : "minutes";
    const displayText = minutes > 0
      ? `${minutes} ${minutesText} have passed`
      : `${seconds} ${secondsText} have passed`;
    document.getElementById("timer").textContent = displayText;
  }
  
  const startTime = new Date();
  setInterval(displaySeconds, 1000);