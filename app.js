

function setDate(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var second = d.getSeconds();
    
    var hourHand, minHand, secondHand, getHour, getMin, getSecond;
    hourHand = document.querySelector(".hour-hand");
    if (hour >=12){
        getHour = (hour-12)*30;
        hourHand.style.transform = "rotate(" + getHour +"deg)";
    } else if (hour < 12) {
        getHour = d*30;
        hourHand.style.transform = "rotate(" + getHour +"deg)";
    }

    minHand = document.querySelector(".min-hand");
    getMin = min*6;
    minHand.style.transform = "rotate(" + getMin + "deg)";

    secondHand = document.querySelector(".second-hand");
    getSecond = second*6;
    secondHand.style.transform = "rotate(" + getSecond + "deg)";

};

setInterval(setDate, 1000);
setDate();