import React, {useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { habitsState } from './Recoil'; // Recoil 상태 정의 파일 경로
import { atom, useRecoilValue, useRecoilState } from 'recoil';

const Calendar = () => {

  const habits = useRecoilValue(habitsState);

  // const generatedData = [];

  // // habit.created_at.slice(0, 10)
  // habits.map(habit => {
  //   // alert(habit.title + habit.created_at.slice(0, 10) + "부터"+ habit.count + "회" ); // 각 객체의 title 속성 출력
  //   // console.log(habit.HabitStatuses);
  //   // console.log(habit.title );

  //   habit.HabitStatuses.map(habits => {
  //     console.log(habit.title );
  //     console.log(habits.date.slice(0, 10));
  //     console.log(habits.status);
    
  //   });

  // });

  const generatedData = habits.map(habit => {
    return habit.HabitStatuses.map(status => ({
      title: habit.title,
      date: status.date.slice(0, 10),
      status: status.status,
      color: getColorForStatus(status.status), // getColorForStatus 함수로 색상 지정
    }));
  }).flat();
  
  function getColorForStatus(status) {
    if (status === 0) {
      return 'black';
    } else if (status === 1) {
      return 'blue';
    } else if (status === 2) {
      return 'red';
    }
    // 다른 경우에 대한 색상을 지정하려면 여기에 추가
  }
  
  const calendarEvents = generatedData.map(eventData => ({
    title: eventData.title,
    date: eventData.date,
    color: eventData.color, // 색상 속성 사용
  }));

  



// habits.forEach(habit => {
//   // habit 매핑 
//   const { title, created_at, count } = habit;
//   // startDate로 지정 
//   const startDate = new Date(created_at.slice(0, 10));
//   // 목표횟수만큼 반복
//   for (let i = 0; i < count; i++) {
//     const newDate = new Date(startDate);
//     // 시작날짜에서 다음날을 배열에 push 반복 
//     newDate.setDate(startDate.getDate() + i);
//     generatedData.push({
//       title,
//       date: newDate.toISOString().slice(0, 10),
//     });
//   }
// });

// console.log(generatedData);

// const calendarEvents = generatedData.map(eventData => ({
//   title: eventData.title,
//   date: eventData.date,
//   color: 'black', // 원하는 색상 지정
// }));

  return (
    <div className='container'>
    <div className="calendar-container" style={{width: '80%', height: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth" // Set the initial view
        events={calendarEvents}
        className="custom-calendar" 
        eventColor="black" // Set the default color for all events
      />
    </div>
    </div>
  );
};

export default Calendar;