var prod_api = "/api";

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function tset(k, v) {
    localStorage.setItem(k, v);
}

function getLoadingHTML() {
    var html = '<div class="ui segment"> <div class="ui active inverted dimmer"><div class="ui text loader">Loading</div> </div> <p></p>  <br/><br/><br/><br/></div><br/><br/>';

    return html;
}

function tget(k) {
    return localStorage.getItem(k);
}

function abortRequests() {
    if (window.currentHTTPRequest) {
        window.currentHTTPRequest.abort();
    }
}

function makeRequest(method, url, data) {
    var id = localStorage.getItem('user_id');
    var token = localStorage.getItem('access_token');
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        window.currentHTTPRequest = xhr;

        xhr.open(method, url);
        if (typeof id !== 'undefined') {
            xhr.setRequestHeader("x-auth-id", id);
        }
        if (typeof token !== 'undefined') {
            xhr.setRequestHeader("x-auth-token", token);
        }

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (method == "POST" && data) {
            xhr.send(data);
        } else {
            xhr.send();
        }
    });

}

function dateToNiceDayStringDay(myDate) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    https: //stackoverflow.com/questions/24998624/day-name-from-date-in-js/24998705
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    return days[myDate.getDay()] + ", " + month[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear();
}

function dateToNiceDayStringTimeOnly(myDate) {
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return strTime;
}



function dateToNiceDayStringWithTime(myDate) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    //return myDate.getDate()+" "+month[myDate.getMonth()]+" "+myDate.getFullYear()+" "+strTime;
    return month[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear() + " " + strTime;
}

function dateToNiceDayString(myDate) {
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    //return myDate.getDate()+" "+month[myDate.getMonth()]+" "+myDate.getFullYear()+" "+strTime;
    return month[myDate.getMonth()] + " " + myDate.getDate() + " " + myDate.getFullYear();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function toUSD(v) {
    return "$" + parseFloat(v).toFixed(2);

}