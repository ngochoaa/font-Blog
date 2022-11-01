$(document).ready(function () {
    $.get("http://localhost:5243/api/User", function(data, status){
        console.log("Data: " + data[1].displayName + "\nStatus: " + status);
    });
});
