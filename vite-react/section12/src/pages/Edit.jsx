import { useParams } from "react-router-dom"
// URL 파라미터의 동적 경로를 가져올때 사용하는 훅

const Edit = () => {
    const params = useParams()

    return <div>{params.id} 번 일기입니다.</div>
}

export default Edit;