import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';


function App() {

  const [show,setShow]=useState(false);

//   // רשימת המשתמשים
// const [users,setUsers]=useState([]);
// // הצגת התפריט לאחר כניסה או הרשמה
// const [show,setShow]=useState(false);

// הצגת תפריט כפתורים
const showNavbar =()=>{
  if(show){
    return <Navbar/>
  }
}




// //                   הוספת פוסט חדש למשתמש
// // מגיע לפונקציה גם האינדקס של המשתמש בכדי לדעת היכן להוסיף את הפוסטים
// const addPost =(index,body,year)=>{
//   let temp = {body:body,year:year};
//   users[index].postsOfUser.push(temp)
//   setUsers([...users])

// }



// // הוספת משתמש
// const addNewUser =(name,age)=>{
//   setUsers([...users,{nameOfUser:name , ageOfUser:age,  postsOfUser:[]}])
// }


// // עריכת המשתמש על ידי קבלת המיקום שבו נמצא - אינדקס 
// const editAgeOfUser=(index,age)=>{
//   users[index].ageOfUser=age;
//   setUsers([...users])
// }



  return (
    <div className="App">



    <BrowserRouter>
{showNavbar()}
    <Routes>
  
    <Route/>
   

    </Routes>
    
    </BrowserRouter>






    </div>
  );
}

export default App;