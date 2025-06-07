import { useParams } from "react-router-dom"

const Diary = () => {
    // 현재 브라우저에 명시한 url 파라미터 값을 가져옴
    const params = useParams()
    console.log(params)

    return <div>{params.id}번 일기</div>
}

export default Diary