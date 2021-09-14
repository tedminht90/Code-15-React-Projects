import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

//setup localStorage
const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] =  useState({show:false,
                                      type:'',
                                      msg:''
                                      });
  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log('hello');
    if(!name){
      // display alert
      showAlert(true, 'danger','please enter value')
    }
    else if(name && isEditing){
      //deal with edit
      setList(
        list.map((item) =>{
          if(item.id === editID){
            return {...item, name}    
      }
      return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'success','value changed')
      }else{
      //show alert
        showAlert(true, 'success', 'item added to the list');
        const newItems = {id: new Date().getTime().toString(), title:name};
        setList([...list, newItems]);
        setName('');
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show:show, type, msg})
  }
  const clearList = () =>{
    showAlert(true,'danger','empty list');
    setList([]);
  }
  const removeItem = (id) =>{
    showAlert(true,'danger','item removed');
    const newItem = list.filter((item)=> item.id !== id);
    setList(newItem);
  }
  const editItem = (id) =>{
    const specificItem =  list.find((item)=> item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3>grocery bub</h3>
      <div className="form-control">
        <input type="text" 
               className="grocery" 
               placeholder="e.g.  eggs" 
               value={name}  
               onChange={(e)=>setName(e.target.value)}
               />
        <button type="submit" className="submit-btn">
          {isEditing ? 'edit' : 'submit'}
        </button>

      </div>
    </form>
    {list.length > 0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    )}
    </section>
}

export default App
