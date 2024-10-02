const wrap = document.getElementsByClassName('wrap')[0];
const container = document.getElementsByClassName('container');
let page = 0;
const lastPage = container.length - 1;

window.addEventListener('wheel',(e)=>{
    e.preventDefault();

    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }

    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    
    console.log(e.deltaY)

    wrap.style.top = page * -100 + 'vh';
},{passive:false});