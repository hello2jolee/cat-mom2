import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./AuthForm.module.scss";

const cx = classNames.bind(styles);

const AuthForm = () => {
  const [newAccount, setNewAccount] = useState(true);

  return (
    <div className={cx("article")}>
      <form>
        <div className={cx("input-area")}>
          <input type="email" placeholder="이메일 주소를 입력해주세요." />
        </div>
        <div className={cx("input-area")}>
          <input
            type="password"
            placeholder="비밀번호는 6자 이상, 특수문자와 숫자를 포함시켜주세요."
          />
        </div>
        <div className={cx("button-area")}>
          <input
            type="submit"
            value={newAccount ? "가입하기" : "로그인하기"}
            className={cx("button-submit")}
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
