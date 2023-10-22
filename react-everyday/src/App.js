import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
// import Footer from './components/Footer';

// import Meet from './pages/Meeting';

// import Join from './pages/Join';
  // import Login from './pages/Login';
// import MyPage from './pages/MyPage';
  import Calendar from './pages/Calendar';
  import Habit from './pages/Habit';


function App() {

  const [message, setMessage] = useState([]);
  
  const Proxytest = () => {
    axios.get('/proxy')
      .then((res) => {
        setMessage(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleButtonClick = () => {
    Proxytest();
  };

  return (

    
    
    <Router>
      <div>
        <button onClick={handleButtonClick}>Proxy 테스트</button>
      </div>

        <Header />
        <Habit />
        <Calendar />

        <Routes>


          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/join" element={<Join/>}/> */}


        </Routes>

        {/* <Footer /> */}
        

    </Router>
  );
}

export default App;