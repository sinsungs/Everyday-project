import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import Meet from './pages/Meeting';

// import Join from './pages/Join';
// import Login from './pages/Login';
// import MyPage from './pages/MyPage';


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

        {/* <Header /> */}

        {/* <Banner /> */}
        {/* <Category /> */}


        <Routes>

          {/* <Route path="/" element={<Meet/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/join" element={<Join/>}/>

          <Route path="/meet" element={<Meet/>}/>
          <Route path="/Influencer" element={<Influencer/>}/>
          <Route path="/post" element={<RecommendPost/>}/>
          <Route path="/list" element={<RecommendList/>}/>
          <Route path="/rank" element={<Ranking/>}/> */}



        </Routes>

        {/* <Footer /> */}
        

    </Router>
  );
}

export default App;