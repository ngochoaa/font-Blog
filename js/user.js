$(document).ready(function () {
    $.get("http://localhost:5243/api/User", function (data, status) {
        console.log("Data: " + data[0].displayName + "\nStatus: " + status);
        data.forEach(user => {
            var html = `<tr>
            <td>${user.displayName}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.dateOfBirth}</td>
            <td>${user.address}</td>
            <td> <button>Edit User</button></td>
            <td><button>Delete User</button></td>
            </tr>`
            
            var emlementListUser = document.querySelector("#listUsers");
            emlementListUser.innerHTML += html
        });
        
    });
});
