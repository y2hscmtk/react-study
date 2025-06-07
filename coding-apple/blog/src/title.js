import React, { useState } from 'react';
// 글 제목에 대한 컴포넌트
function Title(props){
    // 좋아요 상태를 표시하기 위한 상태변수
    // state변수, 변경함수
    let [like,setLike] = useState(0) // 초기값은 0

    return(
        <div className='list'>
            <h4 onClick={()=>{props.setModalState(true); props.setTitle(props.index)}}>{props.titleName}
                {/* span태그는 div > h4 > 이후에 존재하므로, 
                span을 누르면 span,h4,div를 모두 누른 효과
                =>이벤트 버블(이벤트가 상위 요소로 퍼지는 현상)
                이벤트 버블을 멈추기 위해서 stopPropagation사용
                 */}
                <span onClick={(e)=>{setLike(like+1); e.stopPropagation()}}>👍</span>{like}
            </h4>
            <p>2월 17일 발행</p>
        </div>
    )
}

function setLike(){
    
}

export default Title;