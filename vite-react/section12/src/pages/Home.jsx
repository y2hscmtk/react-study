import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"

import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

const getMonthlyDate = (pivotDate, data) => {
    // 시작 날짜 : 해당 월의 1일 0시 0분 0초
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime()
    // 종료 날짜 : 해당 월의 마지막날 23시 59분 59초
    // 0일은 없기 떄문에, 0일로 설정시 이전 달의 가장 마지막 날이 설정됨
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime()
    
    return data.filter(
        (item) => 
            beginTime <= item.createdDate && item.createdDate <= endTime
    )
}

const Home = () => {
    // 일기 데이터 공급받기
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date())

    const monthlyData = getMonthlyDate(pivotDate, data)
    console.log(monthlyData)
    

    const onIncreateMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return (
        <div>
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreateMonth} text={">"}/>}
            />
            <DiaryList data = {monthlyData} />
        </div>
    )
}

export default Home