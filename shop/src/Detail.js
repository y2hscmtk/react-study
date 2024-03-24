import { useParams, useSearchParams } from "react-router-dom"
import {useEffect,useState} from 'react'
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
    let 찾은상품 = props.shoes.find(x => x.id == id) // 위치 변경되도 아이디로 찾으면 괜찮음

    // useEffect : Detail이 처음 mount(장착)될때, 업데이트 될 때 동작하는 훅
    // 업데이트 => 재랜더링
    // 랜더링이 다 끝난 이후에 수행된다.
    useEffect(()=>{
        console.log('안녕')
        // 오랜 시간이 드는 작업의 경우, useEffect에서 수행(밖에서 사용하면 그 이후에 페이지가 랜더링되므로)
    })

    let [count, setCount] = useState(0)

    return(
        <div className="container">
            <div className="alert alert-wraning">
                2초 이내 구매시 할인
            </div>
            {count}
            <Box>
                <NewBtn bg='blue' onClick={()=>setCount(count+1)}>노란색 버튼</NewBtn>
            </Box>
            
            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.img}
                    width="80%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail