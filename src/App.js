import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Signup from './components/Signup';

import './App.css';


function App() {

  const [show,setShow]=useState(false);

  // רשימת המשתמשים
const [users,setUsers]=useState([
  {name:"avi",email:"avi@gmail.com",password:"qwe123",serviceprovider:false,score:[],image:Image,reviews:[],skillcategory:"Developer",skills:[]},
  {name:"eli",email:"eli@gmail.com",password:"qwe123",serviceprovider:true,score:[],image:Image,reviews:[],skillcategory:"Tech",skills:[]},
  {name:"david",email:"david@gmail.com",password:"qwe123",serviceprovider:false,score:[],image:Image,reviews:[],skillcategory:"Techer",skills:[]}
]);
const[jobs,setJobs]=useState([
  {maintitle:"Development",category:"Computer",category2:"System",days:12,price:500,image:Image,email:"dev@gmail.com"}
])
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
  
    <Route path='/fiverr1' element={<Homepage setShow={setShow} />}/>
    <Route path='/signIn' element={<Signin  />}/>
    <Route path='/signUp' element={<Signup  />}/>

   

    </Routes>
    
    </BrowserRouter>






    </div>
  );
}

export default App;