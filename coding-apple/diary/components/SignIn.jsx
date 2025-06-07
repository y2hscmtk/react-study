import "./SignIn.css"; // CSS 파일 임포트

const SignIn = () => {
    return (
        <>
            <div className="signin-container">
                <div className="signin-box">
                    <h2 className="signin-title">로그인</h2>
                    <form onSubmit={() => console.log("제출")} className="signin-form">
                        <div className="form-group">
                            <label>이메일</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label>비밀번호</label>
                            <input type="password" name="password" />
                        </div>
                        <button type="submit" className="signin-button">
                            로그인
                        </button>
                    </form>
                    <div className="signup-redirect">
                        계정이 없으신가요?{" "}
                        <span className="signup-link" onClick={() => navigate("/signup")}>
                            회원가입
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
