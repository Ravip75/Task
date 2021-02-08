import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [dropDownText,setDropDownText]=useState("");
  const [director,setDirector]=useState("");
  const [manager,setManager]=useState("");
  const [coordinator,setCoordinator]=useState("");
  const [user1,setUser1]=useState("");
  const change=(e)=>{
    setDropDownText("CEO");
    
  }
  const change1=(e)=>{
    setDropDownText("director");
    
  }
  const change2=(e)=>{
    setDropDownText("manager");
    
  }
  const change3=(e)=>{
    setDropDownText("coordinator");
    
  }
  const change4=(e)=>{
    setDropDownText("User1");
  }
  const changing=(e)=>{
    setDirector(e.target.value);
  }
  const changing1=(e)=>{
    setManager(e.target.value);
  }
  const changing2=(e)=>{
    setCoordinator(e.target.value);
  }
  const changing3=(e)=>{
    setUser1(e.target.value);
  }
  const post1=async()=>{
    const data={CEO: "",
                director: director,
                manager: manager,
                coordinator: coordinator,
                User1: user1 }
    await axios.post("http://localhost:5000/api/users/register",data).then(r=>console.log(r.data));
  }
  const post2=async()=>{
    const data1={CEO: "",
    director: "",
    manager: manager,
    coordinator: coordinator,
    User1: user1 }
    await axios.post("http://localhost:5000/api/users/register",data1).then(r=>console.log(r.data));
  }
  const post3=async()=>{
    const data2={CEO: "",
    director: "",
    manager: "",
    coordinator: coordinator,
    User1: user1 }
    await axios.post("http://localhost:5000/api/users/register",data2).then(r=>console.log(r.data));
  }
  const post4=async()=>{
    const data3={CEO: "",
    director: "",
    manager: "",
    coordinator: "",
    User1: user1 }
    await axios.post("http://localhost:5000/api/users/register",data3).then(r=>console.log(r.data));
  }
  return (
    <div className="App">
      <DropdownButton
      title={dropDownText}
      className="menu"
      
        >
              <Dropdown.Item eventKey="option-1" onSelect={change}>CEO</Dropdown.Item>
              <Dropdown.Item eventKey="option-2" onSelect={change1}>director</Dropdown.Item>
              <Dropdown.Item eventKey="option-3" onSelect={change2}>manager</Dropdown.Item>
              <Dropdown.Item eventKey="option-4" onSelect={change3}>coordinator</Dropdown.Item>
              <Dropdown.Item eventKey="option-5" onSelect={change4}>User1</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton>
      {dropDownText==='CEO'?<div><div><label>director</label><input type="text" onChange={changing}></input></div>
                             <div><label>manager</label><input type="text" onChange={changing1}></input></div>
                             <div><label>coordinator</label><input type="text" onChange={changing2}></input></div>
                             <div><label>User1</label><input type="text" onChange={changing3}></input></div><button onClick={post1}>Post</button></div>:null}
      {dropDownText==='director'?<div><div><label>manager</label><input type="text" onChange={changing1}></input></div>
                             <div><label>coordinator</label><input type="text" onChange={changing2}></input></div>
                             <div><label>User1</label><input type="text" onChange={changing3}></input></div><button onClick={post2}>Post</button>
                             </div>:null}
      {dropDownText==='manager'?<div><div><label>coordinator</label><input type="text" onChange={changing2}></input></div>
                             <div><label>User1</label><input type="text" onChange={changing3}></input></div><button onClick={post3}>Post</button>
                             </div>:null}
      {dropDownText==='coordinator'?<div><div><label>User1</label><input type="text" onChange={changing3}></input></div><button onClick={post4}>Post</button>
                             </div>:null} 
                                                                                                 
    </div>
  );
}

export default App;
