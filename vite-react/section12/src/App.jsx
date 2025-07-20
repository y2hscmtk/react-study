import "./App.css"
import { useReducer, useRef, createContext } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import Notfound from './pages/Notfound'

const mockData = [
  {
    id : 1,
    createdDate : new Date().getTime(),
    emotionId : 1,
    content: "1번 일기 내용"
  },
  {
    id : 2,
    createdDate : new Date().getTime(),
    emotionId : 2,
    content: "2번 일기 내용"
  }
]

// useReducer용
// 상태 관리 함수
function reducer(state, action) {
  switch (action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => 
        String(item.id) === String(action.data.id) 
          ? action.data 
          : item
      )
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return state;
  }
}

const DiaryStateContext = createContext(); // 상태 변수 관리
const DiaryDisptatchContext = createContext(); // 상태 변경 함수 관리

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3) // 기존 data에 이미 2개의 데이터가 존재하므로

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 새로운 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type : "UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content,
        }
      }
    )
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  
  return (
    // Routes에 의해서 path와 일치하는 컴포넌트를 찾아 랜더링한다.
    // Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
    // Routes 컴포넌트 외부에 작성된 컴포넌트는, 페이지와 관련없이 모든 컴포넌트에서 랜더링 된다.(예 : 헤더 컴포넌트, 등)
    <>
    {/* <button 
      onClick={() => {
        onCreate(new Date().getTime(), 1, "Hello")
      }}
    >
      일기 추가 테스트
    </button>
    <button 
      onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 테스트입니다.")
      }}
    >
      일기 수정 테스트
    </button>
    <button 
      onClick={() => {
        onDelete(1)
        }}
    >
      일기 삭제 테스트
    </button> */}
    
    <DiaryStateContext value={data}>
      <DiaryDisptatchContext 
        value={{
          onCreate,
          onUpdate,
          onDelete
        }}
      >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </DiaryDisptatchContext>
    </DiaryStateContext>
    </>
  )
}

export default App
