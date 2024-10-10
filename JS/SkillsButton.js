let activeButton = null;

window.addEventListener('DOMContentLoaded', function() {
    showContent('language', document.getElementById('btn-language'));
});

function showContent(content, button) {
  var language = document.getElementById("skill-Language");
  var tool = document.getElementById("skill-Tool");
  var doc = document.getElementById("skill-Document");
  var design = document.getElementById("skill-Design");
  var community = document.getElementById("skill-Communication");

  language.style.display = "none";
  tool.style.display = "none";
  doc.style.display = "none";
  design.style.display = "none";
  community.style.display = "none";

  if (content === "language") {
    language.style.display = "flex";
  } else if (content === "tool") {
    tool.style.display = "flex";
  } else if (content === "document") {
    doc.style.display = "flex";
  } else if (content === "design") {
    design.style.display = "flex";
  } else if (content === "communication") {
    community.style.display = "flex";
  }

  if (activeButton) {
    activeButton.style.backgroundColor = "";
    activeButton.style.color = "";
  }

  button.style.backgroundColor = "#f5f5f5";
  button.style.color = "#5C6B81"

  activeButton = button;
}
