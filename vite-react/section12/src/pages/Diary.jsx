import { useParams } from "react-router-dom"
// URL 파라미터의 동적 경로를 가져올때 사용하는 훅

const Diary = () => {
    const params = useParams()
    console.log(params) // diary/1 과 같이 전달시, 1이 전달됨 -> 해당하는 아이디의 데이터를 얻어올수 있다.

    return <div>{params.id} 번 일기입니다.</div>
}

export default Diary