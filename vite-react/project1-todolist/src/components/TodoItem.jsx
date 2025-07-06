import "../TodoItem.css"

const TodoItem = ({id,isDone, content, date, onUpdate}) => {
    const onChangeCheckBox = () => {
        onUpdate(id) // 체크박스가 눌렸을 경우, 해당 객체의 상태 변경
    }
    return (
        <div className="TodoItem">
            <input readOnly 
                onChange={onChangeCheckBox} // 요소가 버튼이 아닌 input 요소이므로, onChange를 사용한다.
                checked={isDone} 
                type="checkbox" />
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem