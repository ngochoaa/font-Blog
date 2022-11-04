$(document).ready(function () {
    var form = document.querySelector("form")
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var displayName = document.getElementById("displayName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var date = "2022-11-04T08:33:08.431Z";
        fetch("http://localhost:5243/api/User", {
            method: 'POST',
            body: JSON.stringify({
                displayName: displayName,
                email: email,
                phone:phone,
                address:address,
                dateOfBirth:date,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                alert(`Đã thêm user ${data.displayName} thành công`)
                location.reload();
            })
    })
});