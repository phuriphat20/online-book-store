import React, { useState , useEffect } from "react";
import './Sign-Up.css'

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() === "" || password.trim() === "") {
      alert("กรุณากรอกทั้งอีเมลและรหัสผ่าน!!!");
      return;
    }

    console.log("Logging in...");
 
    const confirmLogin = window.confirm("คุณแน่ใจหรือไม่ที่จะเข้าสู่ระบบ?");
    if (confirmLogin) {

      console.log("Logging in...");
    }
  };

  return (
    <div className="SignIn">
      <div className="Full-BG">
        <div className="Container">
          <img className="Exit-Button" src="./images/cross-small.png" onClick={props.onCloseSignIn} />
          <img className="Logo" src="/images/Khaoklong.png" alt="Login Logo" />
          <h2 className="SignIn-Title">ยินดีต้อนรับ เข้าสู่ระบบ!</h2>
          <p className="SignIn-SubTitle">หากมีบัญชีแล้ว สามารถเข้าสู่ระบบด้วยบัญชีเดิมได้เลย</p>

          <input className="TextBox-Email"
            type="email"
            placeholder="อีเมลหรือ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input className="TextBox-Password"
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="Text-Forget">
            <u>ลืมรหัสผ่าน</u>
          </p>

          <button className="Button"
            type="submit"
            onClick={handleSubmit}>
            เข้าสู่ระบบ
          </button>

          <p className="Text-Reg">สมัครสมาชิกข้าวกล่อง e-book ด้วยอีเมล
            <a className="SignIn-Link" href="/signup">
              สมัครสมาชิก
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

