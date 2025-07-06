import "../App.css"
import { useState,useRef } from 'react'
import Header from './Header'
import Edithor from './Edithor'
import List from './List'
import Exam from "./Exam"

// useReducer
// 컴포넌트 내부에 새로운 state를 생성하는 react hook
// 모든 useState는 useReducer로 대체 가능
// 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음 
// -> onCreate, onDelete 등을 state가 있는 함수의 내부에 두지 않아도 괜찮음 -> useState가 컴포넌트 내부에 선언되어야 했기 때문
// 상태 관리 코드가 함수 내부에 존재하고 그 기능이 복잡해질수록 가독성이 떨어지고, 유지보수하기 어려워진다.
// => 별도의 함수로 분리해야함 => useReducer 활용


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
    content : "React 복습하기",
    date : new Date().getTime() // 현재 시각
  },
  {
    id: 2,
    isDone: false,
    content : "React 예습하기",
    date : new Date().getTime() // 현재 시각
  },
]

// state 는 어디에 만들어야할까?
// state를 이용하는 모든 컴포넌트들의 조상 - 여기선 App컴포넌트 - 에 만들어야한다.
function App() {
  const [todos, setTodos] = useState(mockData) // 더미데이터 정의
  const idRef = useRef(3) // 아이디 설정용

  const onCreate  = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    // state 변수는 useState를 통해서만 변경 가능
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos STate의 값들 중에
    // targetId와 일치하는 Id를 갖는 투두 아이템의 isDone 변환
    // 인수 : todos 배열에서 targetId와 일치하는 Id를 갖는 요소의 데이터만 바꾼 새로운 배열 생성 후 반환
    setTodos(todos.map((todo)=>{    
      if(todo.id === targetId){
        return {
          ...todo, // 기존 값
          isDone: !todo.isDone // isDone 값만 수정
        }
      }
      return todo
    }))
  }

  const onDelete = (targetId) => {
    // 인수 : targetId를 제외한 모든 todoItem
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Exam></Exam>
      {/* <Header/>
      <Edithor onCreate={onCreate} />
      <List 
        todos={todos} 
        onUpdate={onUpdate} 
        onDelete={onDelete}/> */}
    </div>
  )
}

export default App
