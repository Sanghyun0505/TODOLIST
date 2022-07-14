
init();

function init(){
        document.querySelector('form').addEventListener('submit', addToDo);
        document.getElementById('clear').addEventListener('click', clearTodoList);
        document.querySelector('ul').addEventListener('click', Check);
        //querySelector는 html의 태그와 class, id 모두 JavaScript에 가져온다.
        //addEventListener는  document내에 특정요소에 event를 등록할때 사용한다. 
        //onclick="" 을 쓰면되는데 위와같이 하는 이유는 상황에 따라 다른 이벤트를 발생할수있고동일한 이벤트가 발생하는 버튼이 여러개있을때 
        //버튼에 다 직접 입력하는것보다위와같이 작성하는게 효율성 에서 좋기때문입니다.
}

function Check(e){
    if(e.target.className != 'delete')  
    {
        checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    }
}

function clearTodoList(e){ //목록 전체 삭제하는 경우
    let ul = document.querySelector('ul').innerHTML = '';
}

function checkToDo(e){  // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
    }
    else {
        todo.style.color = "#000000";
    }
}

function addToDo(e){ //새로운 할 일 추가하는 경우
    e.preventDefault();
    let toDoValue = document.querySelector('input').value; //입력받기
    if(toDoValue!== ''){
        addTask(toDoValue);
        toDoValue= ''; //입력창 비워주기
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><label>${value}</label>`;//<label> 태그는 폼 요소에 이름표를 붙이기 위한 것 <label> 태그는 <input> 태그를 도와주는 역할 
    //<input> 태그가 디자인 하기 힘들 때 <label> 태그로 연결해서 쉽게 디자인하거나 클릭 편의성을 높여준다.
    ul.appendChild(li);
}

