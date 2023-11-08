
document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const likeButton = document.createElement("button");
        likeButton.textContent = "Curtir";
        likeButton.addEventListener("click", () => {
            // Simule o aumento do contador de curtidas
            const likeCount = post.querySelector(".like-count");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });

        const likeCount = document.createElement("span");
        likeCount.textContent = "0 Curtidas";

        post.appendChild(likeButton);
        post.appendChild(likeCount);
    });
});
