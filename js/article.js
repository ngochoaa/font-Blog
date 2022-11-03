$(document).ready(function () {
    $.get("http://localhost:5243/api/Article", function (data, status) {
        console.log("Data: " + data[0].displayName + "\nStatus: " + status);
        data.forEach(post => {
            var html = `<article class="col-12 col-md-6 tm-post">
            <hr class="tm-hr-primary">
            <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                <div class="tm-post-link-inner">
                    <img src="img/shark2.jpg" alt="Image" class="img-fluid">                            
                </div>
                <span class="position-absolute tm-new-badge">New</span>
                <h2 class="tm-pt-30 tm-color-primary tm-post-title">${post.title}</h2>
            </a>                    
                <span>by Admin Honne</span>
            </div>
        </article>`
            
            var emlementListUser = document.querySelector("#listPost");
            emlementListUser.innerHTML += html
        });
        
    });
});