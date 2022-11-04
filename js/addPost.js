$(document).ready(function () {
    var form = document.querySelector("form")
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        var authorId = document.getElementById("authorId").value;
        var content = document.getElementById("content").value;
        var title = document.getElementById("title").value;
        fetch("http://localhost:5243/api/Article", {
            method: 'POST',
            body: JSON.stringify({
                authorId: authorId,
                content: content,
                title:title
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                alert(`Đã thêm bài viết ${data.title} thành công`)
                location.reload();
            })
    })
});