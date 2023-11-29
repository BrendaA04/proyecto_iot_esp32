function get_led(){
    const URL = "https://esp32-5d7f8d64c991.herokuapp.com/iot"
    var request = new XMLHttpRequest;
    request.open('GET',URL);
    request.send();

    request.onload = () => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);
        for (var i = 0; i < Object.keys(json).length; i++) {
            console.log(i)
    
           
        }
    }
    
}
