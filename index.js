setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    var time = d.toLocaleTimeString();
    var times = time.split(":")

    var hour = times[0];
    var minutes = times[1];
    var a = times[2].split(" ");
    var sec = a[0];
    var AM = a[1];

    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
    } else {
        document.getElementById("hour").innerHTML = hour;
    }
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("tim").innerHTML = AM;
    // console.log(hour, minutes, sec, AM);
}


setInterval(Updater, 1000);

function Updater() {
    const d = new Date();
    var hourr = new Date().getHours();
    var time = d.toLocaleTimeString();
    var times = time.split(":")

    var hour = times[0];
    var a = times[2].split(" ");
    var AM = a[1];


    if (hour > 4 && hour < 11) {
        document.getElementsByClassName("greetings-text")[0].innerHTML = "Good Morning !!"
    } else if (hour >= 12 && hour < 18) {
        document.getElementsByClassName("greetings-text")[0].innerHTML = "Good Afternoon !!"
    } else if (hour >= 20 && hour < 24) {
        document.getElementsByClassName("greetings-text")[0].innerHTML = "Good Night !!"
    } else {
        document.getElementsByClassName("greetings-text")[0].innerHTML = "Good Day !!"
    }


    // Adding Picture Change Property

    var wake = document.getElementById("wakeup").value;
    var eat = document.getElementById("eating").value;
    var nap = document.getElementById("naps").value;

    //console.log(wake, eat, nap);
    var wakeup_text = document.getElementsByClassName("set-timing-text")[0];
    var lunch_text = document.getElementsByClassName("set-timing-text")[1];
    var nap_text = document.getElementsByClassName("set-timing-text")[2];

    // Wake Up JS
    console.log(wake, hourr)
    if (nap == hourr) {
        document.getElementById("root-image").setAttribute("src", "./images/2clock.png");
        document.getElementsByClassName("image-text")[0].innerHTML = "Good Night !!";
    } else if (eat == hourr) {
        document.getElementById("root-image").setAttribute("src", "./images/lunch.jpg");
        document.getElementsByClassName("image-text")[0].innerHTML = "Let's have some Lunch !!";
    } else if (wake == hourr) {
        document.getElementById("root-image").setAttribute("src", "./images/1.png");
        document.getElementsByClassName("image-text")[0].innerHTML = "Wake Up !!";
    } else {
        document.getElementById("root-image").setAttribute("src", "./images/lunch_image.svg");
        document.getElementsByClassName("image-text")[0].innerHTML = "Let's have fun !!";
    }


    if (wake == 1) {
        wakeup_text.innerHTML = "Wake up time : 01 AM - 02 AM";

    } else if (wake == 2) {
        wakeup_text.innerHTML = "Wake up time : 02 AM - 03 AM";

    } else if (wake == 3) {
        wakeup_text.innerHTML = "Wake up time : 03 AM - 04 AM";

    } else if (wake == 4) {
        wakeup_text.innerHTML = "Wake up time : 04 AM - 05 AM";

    } else if (wake == 5) {
        wakeup_text.innerHTML = "Wake up time : 05 AM - 06 AM";

    } else if (wake == 6) {
        wakeup_text.innerHTML = "Wake up time : 06 AM - 07 AM";

    } else if (wake == 7) {
        wakeup_text.innerHTML = "Wake up time : 07 AM - 08 AM";

    } else if (wake == 8) {
        wakeup_text.innerHTML = "Wake up time : 08 AM - 09 AM";

    } else if (wake == 9) {
        wakeup_text.innerHTML = "Wake up time : 09 AM - 10 AM";

    } else if (wake == 10) {
        wakeup_text.innerHTML = "Wake up time : 10 AM - 11 AM";

    } else if (wake == 11) {
        wakeup_text.innerHTML = "Wake up time : 11 AM - 12 PM";

    } else if (wake == 12) {
        wakeup_text.innerHTML = "Wake up time : 12 PM - 01 PM";

    } else if (wake == 13) {
        wakeup_text.innerHTML = "Wake up time : 01 PM - 02 PM";

    } else if (wake == 14) {
        wakeup_text.innerHTML = "Wake up time : 02 PM - 03 PM";

    } else if (wake == 15) {
        wakeup_text.innerHTML = "Wake up time : 03 PM - 04 PM";

    } else if (wake == 16) {
        wakeup_text.innerHTML = "Wake up time : 04 PM - 05 PM";

    } else if (wake == 17) {
        wakeup_text.innerHTML = "Wake up time : 05 PM - 06 PM";

    } else if (wake == 18) {
        wakeup_text.innerHTML = "Wake up time : 06 PM - 07 PM";

    } else if (wake == 19) {
        wakeup_text.innerHTML = "Wake up time : 07 PM - 08 PM";

    } else if (wake == 20) {
        wakeup_text.innerHTML = "Wake up time : 08 PM - 09 PM";

    } else if (wake == 21) {
        wakeup_text.innerHTML = "Wake up time : 09 PM - 10 PM";

    } else if (wake == 22) {
        wakeup_text.innerHTML = "Wake up time : 10 PM - 11 PM";

    } else if (wake == 23) {
        wakeup_text.innerHTML = "Wake up time : 11 PM - 12 AM";

    } else if (wake == 24) {
        wakeup_text.innerHTML = "Wake up time : 12 AM - 01 AM";

    } else {
        wakeup_text.innerHTML = "Wake up time : 06 AM - 07 AM";

    }

    // Lunch text
    if (eat == 1) {
        lunch_text.innerHTML = "Lunch time : 01 AM - 02 AM";

    } else if (eat == 2) {
        lunch_text.innerHTML = "Lunch time : 02 AM - 03 AM";

    } else if (eat == 3) {
        lunch_text.innerHTML = "Lunch time : 03 AM - 04 AM";

    } else if (eat == 4) {
        lunch_text.innerHTML = "Lunch time : 04 AM - 05 AM";

    } else if (eat == 5) {
        lunch_text.innerHTML = "Lunch time : 05 AM - 06 AM";

    } else if (eat == 6) {
        lunch_text.innerHTML = "Lunch time : 06 AM - 07 AM";

    } else if (eat == 7) {
        lunch_text.innerHTML = "Lunch time : 07 AM - 08 AM";

    } else if (eat == 8) {
        lunch_text.innerHTML = "Lunch time : 08 AM - 09 AM";

    } else if (eat == 9) {
        lunch_text.innerHTML = "Lunch time : 09 AM - 10 AM";

    } else if (eat == 10) {
        lunch_text.innerHTML = "Lunch time : 10 AM - 11 AM";

    } else if (eat == 11) {
        lunch_text.innerHTML = "Lunch time : 11 AM - 12 PM";

    } else if (eat == 12) {
        lunch_text.innerHTML = "Lunch time : 12 PM - 01 PM";

    } else if (eat == 13) {
        lunch_text.innerHTML = "Lunch time : 01 PM - 02 PM";

    } else if (eat == 14) {
        lunch_text.innerHTML = "Lunch time : 02 PM - 03 PM";

    } else if (eat == 15) {
        lunch_text.innerHTML = "Lunch time : 03 PM - 04 PM";

    } else if (eat == 16) {
        lunch_text.innerHTML = "Lunch time : 04 PM - 05 PM";

    } else if (eat == 17) {
        lunch_text.innerHTML = "Lunch time : 05 PM - 06 PM";

    } else if (eat == 18) {
        lunch_text.innerHTML = "Lunch time : 06 PM - 07 PM";

    } else if (eat == 19) {
        lunch_text.innerHTML = "Lunch time : 07 PM - 08 PM";

    } else if (eat == 20) {
        lunch_text.innerHTML = "Lunch time : 08 PM - 09 PM";

    } else if (eat == 21) {
        lunch_text.innerHTML = "Lunch time : 09 PM - 10 PM";

    } else if (eat == 22) {
        lunch_text.innerHTML = "Lunch time : 10 PM - 11 PM";

    } else if (eat == 23) {
        lunch_text.innerHTML = "Lunch time : 11 PM - 12 AM";

    } else if (eat == 24) {
        lunch_text.innerHTML = "Lunch time : 12 AM - 01 AM";

    } else {
        lunch_text.innerHTML = "Lunch time : 02 PM - 03 PM";

    }

    // Nap text
    if (nap == 1) {
        nap_text.innerHTML = "Napping time : 01 AM - 02 AM";

    } else if (nap == 2) {
        nap_text.innerHTML = "Napping time : 02 AM - 03 AM";

    } else if (nap == 3) {
        nap_text.innerHTML = "Napping time : 03 AM - 04 AM";

    } else if (nap == 4) {
        nap_text.innerHTML = "Napping time : 04 AM - 05 AM";

    } else if (nap == 5) {
        nap_text.innerHTML = "Napping time : 05 AM - 06 AM";

    } else if (nap == 6) {
        nap_text.innerHTML = "Napping time : 06 AM - 07 AM";

    } else if (nap == 7) {
        nap_text.innerHTML = "Napping time : 07 AM - 08 AM";

    } else if (nap == 8) {
        nap_text.innerHTML = "Napping time : 08 AM - 09 AM";

    } else if (nap == 9) {
        nap_text.innerHTML = "Napping time : 09 AM - 10 AM";

    } else if (nap == 10) {
        nap_text.innerHTML = "Napping time : 10 AM - 11 AM";

    } else if (nap == 11) {
        nap_text.innerHTML = "Napping time : 11 AM - 12 PM";

    } else if (nap == 12) {
        nap_text.innerHTML = "Napping time : 12 PM - 01 PM";

    } else if (nap == 13) {
        nap_text.innerHTML = "Napping time : 01 PM - 02 PM";

    } else if (nap == 14) {
        nap_text.innerHTML = "Napping time : 02 PM - 03 PM";

    } else if (nap == 15) {
        nap_text.innerHTML = "Napping time : 03 PM - 04 PM";

    } else if (nap == 16) {
        nap_text.innerHTML = "Napping time : 04 PM - 05 PM";

    } else if (nap == 17) {
        nap_text.innerHTML = "Napping time : 05 PM - 06 PM";

    } else if (nap == 18) {
        nap_text.innerHTML = "Napping time : 06 PM - 07 PM";

    } else if (nap == 19) {
        nap_text.innerHTML = "Napping time : 07 PM - 08 PM";

    } else if (nap == 20) {
        nap_text.innerHTML = "Napping time : 08 PM - 09 PM";

    } else if (nap == 21) {
        nap_text.innerHTML = "Napping time : 09 PM - 10 PM";

    } else if (nap == 22) {
        nap_text.innerHTML = "Napping time : 10 PM - 11 PM";

    } else if (nap == 23) {
        nap_text.innerHTML = "Napping time : 11 PM - 12 AM";

    } else if (nap == 24) {
        nap_text.innerHTML = "Napping time : 12 AM - 01 AM";

    } else {
        nap_text.innerHTML = "Napping time : 02 PM - 03 PM";

    }


}