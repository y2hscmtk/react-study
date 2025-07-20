import Button from "./Button"
import "./DiaryList.css"
import DiaryItem from "./DiaryItem"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const DiaryList = ({data}) => {
    const nav = useNavigate()

    const [sortType, setSortType] = useState("latest")

    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }

    const getSortedData = () => {
        // 원본 배열은 그대로 두고, 정렬된 새로운 배열을 반환
        // 매개변수로 정렬 기준을 넘겨주어야함
        return data.toSorted((a,b) => {
            if(sortType === 'oldest'){
                return Number(a.createdDate) - Number(b.createdDate); // 오래된순 정렬
            } else {
                return Number(b.createdDate) - Number(a.createdDate); // 최신순 정렬
            }
        })
    }

    const sortedData = getSortedData()

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button 
                    onClick={()=>nav(`/new`)}
                    text={"새 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default DiaryList