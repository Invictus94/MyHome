const Http = new XMLHttpRequest();
const yourUrl='https://invictus94.github.io/MyHome/getLight';

window.onload = function() {
    let value = {element: "barium"};

    var xhr = new XMLHttpRequest();
    xhr.open("POST", yourUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        value: value
    }));

    var xhr = new XMLHttpRequest();
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);

        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};

xhr.open('GET', yourUrl, true);
xhr.send();
};

class Lights {

    static changeState() {
        if (Boolean(Lights.lightState))
            Lights.lightState = Boolean(0);
        else
            Lights.lightState = Boolean(1);
    }

    static getCurrentStatus() {
        return Lights.lightState;
    }
}

Lights.lightState = Boolean(0);

function changeLightState() {
    Lights.changeState();
   console.log(Lights.getCurrentStatus());
}