import "../TodoItem.css"
import { memo, useContext } from "react"
import { TodoDispstchContext } from "./App"

const TodoItem = ({id,isDone,content,date }) => {
    // TodoContext에서 필요한 데이터 구조분해 할당을 통해 획득
    const {onUpdate, onDelete} = useContext(TodoDispstchContext)

    const onChangeCheckBox = () => {
        onUpdate(id) // 체크박스가 눌렸을 경우, 해당 객체의 상태 변경
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }
    return (
        <div className="TodoItem">
            <input readOnly 
                onChange={onChangeCheckBox} // 요소가 버튼이 아닌 input 요소이므로, onChange를 사용한다.
                checked={isDone} 
                type="checkbox" />
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

// React.memo
// React의 내장함수로서, 컴포넌트를 받아서 최적화된 컴포넌트(메모이제이션 컴포넌트)를 반환한다.
// 최적화된 컴포넌트는 부모 컴포넌트가 재랜더링 되더라도, 자신의 props가 변경되지 않는다면 재랜더링 되지 않는다.
// -> props를 depth로 취급한다.

// 고차 컴포넌트 (HOC) : meomoized 컴포넌트와 같이 컴포넌트를 인수로 받아서 추가적인 기능을 덧붙인 컴포넌트
// 최적화 반환 -> id,isDone,.. 등의 자신의 props가 변경되지 않는 한 리랜더링 방지 
// props 커스텀
// 콜백 함수의 반환값에 따라 Props가 바뀌었는지 안바뀌었는지를 판단한다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 기존방식 prevProps === nextProps 비교
//     // T -> Props 바뀌지 않음 -> 리랜더링 x
//     // F -> Props 바뀜 -> 리랜더링
//     // 따라서 True를 반환할경우 리랜더링을 하지 않으며, 콜백함수를 통해 비교 연산을 커스텀 가능
//     // onUpdate, onDelete 는 랜더링마다 새롭게 선언되는 함수이고, 함수는 First Class 객체이므로 매번 주소가 변경되어 다른값으로 판단됨
//     // 따라서 재랜더링 방지를 위해서는 이 로직을 커스텀해야함
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true // 위 4개의 값 이외에 변경사항은 true를 반환하여 재랜더링 방지
// }) 

export default memo(TodoItem)