$(document).ready(function () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let id = params.id;
    $.get("http://localhost:5243/api/Article", function (data, status) {
        data.forEach(article => {
            if (article.id == id) {
                var html = `<div class="row tm-row">
                <div class="col-12">
                    <h1>
                        <b>
                            ${article.title}
                        </b>
                    </h1>
                    <br>
                    <img src="img/shark1.jpg" style="width: 100%">
                    <p style="text-align: center">Cá ngừ vây vàng cọ vào cá mập xanh. Ảnh: Chris Thompson</p>
                </div>
                <div class="bottom">
                   ${article.content}
                </div>

                <hr size="5" width="100%" color="black">
                <div>
                    <h3>Bình luận</h3>
                    <div>
                        <form method="post">
                            <input id="authorId" class="form-control mb-3" type="text" name="authorId" placeholder="Nhập UserID" />
                            <textarea id="content" cols="45" rows="5" name="content" placeholder="Nhập nội dung bài viết"
                                style="border-radius:5px ;"></textarea><br>
                            <button style="margin-top: 20px;">
                                Thêm bình luận
                            </button>
                        </form>
                    </div>
                    <br>
                    <div id="listComment"></div>
                </div>
                <br>
                <div>

                </div>`

                var emlementListUser = document.querySelector("#main");
                emlementListUser.innerHTML += html
            }
        });
        $.get("http://localhost:5243/api/Comment", function (data, status) {
            data.forEach(comment => {
                if (comment.articleId == id) {
                    var html = `<br> <img src="img/shark4.PNG" style="width: 70px; height: 70px;">
            &nbsp;
            ${comment.content}`

                    var emlementListUser = document.querySelector("#listComment");
                    emlementListUser.innerHTML += html
                }
            });
        });
        var form = document.querySelector("form")
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            var authorId = document.getElementById("authorId").value;
            var content = document.getElementById("content").value;
    
            fetch("http://localhost:5243/api/Comment", {
                method: 'POST',
                body: JSON.stringify({
                    articleId: id,
                    authorId: authorId,
                    content: content
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    alert("Đã comment thành công")
                    location.reload();
                })
        })

    });


   
});