import React, { useState } from 'react';
// 글 제목에 대한 컴포넌트
function Title(props){
    // 좋아요 상태를 표시하기 위한 상태변수
    // state변수, 변경함수
    let [like,setLike] = useState(0) // 초기값은 0

    return(
        <div className='list'>
            <h4>{props.titleName}
                <span onClick={()=>setLike(like+1)}>👍</span>{like}
            </h4>
            <p>2월 17일 발행</p>
        </div>
    )
}

function setLike(){
    
}

export default Title;