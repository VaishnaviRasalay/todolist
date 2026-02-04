import React, { useState } from "react";
import AddItem from "./components/AddItem";
import SearchBox from "./components/SearchBox";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [addinput, setAddinput] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!addinput.trim()) return;

    if (editId !== null) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: addinput } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos(prev => [
        ...prev,
        { id: Date.now(), text: addinput, completed: false }
      ]);
    }
    setAddinput("");
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setAddinput(todo.text);
  };

  const handleCheck = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h2>Todo List</h2>

      <AddItem
        value={addinput}
        onChange={setAddinput}
        onAdd={handleAdd}
        isEdit={editId !== null}
      />

      <SearchBox value={search} onChange={setSearch} />

      <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onCheck={handleCheck}
      />
    </div>
  );
};

export default App;


















//to do with id
// import React, { useState } from "react";

// const App = () => {
//   const [addinput, setAddinput] = useState("");
//   const [dispalyinput, setDisplayinput] = useState([]);
//   const [search, setSearch] = useState("");
//   const [edit, setEdit] = useState(null);

//   // ADD / SAVE
//   const handleAdd = () => {
//     if (!addinput.trim()) return;

//     if (edit !== null) {
//       // UPDATE
//       setDisplayinput(prev =>
//         prev.map(item =>
//           item.id === edit
//             ? { ...item, text: addinput }
//             : item
//         )
//       );
//       setEdit(null);
//     } else {
//       // ADD
//       setDisplayinput(prev => [
//         ...prev,
//         {
//           id: Date.now(),
//           text: addinput,
//           completed: false
//         }
//       ]);
//     }

//     setAddinput("");
//   };

//   // DELETE
//   const handleDelete = (id) => {
//     setDisplayinput(prev =>
//       prev.filter(item => item.id !== id)
//     );
//   };

//   // EDIT
//   const handleEdit = (id) => {
//     const currentItem = dispalyinput.find(item => item.id === id);
//     setEdit(id);
//     setAddinput(currentItem.text);
//   };

//   // CHECK / UNCHECK
//   const handleCheck = (id) => {
//     setDisplayinput(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, completed: !item.completed }
//           : item
//       )
//     );
//   };

//   return (
//     <div>
//       <input
//         value={addinput}
//         onChange={(e) => setAddinput(e.target.value)}
//         placeholder="Enter item"
//       />

//       <button onClick={handleAdd}>
//         {edit !== null ? "Save" : "Add"}
//       </button>

//       <br /><br />

//       <input
//         placeholder="Search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div>
//         {dispalyinput
//           .filter(item =>
//             item.text.toLowerCase().includes(search.toLowerCase())
//           )
//           .map(item => (
//             <p
//               key={item.id}
//               style={{
//                 textDecoration: item.completed ? "line-through" : "none"
//               }}
//             >
//               <input
//                 type="checkbox"
//                 checked={item.completed}
//                 onChange={() => handleCheck(item.id)}
//               />

//               {item.text}

//               <button onClick={() => handleEdit(item.id)}>Edit</button>
//               <button onClick={() => handleDelete(item.id)}>X</button>
//             </p>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default App;

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      // ADD my to do app with index 
// import React, { useState } from 'react'

// const App = () => {
//   const[addinput,setAddinput]=useState('')
//   const[dispalyinput,setDisplayinput]=useState([])
  
//   const handleAdd=()=>{
//     if(addinput.trim()===""){
//       setAddinput('')
//       return  
//     }
//     if( edit!=null){
//      const updatedList= dispalyinput.map((item,index)=>index===edit?addinput:item)
//       setDisplayinput(updatedList)
//       setEdit(null)
//       setAddinput("")
//     }
  
//     else{
//     setDisplayinput([...dispalyinput,addinput])
//     setAddinput('')
//     }
//   }
// const handleDelete=(buttonindex)=>{
// setDisplayinput(dispalyinput.filter((_,index)=>index!==buttonindex))

// }

// const[search,setSearch]=useState('')
// const handleSearch=(e)=>{
// setSearch(e.target.value)
// }

// const[edit,setEdit]=useState(null)
// const handleEdit=(index)=>{
// setEdit(index)
// setAddinput(dispalyinput[index])
// }
// const[check,setCheck]=useState([])
// const handleCheck=(index)=>{
//     setCheck(prev=>prev.includes(index)?prev.filter((i)=>i!==index):[...prev,index])

// }





//   return (
//       <div>
//         <input onChange={(e)=>setAddinput(e.target.value)} value={addinput}></input>
//         <button onClick={handleAdd}>{edit!=null?"Save":"ADD"}</button>
//         <input placeholder='Enter search element' onChange={handleSearch} value={search}></input>
//         <div>{dispalyinput.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))
//     .map((input,index)=><p key={index} style={{textDecoration:check.includes(index)?"line-through":"none"}}><input type="checkbox" checked={check.includes(index)} onChange={()=>handleCheck(index)}/>{input} 
//     <button onClick={()=>handleEdit(index)}>edit</button>
//     <button onClick={()=>handleDelete(index)}>X</button></p>)}</div>
//       </div>
//   )
// }

// export default App





































// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const[input,setInput]=useState('')
//   const handleInput=(e)=>{
// setInput(e.target.value)
//   }
//   const[add,setAdd]=useState([])
//   const handleAdd=()=>{
//     if(input.trim()===""){
//       alert("Invalid")
//      handleAdd.style.display="none"
//       return
//     }
//     if (editIndex !== null) {
//       setAdd(
//         add.map((value, index) =>
//           index === editIndex ? input : value
        
//         )
//       )
//       setEditIndex(null)
//       setInput("")
//     }
//     else{
//   setAdd([...add,input]) 
//   setInput('')
//     }
    
//   }
//   const[search,setSearch]=useState("")
//   const handleSearch=(a)=>{
//     setSearch(a.target.value)
    
//   }
//   const handleDelete=(indexdel)=>{
//     setAdd(add.filter((_,index)=>(index !==indexdel)))
//   }

//   const [editIndex, setEditIndex] = useState(null)
//  const handleEdit=(val,index)=>{
//   setInput(val)
//  setEditIndex(index)
//  }
// const[check,setCheck]=useState(false)
//  const handleToggle=()=>{
 
//   if(check){
//     setCheck()
//   }
//  }
//   return (
//     <div>
//       <input onChange={handleInput} value={input}></input>
//       <button onClick={handleAdd} disabled={input.trim()===""}>{editIndex!==null?"save":"ADD"}</button>
//       <input onChange={handleSearch} value={search}></input>
//       <div>{add.filter((val)=>val.toLowerCase().includes(search.toLowerCase()))
//          .map((val,index)=><p key={index}><input type='checkbox'onChange={handleToggle} check={false} value={check}/>{val}<button onClick={()=>handleEdit(val,index)}>✏️</button><button onClick={()=>handleDelete(index)}>❌</button></p>)
//         }</div>
//     </div>
//   )
// }

// export default App
