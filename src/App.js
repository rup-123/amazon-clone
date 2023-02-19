import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router,Routes,Route}
from "react-router-dom";
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS>>>>',authUser);
      
      if(authUser){
        dispatch({
            type:'SET_USER',
            user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
      })
      }
    })
  },[])
    
    
 
  return (
    <Router>
     <div className="app">
    
       <Routes>
         <Route path='/checkout'  element={<> <Header/>  <Checkout/></>} />

         <Route path='/login'  element={<><Login/></>} />
        
         <Route path='/' element={<><Header/> <Home/> </>}/>
          {/* <Header/>
          <Home/>
         </Route> */}
       </Routes>
     </div>
    </Router>
    
  );
}

export default App;
