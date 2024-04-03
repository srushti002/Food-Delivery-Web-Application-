
// import './App.css';
// import Home1 from './screens/Home1';
// import Login from  './screens/Login'

// import { Router,Routes,Route} from "react-router-dom"
// function App() {
//   return (
//     <Router>
//        <div >
//         <Routes>
//           <Route exact path="/" element={<Home1/>} />
//           <Route exact path="/Login" element={<Login/>} />
//         </Routes>
//         </div>
//     </Router>
      
   
 
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////best code belowwwwwwwwwww/////////////////////////////
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Login from './screens/Login'; // Import your Login page component
import Home1 from './screens/Home1'; // Import your Home page component
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import Home2 from './screens/Home2';


function App() {
  return (
   // <Provider store={store}>
    <Router>
      <div className="App">
      {/* <Navbar /> */}
        <Routes>
           <Route path="/" element={<Home2 />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/authRoutes" element={<Signup />}/>
          <Route path="/Home2" element={<Home2 />}/>
          <Route path="/Home1" element={<Home1 />}/>
          <Route path="/Cart" element={<Cart />}/>
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
    //</Provider>
  );
}

export default App;

