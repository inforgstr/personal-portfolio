const tagInput = document.getElementById("tag");
const addBtn = document.querySelector(".add-tag");

addBtn.addEventListener("click", () => {
  if (tagInput.value.toString().trim()) {
    element = document.createElement("input");
    element.className = "s-tag";
    element.value = tagInput.value;
    element.setAttribute("name", "tag");
    document.querySelector(".input .tag__inner").append(element);
    tagInput.value = "";
  }
  let tagElements = document.querySelectorAll(".s-tag");
  tagElements.forEach((el) => {
    el.addEventListener("click", function () {
      el.remove();
    });
  });
});
