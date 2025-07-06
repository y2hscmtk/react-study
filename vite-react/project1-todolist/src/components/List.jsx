import "../List.css"
import TodoItem from "./TodoItem"
import { useState } from "react"

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("")

    const onChageSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if(search === ""){ // 검색어가 없는 경우 전체 투두 반환
            return todos
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase())) // 검색어가 포함되는 경우의 값들만 반환
    }

    const filteredTodos = getFilteredData()

    return (
        <div className="List">
            <h4>Todo List</h4>
            <input value={search} onChange={onChageSearch} placeholder="검색어를 입력하세요" />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />
                })}
            </div>
        </div>
    )
}

export default List