// Store references to page elements.
const selector = document.getElementById("selector");
const image = document.getElementById("image");

// List each language to preview. Add a corresponding PNG in the "images" folder
// with the same name, all lowercase. For instance, "JSX" is "jsx.png".
const languages = ["JSX", "CSS", "JSON", "HTML", "Markdown"];

// Create buttons to show a preview of each language.
languages.forEach((language, index) => {
  const button = document.createElement("button");
  button.innerText = language;
  button.setAttribute("data-index", index);
  selector.appendChild(button);
});

// Store the buttons in an array. We'll use this for "highlight".
const buttons = Array.from(selector.getElementsByTagName("button"));

// Add an active indicator to the first button.
highlight(buttons[0]);

// When a button is clicked, show its image.
selector.addEventListener("click", e => {
  if (e.target.nodeName !== "BUTTON") return false;
  const index = e.target.getAttribute("data-index");
  image.src = `images/${languages[index].toLowerCase()}.png`;
  highlight(e.target);
});

// Add an indicator class to a button if its language is being previewed.
function highlight(element) {
  buttons.map(button => button.classList.remove("active"));
  element.classList.add("active");
}
