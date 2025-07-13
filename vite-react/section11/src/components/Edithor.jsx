import "../Edithor.css"
import { useState,useRef,useContext } from "react"
import { TodoDispstchContext } from "./App"

const Edithor = () => {
    // useContext를 통해 TodoContext로부터 데이터 꺼내기
    // const data = useContext(TodoContext);
    const { onCreate } = useContext(TodoDispstchContext) // 필요한 데이터만 구조분해 할당을 통해 수령

    const [content, setContent] = useState("")
    const contentRef = useRef()
    // 이벤트 헨들러 정의
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13){ // 엔터키 클릭시 입력 이벤트 동작
            onSubmit()
        }
    }

    const onSubmit = () => {
        console.log("content = ", content)
        if (content === ""){
            contentRef.current.focus()
            return;
        } // 빈 문자열 저장 방지
        onCreate(content)
        setContent("")
    }

    return (
        <div className="Edithor">
            <input
                ref = {contentRef}
                value={content}
                onKeyDown={onKeyDown} // 사용자가 키보드 누를때 발동하는 이벤트 -> 엔터키 입력 구현
                onChange={onChangeContent}
                placeholder="새로운 Todo.." />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Edithor