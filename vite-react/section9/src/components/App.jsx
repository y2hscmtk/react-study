import "../App.css"
import { useState, useRef, useReducer } from 'react'
import Header from './Header'
import Edithor from './Edithor'
import List from './List'

// 더미데이터 객체 배열 정의
// 매번 재생성 될 필요 없으므로 외부로 분리
const mockData = [
  // 더미 데이터 생성용 객체 정의
  {
    id: 0,
    isDone: false,
    content : "React 공부하기",
    date : new Date().getTime() // 현재 시각
  },
  {
    id: 1,
    isDone: false,
    content : "스프링 공부하기",
    date : new Date().getTime() // 현재 시각
  },
  {
    id: 2,
    isDone: false,
    content : "잠자기",
    date : new Date().getTime() // 현재 시각
  },
]

// useReducer
// 컴포넌트 내부에 새로운 state를 생성하는 react hook
// 모든 useState는 useReducer로 대체 가능
// 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음 
// -> onCreate, onDelete 등을 state가 있는 함수의 내부에 두지 않아도 괜찮음 -> useState가 컴포넌트 내부에 선언되어야 했기 때문
// 상태 관리 코드가 함수 내부에 존재하고 그 기능이 복잡해질수록 가독성이 떨어지고, 유지보수하기 어려워진다.

// todos의 모든 상태변화를 reducer가 담당하게 됨
function reducer(state, action){
  switch(action.type){
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" :
      return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case "DELETE" :
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}


function App() {
  const [todos, disptach] = useReducer(reducer, mockData) // 기존 state를 모두 useReducer로 변경
  const idRef = useRef(3) // 아이디 설정용

  const onCreate  = (content) => {
    disptach({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

  const onUpdate = (targetId) => {
    disptach({
      type:"UPDATE",
      targetId : targetId
    })
  }

  const onDelete = (targetId) => {
    disptach({
      type:"DELETE",
      targetId: targetId
    })
  }

  return (
    <div className='App'>
      <Exam></Exam>
      <Header/>
      <Edithor onCreate={onCreate} />
      <List 
        todos={todos} 
        onUpdate={onUpdate} 
        onDelete={onDelete}/>
    </div>
  )
}

export default App
