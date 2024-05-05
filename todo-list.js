const array=[];
 
function rendertodolist(){  
     let listhtml='';
     array.forEach((arrayobject , index)=>{
        //let arrayobject=array[i];
/*let name=arrayobject.name;
let date=arrayobject.date;*/

let {name ,date }=arrayobject;
let html =
`<div>${name}</div><div>${date}</div>
    <button class='delete-butt' onclick="">delete</button>
    `
listhtml += html;
     });

document.querySelector(".Todolist").innerHTML= listhtml;
document.querySelectorAll(".delete-butt")
.forEach((deleteButton,index) => {
    deleteButton.addEventListener('click',()=>
    {array.splice(index,1);
    rendertodolist();})
    })
    

}

let adding=document.querySelector('.add-todo-butt');
adding.addEventListener('click',()=>{addtodo()});

function addtodo(){
   let inputelement=document.querySelector('.input');
    element=inputelement.value;
    let duedate=document.querySelector(".date")
    duedate=duedate.value;
    array.push({name:element,date:duedate});//if method and element have same no need to write it twice

   // console.log(array);
    inputelement.value = '';
    rendertodolist();
}