// 버튼 클릭하기
window.addEventListener('DOMContentLoaded', function() {
    showContent('language');
  });
  
function showContent(content) {
  var language = document.getElementById("skill-Language");
  var tool = document.getElementById("skill-Tool")
  var doc = document.getElementById("skill-Document");
  var design = document.getElementById("skill-Design");
  var community = document.getElementById("skill-Communication");
  
  language.style.display = "none";
  doc.style.display = "none";
  tool.style.display = "none";
  design.style.display = "none";
  community.style.display = "none";
  
  if (content === "language") {
    language.style.display = "flex";
  } else if (content === "tool") {
    tool.style.display = "flex";
  } else if (content === "document"){
      doc.style.display = "flex";
  } else if(content === "design"){
      design.style.display ="flex";
  } else if(content === "communication"){
      community.style.display = "flex";
  }
}

// 버튼 클릭 시 색상 변경
// const nonClick = document.querySelectorAll(".non-click");

// function handleClick(event) {
//   // div에서 모든 "click" 클래스 제거
//   nonClick.forEach((e) => {
//     e.classList.remove("click");
//   });
//   // 클릭한 div만 "click"클래스 추가
//   event.target.classList.add("click");
// }

// nonClick.forEach((e) => {
//   e.addEventListener("click", handleClick);
// });