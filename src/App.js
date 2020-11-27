import './App.css';
import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import firebase from 'firebase/app'
import "firebase/auth"
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import PageNotFound from './Pages/PageNotFound'
import { UserContext } from '../src/Context/UserContext';
import Footer from './Layout/footer'
import Header from './Layout/Header';
import FirebaseConfig from './Config/FirebaseConfig';

//init firebase
firebase.initializeApp(FirebaseConfig);

const App=()=>{
  const [user,setUser]=useState(null);

  return(
      <Router>
        <ToastContainer/>
        <UserContext.Provider value={{user,setUser}}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="*" component={PageNotFound}/>
          </Switch>
          <Footer/>
         </UserContext.Provider>
      </Router>
  )
}
export default App;
