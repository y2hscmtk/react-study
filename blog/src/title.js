import React from 'react';
// 글 제목에 대한 컴포넌트
function Title(props){
    return(
        <div className='list'>
            <h4>{props.titleName}</h4>

            <p>2월 17일 발행</p>
        </div>
    )
}
export default Title;