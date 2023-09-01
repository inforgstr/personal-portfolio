const data = new URLSearchParams(window.location.search);

function cleanUpField(str) {
  if (!str) {
    return false;
  }
  cleaned = str.trim();
  return cleaned[0].toUpperCase() + cleaned.slice(1);
}

function parseMinutes(minutes) {
  minutes = minutes.toString();
  if (!minutes) {
    return false;
  } else if (minutes.length === 1) {
    return 0 + minutes;
  } else {
    return minutes;
  }
}

function normalizeDate(date) {
  parsedDate = new Date(date);
  return `${parsedDate.toLocaleString("en-us", { weekday: "short" })},
  ${parsedDate.toLocaleString("en-us", { month: "short" })}
  ${parsedDate.getDate()} 
  ${parsedDate.getHours()}:${parseMinutes(parsedDate.getMinutes())}`;
}

if (data.get("title")) {
  let articleItems = document.querySelector("article.article-item");

  let articleItem = articleItems.children;
  articleItem[0].innerHTML += cleanUpField(data.get("title"));
  data.getAll("tag").forEach((tag) => {
    if (tag) {
      el = document.createElement("div");
      el.innerHTML += cleanUpField(tag);
      articleItem[1].append(el);
    }
  });
  articleItem[2].innerHTML += normalizeDate(data.get("date"));
  articleItem[3].innerHTML +=
    "<strong>" + cleanUpField(data.get("author")) + "</strong>";
  articleItem[4].innerHTML += cleanUpField(data.get("content"));
}
