 function initClock() {
     timeset();
     window.setInterval("timeset()", 1);
 }



 function timeset() {
     var dateTime = new Date();


     var day = dateTime.getDate();

     var month = dateTime.getMonth() + 1;
     var year = dateTime.getFullYear();

     var hour = dateTime.getHours();
     var minute = dateTime.getMinutes();
     var seconds = dateTime.getSeconds();
     var pm = "PM";
     if (hour > 12) {
         document.getElementById('am').innerHTML = pm;
     }

     if (hour > 12) {
         hour = hour - 12;
     }

     if (hour < 10) {
         hour = '0' + hour;
     }

     if (month < 10) {
         month = '0' + month;
     }

     if (minute < 10) {
         minute = '0' + minute;
     }

     if (seconds < 10) {
         seconds = '0' + seconds;
     }

     if (day < 10) {
         day = '0' + day;
     }




     document.getElementById('day').innerHTML = day + " :";
     document.getElementById('mon').firstChild.nodeValue = month + " :";
     document.getElementById('year').innerHTML = year;
     document.getElementById('hr').innerHTML = hour + " :";
     document.getElementById('mn').innerHTML = minute + " :";
     document.getElementById('sec').innerHTML = seconds;

 }

 //setInterval(timeset, 1000);