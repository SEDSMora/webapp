const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

var counterState = "collapsed";
let countDown = new Date("Dec 22 , 2021 18:55:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    // (document.getElementById("days").innerText = Math.floor(
    //   distance / (1000 * 60 * 60 * 24)
    // )),
    (document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    if (distance < 0) {
      (document.getElementById("hours").innerText = 00),
        (document.getElementById("hours").innerText = 00),
        (document.getElementById("minutes").innerText = 00),
        (document.getElementById("seconds").innerText = 00);
      document.getElementById("link-text").innerText = "JOIN NOW";
      document.getElementById("button-link").disabled = false;
      // document.getElementById("button-link").style.visibility = "visible";
      if (distance >= -1000) {
        var myCollapse = document.getElementById("time-counter");
        var bsCollapse = new bootstrap.Collapse(myCollapse, {
          toggle: true,
        });
      } else {
        //do nothing
      }
      clearInterval(x);
    } else {
      document.getElementById("button-link").disabled = true;
      document.getElementById("link-text").innerText =
        "Please wait... \n Link will be available @ 6.55 PM";

      // document.getElementById("button-link").style.visibility = "hidden";

      if (counterState == "collapsed") {
        var myCollapse = document.getElementById("time-counter");
        var bsCollapse = new bootstrap.Collapse(myCollapse, {
          toggle: true,
        });
        counterState = "show";
      } else {
        //do nothing
      }
    }
  }, second);

function link() {
  window.open("https://udenver.zoom.us/j/82947584906", "_blank");
}
