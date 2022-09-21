
// countdown.js.liquid

  let endDate = new Date("September 12, 2022 00:00 GMT+0100").getTime();
  const intervall = 1000 * 60 * 60 * 0;
  const now = new Date().getTime();

  const dates = [];

  if (intervall > 0){
    while (endDate > now) {
      dates.push(new Date(endDate));
      endDate -= intervall;
    }
  } else {
      dates.push(new Date(endDate));
  }

  dates.reverse();

  function getNextDate() {
    let now = new Date().getTime();
    for (let date of dates) {
      if (date > now) {
        return date;
      }
    }
    return null;
  }

  const intervallId = setInterval(function () {
    let countDown = getNextDate();
    if (countDown === null) {
      document.getElementById("countdown_announcement").innerHTML = "";
      document.getElementById("countdown_product").innerHTML = "";
      document.getElementById("countdown_product_wrapper").className = " no-js"; 
      clearInterval(intervallId);
      return;
    }

    const distanceNow = countDown - new Date().getTime();

    var days = Math.floor(distanceNow / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceNow % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceNow % (1000 * 60)) / 1000);

    
      document.getElementById("countdown_announcement").innerHTML = `<span class="countdown_days"><span class="countdown_text">${days}</span>` + "T " + `</span>` + `<span class="countdown_text">${hours}</span>` + "STD "
      + `<span class="countdown_text">${minutes}</span>` + "MIN " + `<span class="countdown_text">${seconds}</span>` + "S ";
    

  }, 1000);
