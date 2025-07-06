import {useReducer} from "react"

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// state의 값을 어떻게 변환(reducer)시킬지에 대한 정의를 컴포넌트 외부로 뺄수 있다.
// action : 아래에서 객체를 통해 전달되는 값들이 action 파라미터에 해당
// state는 useReducer를 통해 state 변수값이 할당됨
function reducer(state, action) {
    // 새로운 state 값을 반환시키면 useReducer에 의해 state값이 변환된다.
    switch(action.type){
        case "INCREASE" : return state + action.data;
        case "DECREASE" : return state - action.data;
    }
}
const Exam = () => {
    // dispatch : 발송하다, 급송하다
    // => 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    // 컴포넌트 내부에서 dispatch 함수 호출시 -> 상태 변화 요청 -> useReducer가 상태변화를 실제로 처리하게 될 함수(우리가 정의해야함(reducer))를 호출
    const [state, dispatch] = useReducer(reducer,0) // 두번째 인수로, state의 초기값을 전달할 수 있다.

    const onClickPlus = () => {
        // 인수 : 상태가 어떻게 변화되길 원하는지 넘긴다.
        // => 현재는 인수로 상태 변화에 대한 정보를 객체로 전달 시킴
        // => "액션 객체" 라고 부른다.
        dispatch({
            type: "INCREASE",
            data: 1 // 1만큼 INCREASE 시켜라
        }) // 상태 변화 요청
    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1 // 1만큼 DECREASE 시켜라
        }) // 상태 변화 요청
    }

    
    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam;