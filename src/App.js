// import logo from './logo.svg';
// import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);//wheter dark mode is enable or not

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", " success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  
  return (
    <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}

<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">

 <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces etc.." mode={mode}/>
{/* <About/> */}
</div>


    </>
  );
}



export default App;
