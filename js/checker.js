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
  const BlogEl = document.querySelector(".blogs-side article");
  const firstBlogEl = BlogEl.children;

  const articleEl = document.createElement("article");
  articleEl.className = "article-item";
  articleEl.innerHTML = article;
  BlogEl.insertAdjacentElement("beforebegin", articleEl);
  // BlogEl.insertBefore(firstBlogEl, articleEl);
}
