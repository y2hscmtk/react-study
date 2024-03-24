import { useParams } from "react-router-dom"
import styled from 'styled-components' // 자바 스크립트 안에서 css까지 모두 적용 가능

// 컴포넌트 취급이기 때문에, props 활용 가능하다.
let NewBtn = styled.button`
    background : ${ props => props.bg};
    color : black;
    padding : 10px;
`

// 장점 1 : Styled Component를 통해 작성된 UI는 다른 .js파일에 관여하지 않는다.
// 장점 2 : css파일 없이 하나의 js파일에서 작업할 수 있다.
// 장점 3 : 로딩 시간이 단축 => <style></style> 로 넣어주기 때문
let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props){

    let {id} = useParams() // 파라미터 정보가 담기는 훅

    return(
        <div className="container">
            <Box>
                <NewBtn bg='blue'>노란색 버튼</NewBtn>
            </Box>
            
            <div className="row">
                <div className="col-md-6">
                    <img src={props.shoes[id].img}
                    width="80%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail