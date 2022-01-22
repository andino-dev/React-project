import React ,{useState,useEffect} from 'react';
import Alert from './Alert';
import List from './List';
import "./App.css";
function App() {
  const getLocalStorage =()=>{
    let storageItem = localStorage.getItem('list');
    if(storageItem){
      return  JSON.parse(localStorage.getItem('list'));
    }
    return [];
  }
  const [name,setName] = useState('');
  const[list,setList]= useState(getLocalStorage());
  const[editID,setEditID]= useState(null);
  const[alert,setAlert] = useState({show:false,msg:'',type:''});
  const [isEditing,setIsEditing] = useState(false);
  const handleSubmit = (e)=>{
   e.preventDefault();
   if(!name){
     showAlert(true,'please enter value','danger');
   }else if(name && isEditing){
    setList(list.map((item)=>{
      if(item.id===editID){
        return {...item,title:name}
      }
      return item;
    }))
    setName('');
    setIsEditing(false);
    setEditID(null);
    showAlert(true,'value changes','success')
   }else{
    const newItem = {id:new Date().getTime().toString(),title:name};
    setList([...list,newItem]);
    showAlert(true,'item added on the list','success');
    setName('');
   }
  }
  const showAlert = (show=false,msg='',type='')=>{
    setAlert({show,msg,type});
  }
  const clearList = ()=>{
    showAlert(true,'empty list','danger')
    setList([]);
  }
  const removedItem = (id)=>{
    showAlert(true,'item has removed','danger')
    setList(list.filter((item)=>item.id!==id));
  }
  const editItem = (id)=>{
    const itemChanges = list.find((item)=> item.id===id);
    setIsEditing(true);
    setEditID(id);
    setName(itemChanges.title)
  }
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return (
<section className="section-center">
 <form className="grocery-form" onSubmit = {handleSubmit}>
    {alert.show && <Alert {...alert}  list={list} removeAlert = {showAlert}/>}
    <h3>Grocery Bud</h3>
  <div className="form-control">
    <input type="text" className="grocery" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button type="submit" className="submit-btn">{isEditing ? 'edit':'submit'}</button>
  </div>
 </form>
 {list.length >0  && (
   <div className="grocery-container">
    <List items={list}  editItem={editItem}removedItem={removedItem}/>
    <button className="clear-btn" onClick={clearList}>clear items</button>
   </div>
 )}
</section>
  );
}

export default App;
