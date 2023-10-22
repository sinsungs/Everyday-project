import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import kakao_login_button from '../img/kakao_login_button.png';
// import kakao_payment_button from '../img/kakao_payment_button.png';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
// import { useRecoilValue } from 'recoil';

function Header() {

  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState([]);
  

  // useEffect(() => {

  //     axios.post('/user/profile', {}, { headers })
  //       .then(response => {

  //         setUserProfile(response.data);

  //         console.log(response.data);

  //       })
  //       .catch(error => {
  //         console.error('Error fetching user profile:', error);
  //       });

  // }, []);

  return (
    <header>
      <div className='header'>

        <div className='header-left' style={{width: '33.3%', flex: '1'}}>
        <Link to="/meet">
          <h1>Everyday Habit 매일 습관</h1>
        </Link>
        {/* <div style={{ width: '300px', height: '150px', margin: '20px', overflow: 'hidden' }}>
        <Link to="/meet">
        <img
          src='https://sinsung-s3.s3.ap-northeast-2.amazonaws.com/%EA%B5%BF%EC%9D%B8%ED%94%8C%EB%A3%A8%EC%96%B8%EC%8A%A4.jpg'
          alt='이미지'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </Link>
        </div> */}


        </div>

        <div className='header-center' style={{width: '33.3%', flex: '1'}}>
          
        </div>

        <div className='hedaer-right' style={{width: '33.3%', flex: '1', display: 'flex', justifyContent: 'flex-end'}}>

          {/* <button class="mypage-button">내 정보</button> */}
          {/* <Link to="/mypage"><button>마이페이지</button></Link> */}
          <Link to="/join"><button>회원가입</button></Link>
          <Link to="/login"><button>로그인</button></Link>
          
       
{/* 
{jwtToken ? (
            <>
            <div>
              
            <button onClick={handleKakaoPaymentClick} style={{backgroundColor:'yellow'}}>
              <img src={kakao_payment_button} alt='kakao_payment' />
            </button>
              <button onClick={handleLogout}>로그아웃</button>
  
              <Link to="/admin"><button>관리자</button><br/></Link>

            </div>


              <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: '0 0 100px', marginRight: '10px' }}>
              <img src={userProfile.imageUrl} alt='image' style={{width:'100px', height:'100px'}} />
              </div>

              <div>
              이메일 : {userProfile.email}<br/>
              닉네임 : {userProfile.username}<br/>
              보유금 : {userProfile.amount}<br/>
              경험치 : {userProfile.experience}
              </div>
              </div>
            </>
          ) : (
            <>

              <Link to="/join"><button className="login-button">회원가입</button></Link>
              <Link to="/login"><button className="login-button">로그인</button></Link>
            </>
          )} */}
        </div>



        {/* <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=b58919f7c93ec635d5c0b3697d4aac6b&redirect_uri=http://localhost:8080/auth/kakao/callback">
        <img src={kakao_login_button} alt='kakao_image' /></a> */}
        {/* <a href="http://localhost:8080/payment/ready">
        <img src={kakao_payment_button} alt='kakao_payment' /></a> */}


        {/* <form method="post" action="/kakaoPay">
        <button type="button">카카오페이로 결제하기</button>
        </form> */}

      </div>

      <div className='center'>
        <div class="explore--wrapper">

          <div class="explore--item">

            {/* <Link to="/meet">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_heart.svg" />
              <p>인플루언서<br/>소셜 모임</p>
            </Link>
            <Link to="/influencer">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_earlybird.svg" />
              <p>인플루언서<br/>둘러보기</p>
            </Link>
            <Link to="/list">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_seeding.svg" />
              <p>인플루언서<br/>추천 글</p>
            </Link>
            <Link to="/post">

              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_dribbler.svg" />
              <p>인플루언서<br/>추천글 작성하기</p>
            </Link>
            <Link to="/rank">
              <img src="https://plab-football.s3.amazonaws.com/static/img/explore_fire.svg" />
              <p>HOT 인플루언서</p>
            </Link> */}

          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;

