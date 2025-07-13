import "../List.css"
import { TodoContext } from "./App"
import TodoItem from "./TodoItem"
import { useState,useMemo,useContext } from "react"

const List = () => {
    // 구조분해 할당을 통해 TodoContext에서 필요한 데이터 수령
    const {todos} = useContext(TodoContext)
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

    const {totalCount, doneCount, notDoneCount} = 
        useMemo(() => {
            console.log("getAnalayziedData 호출")
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone
            ).length;
            const notDoneCount = totalCount - doneCount

            return {
                totalCount,
                doneCount,
                notDoneCount
            }
        }, [todos]) // useMemo는 depth의 상태가 변경될 경우(useEffect와 같음) 내부 로직 수행 후 결과를 반환한다. 반환된 결과를 받아서 사용할수도 있다.
        // useMemo는 메모이제이션 기법을 사용하여 여러번 상태를 변경시키지 않고 O(n)에 해결 가능(최적화)
    return (
        <div className="List">
            <h4>Todo List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChageSearch} placeholder="검색어를 입력하세요" />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    // return <TodoItem 
                    //     key={todo.id}
                    //     {...todo} 
                    //     onUpdate={onUpdate} 
                    //     onDelete={onDelete} 
                    // />
                    return <TodoItem key={todo.id} {...todo}/>
                })}
            </div>
        </div>
    )
}

export default List