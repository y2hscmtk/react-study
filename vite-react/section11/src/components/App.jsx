import "../App.css"
import { useRef, useReducer, useCallback, createContext,useMemo } from 'react'
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

// 컨텍스트(일종의 저장소) 생성 -> 보통 컴포넌트 외부에 생성(컴포넌트가 랜더링 될때마다 새로운 컨텍스트가 생성되지 않도록 하기 위함)
// export const TodoContext = createContext() // 제공된 데이터를 수령받기 위해, 외부에서 TodoContext에 접근할수 있어야함 -> export를 통해 외부에서 사용 가능

// 컨텍스트 분리 -> 최적화
export const TodoStateContext = createContext() // 변화되는 값(todos)을 공급하기 위한 컨텍스트
export const TodoDispstchContext = createContext() // 변하지 않는 값들(onCreate, onUpdate, onDelete...)를 공급하는 컨텍스트


function App() {
  const [todos, disptach] = useReducer(reducer, mockData) // 기존 state를 모두 useReducer로 변경
  const idRef = useRef(3) // 아이디 설정용


  // useCallback
  // 함수의 불필요한 재생성을 방지하기 위한 훅
  // 콜백을 통해 생성된 함수를 props가 변경될때만 재생성되게함
  // onCreate, onDelete 등을 재생성되지 않도록 할수 있음
  // 최적화는 기능을 전부 완성한 뒤 마지막에 하는것이 바람직하다.
  // 최적화 대상 : 꼭 최적화가 필요할것같은 연산이나 컴포넌트에만 적용
  const onCreate = useCallback((content) => {
    disptach({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  },[])

  const onUpdate = useCallback((targetId) => {
    disptach({
      type:"UPDATE",
      targetId : targetId
    })
  },[])

  const onDelete = useCallback((targetId) => {
    disptach({
      type:"DELETE",
      targetId: targetId
    })
  },[])

  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  },[]) // [] 의 데이터가 변경될 때에만 재성성

  // props의 전달을 위해 중간다리 역할로 List 컴포넌트를 거쳐가기 때문에, Props Drilling이 발생하고 있다.
  // Props Drilling : 직계자손이 아닌 컴포넌트에게 Props를 전달하기 위해 다른 컴포넌트를 거쳐서 Props를 전달하는 경우를 의미
  // -> React Context를 통해 보완할수 있다.
  // creatContext를 통해 Context 객체를 생성할 수 있으며, 객체 하위의 Provider 컴포넌트를 통해 하위 컴포넌트들이 모두 같은 컨텍스트를 공유하도록 설정할 수 있다.
  return (
    <div className='App'>
      <Header/> 
      <TodoStateContext.Provider value={todos}>
        <TodoDispstchContext.Provider
          value={memoizedDispatch} > {/* useMemo를 사용하여 전달되는 객체를 최초 마운트 이후 재생성되지 않도록 설정 */}
            <Edithor/>
            <List/>
        </TodoDispstchContext.Provider>
      </TodoStateContext.Provider>
      
    </div>
  )
}

export default App
