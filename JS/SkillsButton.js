// 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function() {
    showContent('language');
  });
  
  function showContent(content) {
    var language = document.getElementById("skill-Language");
    var tool = document.getElementById("skill-Tool")
    var doc = document.getElementById("skill-Document");
    var design = document.getElementById("skill-Design");
    var community = document.getElementById("skill-Communication");
  
    // 내용 숨김
    language.style.display = "none";
    doc.style.display = "none";
    tool.style.display = "none";
    design.style.display = "none";
    community.style.display = "none";
  
    // 선택한 내용 보이기
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