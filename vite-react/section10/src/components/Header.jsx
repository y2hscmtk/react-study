import '../Header.css'
import { memo } from 'react'

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

// const memoizedHeader = memo(Header) // Header 컴포넌트를 최적화 -> Props가 변경되지 않으면 재랜더링 되지 않도록 설정

export default memo(Header); // 최적화된 컴포넌트를 반환