const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');

 // show time
 function showTime(){
    let today = new Date(),
    hour =  today.getHours(),
    nim = today.getMinutes(),
    sec = today.getSeconds();
    
    // set Am or PM
    const amPm = hour>=12 ? 'PM' : 'AM';

    //12 format
    hour = hour % 12 || 12;

    //OutPut time
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    setTimeout(showTime, 1000);

 }
 //run 
 showTime();