import React, {useState} from 'react'
import './App.css'
function App(){
    let[todoinput, updatetodoinput]=useState()
    let[todolists, updatetodolists]=useState()
    const todolist=[
            {
                id:1,
                task: 'learn react'
            },
            {
                id:2,
                task: 'learn angular'
            },
            {
                id:3,
                task: 'learn web'
            }
        ]
    
  let nextid=3
  function addNewtodo(){
    if(todoinput===""){
        alert("add some task")
    }
    else{
        let newtodos=[
            ...todolist,
            {
              id:nextid++,
              task:todoinput
            }
        ]

        updatetodolists(newtodos)
   updatetodoinput("")
    }

// function deletetodo(id){
//     let updatedtodolist=todolist.filter(
//         (todo)=>{
//             return todo.id!=id
//         }
//     )
// }
updatetodolists(updatetodolists)
return(
<div>
   <h1>Hello</h1>
   <div className="container mt-sw-50">
   <div className="input-group">
        <input className="form-control" onChange={(e)=>{
           let task=e.target.value;
             updatetodoinput(task)
        }} type='text' value={todoinput}/></div></div>
   <ul className="list group mt-8">
   {
    todolist.map(
        (todo)=>
            (
             <div>
                <li className="list-group-item">
                   <p>{todo.id}</p>
                    <p>{todo.task}</p>
                    <button onClick={()=>{addNewtodo()}} className="btn btn-primary">Add</button>
                    {/* <button className="btn" onClick={deletetodo}>Click to Delete</button> */}
                </li>
                
                </div>
            )
        )
}
</ul>
</div>


    )
  }
}
export default App;