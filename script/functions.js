

window.onload = function () {

    // $.ajax({
    //     url:"https://jsonstorage.net/api/items",
    //     type:"POST",
    //     data:'{"light1":"false"}',
    //     contentType:"application/json; charset=utf-8",
    //     dataType:"json",
    //     success: function(data, textStatus, jqXHR){
    //             console.log(data);
    //     }
    // });  

};

class Lights {

    static changeState() {
        if (Boolean(Lights.lightState))
            Lights.lightState = 0;
        else
            Lights.lightState = 1;
    }

    static getCurrentStatus() {
        return Lights.lightState;
    }
}

Lights.lightState = 0;

function changeLightState() {
    Lights.changeState();
   // console.log(Lights.getCurrentStatus());

   var url = "https://jsonstorage.net/api/items/e144ed31-7a6c-4a1b-8248-cf58a5c342be";

   var json = JSON.stringify(`{"light1":"${Lights.getCurrentStatus()}"}`);
   
   var xhr = new XMLHttpRequest();
   xhr.open("PUT", url, true);
   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
   xhr.onload = function () {
       var users = JSON.parse(xhr.responseText);
       if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(users);
    } 
   }
  xhr.send(json);
   

    // $.ajax({
    //     url:"https://jsonstorage.net/api/items/e144ed31-7a6c-4a1b-8248-cf58a5c342be",
    //     type:"PUT",
    //     data: `{"light1":"${Lights.getCurrentStatus()}"}`,
    //     contentType:"application/json; charset=utf-8",
    //     dataType:"json",
    //     success: function(data, textStatus, jqXHR){
    //         console.log(data);
    //     }
    // }); 
}


// e144ed31-7a6c-4a1b-8248-cf58a5c342be