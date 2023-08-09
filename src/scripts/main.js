AOS.init();

const dateOfEvent = new Date("Dec 12, 2023 12:00:00");
const timeStampOfEvent = dateOfEvent.getTime();

const contourHours = setInterval (function(){
    const now = new Date();
    const timeStampoNow = now.getTime();
    const timeDistance = timeStampOfEvent - timeStampoNow;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;
    const secondsInMs = 1000;

    const daysToEvent = Math.floor( timeDistance / daysInMs);
    const hoursToEvent = Math.floor((timeDistance % daysInMs) / hoursInMs);
    const minutesToEvent = Math.floor((timeDistance % hoursInMs) / minutesInMs);
    const secondsToEvent = Math.floor((timeDistance % minutesInMs) / secondsInMs);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if (timeDistance < 0){
        clearInterval(contourHours);
        document.getElementById('counter').innerHTML = `Evento expirado`;
    }
}, 1000);



