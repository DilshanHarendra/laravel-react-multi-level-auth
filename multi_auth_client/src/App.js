import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import SuperAdminPage from "./pages/SuperAdminPage";
import TeacherPage from "./pages/TeacherPage";
import StudentPage from "./pages/StudentPage";
import HomePage from "./pages/HomePage";
import Navigation from "./component";
import TestPage from "./pages/TestPage";
function App() {
    const [user,setUser]=useState(undefined)
    useEffect(()=>{
        setUser(window.user)
    },[])

  return (
    <div className="App mt-5">
      <Router>
          <Navigation/>
        <Switch>
            <Route exact path="/" render={(props)=><HomePage {...props} user={user} />}/>
            <Route exact path="/admin" render={(props)=><AdminPage {...props} user={user} />}/>
            <Route exact path="/super-admin" render={(props)=><SuperAdminPage {...props} user={user} />}/>
            <Route exact path="/teacher" render={(props)=><TeacherPage {...props} user={user} />}/>
            <Route exact path="/home" render={(props)=><StudentPage {...props} user={user} />}/>
            <Route exact path="/test" render={(props)=><TestPage {...props} user={user} />}/>
        </Switch>





      </Router>
    </div>
  );
}

export default App;
