let hour = 0;
let min = 0;
let sec = 0;

export default function getTime(stopwatchNew, stopwatchSave) {
    if (stopwatchNew) {
        hour = 0;
        min = 0;
        sec = 0;
    }
    if (stopwatchSave){
        if (localStorage.getItem('sec')) {
            sec = +localStorage.getItem('sec');
        }
        if (localStorage.getItem('min')) {
            min = +localStorage.getItem('min');
        }
        if (localStorage.getItem('hour')) {
            hour = +localStorage.getItem('hour');
        }
    }

    let h, m, s = '';
    sec++;
    if (sec >= 60) {
        min++;
        sec -= 60;
    }
    if (min >=60) {
        hour++;
        min -= 60;
    }
    if (sec < 10) {
        s = ':0' + sec;
    } else s = ':' + sec;
    if (min < 10) {
        m = ':0' + min;
    } else m = ':' + min;
    if (hour < 10) {
        h = "0" + hour;
    } else h = hour;
    return h + m + s;
}