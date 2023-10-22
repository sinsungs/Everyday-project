// import React from 'react';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { habitsState } from './Recoil'; // Recoil 상태 정의 파일 경로
import { atom, RecoilRoot, useRecoilState } from 'recoil';

function Habit() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [count, setCount] = useState('');
    const [habits, setHabits] = useState([]);

    const [recoil, setRecoil] = useRecoilState(habitsState);

      const [isChecked, setIsChecked] = useState(false);

      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };



    const openHabitModal = () => {
        setIsModalOpen(true); // 모달 창 열기
    };
    
    const closeHabitModal = () => {
        setIsModalOpen(false); // 모달 창 닫기
    };

    useEffect(() => {
    // Make a GET request to your server endpoint
    axios.get('/habit/getList')
      .then(response => {
        // Assuming your server returns an array of habits
        setHabits(response.data);
        setRecoil(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);




  const CreateHabit = (event) => {

    event.preventDefault();



    // if (!jwtToken) {
    //   // JWT 토큰이 없으면 메시지를 출력하고 POST 요청을 보내지 않음
    //   alert('로그인이 필요합니다.');
    //   return;
    // }

    // 엔티티 데이터를 생성하고 서버로 전송하는 로직을 작성하세요.
    const habitData = {
      title,
      count,
      
    };

    if (!title || !count) {
      alert('모든 필수 입력란을 채워주세요.');
      return;
    }

    // 예시: 데이터를 서버로 전송하는 코드
    axios.post('/habit', habitData, {
    //   headers: {
    //     Authorization: `Bearer ${jwtToken}`, // JWT 토큰을 헤더에 추가
    //   },
    })
      .then(response => {

        alert('습관을 생성했습니다.');
        closeHabitModal();
        window.location.reload();

      })
      .catch(error => {
        // 오류 처리 로직을 작성하세요.
        console.error('데이터 전송 중 오류가 발생했습니다.', error);
      });
  };

  return (

            <div className='habit'>
                
                <div className='habit-left' style={{flex: '1'}}>
                  <button className="login-button" onClick={openHabitModal}>
                      습관 만들기
                  </button>
                </div>
                <div className='habit-center' style={{flex: '1'}}>
                  <h1 style={{ color: 'white', textAlign: 'center' }}>오늘의 루틴</h1><br></br>
                    {habits.map(habits => (
                    <div key={habits.id}>
                    <ul class="flex-container">
                            <li class="flex-item-left">
                            <h2 style={{ color: 'white' }}>{habits.title}</h2>
                            {/* <p>습관 시작일 : {habits.created_at}</p> */}
                            <p style={{ color: 'white'}}>습관 시작일 : {habits.created_at.slice(0, 10)}</p>
                                <button>완료하기</button>
                            </li>

                    </ul>

                  </div>

                ))}


                </div>

                <div className='habit-right' style={{flex: '1'}}></div>

{/* 모달 창 */}
{isModalOpen && (
    <div className="modal">
            <div className="modal-content">
              <h3>습관 등록하기</h3>

            <form onSubmit={CreateHabit}>       

    <div>
        <label htmlFor="title">습관명 : </label>
        <input
          type="text" id="title"
          value={title} onChange={(event) => setTitle(event.target.value)}/>
      </div>
      <div>
        <label htmlFor="count">목표 횟수 : </label>
        <input
          type="number" id="count"
          value={count} onChange={(event) => setCount(event.target.value)}/>
      </div>
    
      <button type="submit">등록</button>
    </form>

              <button onClick={closeHabitModal} style={{float:'right', marginTop:'20px'}}>닫기</button>

          </div>
        </div>
)}



            </div>



  );
}

export default Habit;
