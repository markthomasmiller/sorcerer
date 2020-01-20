const selector = document.getElementById("selector");
const image = document.getElementById("image");

const languages = [
  { name: "JSX", url: "alchemy/images/jsx.png", active: true },
  { name: "HTML", url: "alchemy/images/html.png" },
  { name: "CSS", url: "alchemy/images/css.png" },
  { name: "JSON", url: "alchemy/images/json.png" },
  { name: "Ruby", url: "alchemy/images/ruby.png" }
];

languages.forEach((language, i) => {
  const button = document.createElement("button");
  button.innerText = language.name;
  button.setAttribute("data-count", i);
  if (language.active) button.classList.add("active");
  selector.appendChild(button);
});

selector.addEventListener("click", e => {
  if (e.target.nodeName !== "BUTTON") return false;
  const n = e.target.getAttribute("data-count");
  image.src = languages[n].url;
  highlight(e.target);
});

const buttons = Array.from(selector.getElementsByTagName("button"));

function highlight(element) {
  buttons.map(button => button.classList.remove("active"));
  element.classList.add("active");
}
