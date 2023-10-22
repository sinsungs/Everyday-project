import React, {useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { habitsState } from './Recoil'; // Recoil 상태 정의 파일 경로
import { atom, useRecoilValue, useRecoilState } from 'recoil';

const Calendar = () => {

  const habits = useRecoilValue(habitsState);

  // habit.created_at.slice(0, 10)
  // habits.map(habit => {
  //   alert(habit.title + habit.created_at.slice(0, 10) + "부터"+ habit.count + "회" ); // 각 객체의 title 속성 출력

  // });

  const generatedData = [];

habits.forEach(habit => {
  // habit 매핑 
  const { title, created_at, count } = habit;
  // startDate로 지정 
  const startDate = new Date(created_at.slice(0, 10));
  // 목표횟수만큼 반복
  for (let i = 0; i < count; i++) {
    const newDate = new Date(startDate);
    // 시작날짜에서 다음날을 배열에 push 반복 
    newDate.setDate(startDate.getDate() + i);
    generatedData.push({
      title,
      date: newDate.toISOString().slice(0, 10),
    });
  }
});

console.log(generatedData);

const calendarEvents = generatedData.map(eventData => ({
  title: eventData.title,
  date: eventData.date,
  color: 'black', // 원하는 색상 지정
}));

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