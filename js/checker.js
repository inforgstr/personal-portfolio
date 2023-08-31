const url = new URLSearchParams(window.location.search);

if (url.has("title")) {
  const article = `
    <div class="article-title"></div>
    <div class="article-tags"></div>
    <div class="article-date"></div>
    <div class="article-author">Posted by </div>
    <div class="article-content"></div>
    <a href="#">Continue reading this post...</a>
`;

  const articleEl = document.createElement("article");
  articleEl.className = "article-item";
  articleEl.innerHTML = article;
  document.querySelector(".blogs-side").append(articleEl);
}
