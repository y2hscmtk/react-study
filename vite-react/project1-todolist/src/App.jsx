import './App.css'
import { useState,useRef } from 'react'
import Header from './components/Header'
import Edithor from './components/Edithor'
import List from './components/List'

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
    console.log("newTodo", newTodo)
    // state 변수는 useState를 통해서만 변경 가능
    setTodos([newTodo, ...todos]);
    console.log(todos)
  }
  return (
    <div className='App'>
      <Header/>
      <Edithor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  )
}

export default App
