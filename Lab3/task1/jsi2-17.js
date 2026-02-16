"use strict";

if (browser == "Edge") {
    alert( "You've got the Edge!" );
    //break;
}
else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" 
    || browser == "Opera") {
    alert( "Okay we support these browsers too" );
    //break;
}
else {
    alert( "We hope that this page looks ok!");
}