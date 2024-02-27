let target = new Date("11:30 Mar 1 2024");
setInterval(() => {
    let now =  new Date();
    let dist = (target - now) / 1000;

    if (dist > 0){   
        let days = Math.floor(dist / (3600 * 24));
        let hours = Math.floor((dist % (3600 * 24)) / 3600);
        let mins = Math.floor((dist % 3600) / 60);
        let secs = Math.floor(dist % 60);
        
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("mins").innerText = mins;
        document.getElementById("secs").innerText = secs;
    }
});