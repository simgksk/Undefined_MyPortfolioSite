//javascript
const wrap = document.getElementsByClassName('wrap')[0];
const container = document.getElementsByClassName('container');
let page = 0;
const lastPage = container.length - 1;

window.addEventListener('wheel', (event) => {
  event.preventDefault(); // 새로고침 막기
  // deltaY -> 상하 스크롤량 반환 (읽기 전용 속성, 최신브라우저 지원 사파리X)
  if(event.deltaY > 0){
    page++;
  }
  if(event.deltaY < 0){
    page--;
  }
  if(page < 0){
    page = 0;
  }
  if(page > lastPage){
    page = lastPage;
  }
  console.log(event.deltaY);
  wrap.style.top = page * -100 + 'vh';
  // wrap 클래스에 있는 css top 속성값을 변경시키는 코드
  // 현재 보여지는 페이지에 따라서 +- 100vh 를 이동시킨다.
}, {passive: false}); // passive 디폴트 기능 제거 - 스크롤